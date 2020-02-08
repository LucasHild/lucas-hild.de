package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"regexp"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/mailgun/mailgun-go"
	"github.com/pkg/errors"
)

var (
	recaptchaSecretKey      = os.Getenv("RECAPTCHA_SECRET_KEY")
	recaptchaScoreThreshold = 0.5
	mailgunAPIKey           = os.Getenv("MAILGUN_API_KEY")
	mailgunDomain           = os.Getenv("MAILGUN_DOMAIN")
	receiverMail            = os.Getenv("RECEIVER_MAIL")
)

type ClientError struct {
	Cause      error  `json:"-"`
	StatusCode int    `json:"-"`
	Message    string `json:"message"`
}

func (e ClientError) Error() string {
	return e.Cause.Error()
}

func (e ClientError) toJSON() string {
	b, _ := json.Marshal(e)
	return string(b)
}

func NewClientError(err error, statusCode int, message string) error {
	return &ClientError{
		Cause:      err,
		StatusCode: statusCode,
		Message:    message,
	}
}

type ServerError struct {
	Cause      error  `json:"-"`
	StatusCode int    `json:"-"`
	Message    string `json:"message"`
}

func (e ServerError) Error() string {
	return e.Cause.Error()
}

func (e ServerError) toJSON() string {
	b, _ := json.Marshal(e)
	return string(b)
}

func main() {
	lambda.Start(handleRequest)
}

func handleRequest(ctx context.Context, r events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	rsp, err := contactHandler(r)
	if err != nil {
		if serr, ok := err.(*ClientError); ok {
			rsp = events.APIGatewayProxyResponse{Body: serr.toJSON(), StatusCode: serr.StatusCode}
		} else {
			log.Println(err)
			serr := ServerError{Cause: err, StatusCode: 500, Message: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder senden Sie Ihre Kontaktanfrage an \"contact@lucas-hild.de\"."}
			rsp = events.APIGatewayProxyResponse{Body: serr.toJSON(), StatusCode: 500}
		}
	}

	rsp.Headers = map[string]string{"Access-Control-Allow-Origin": "*"}
	return rsp, nil
}

func contactHandler(r events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	type request struct {
		Name           string `json:"name"`
		Mail           string `json:"mail"`
		Message        string `json:"message"`
		RecaptchaToken string `json:"recaptchaToken"`
	}
	var requestData request
	err := json.Unmarshal([]byte(r.Body), &requestData)
	if err != nil {
		return events.APIGatewayProxyResponse{}, NewClientError(err, 400, "JSON can't be parsed")
	}

	err = validateUserInput(requestData.Name, requestData.Mail, requestData.Message)
	if err != nil {
		return events.APIGatewayProxyResponse{}, err
	}

	human, err := isHuman(requestData.RecaptchaToken)
	if err != nil {
		return events.APIGatewayProxyResponse{}, err
	}
	if !human {
		return events.APIGatewayProxyResponse{}, NewClientError(err, 400, "I don't like bots")
	}

	err = sendMail(requestData.Name, requestData.Mail, requestData.Message)
	if err != nil {
		return events.APIGatewayProxyResponse{}, errors.Wrap(err, "Can't send mail")
	}

	type response struct {
		Message string `json:"message"`
	}
	body, _ := json.Marshal(response{Message: "Die Nachricht wurde erfolgreich gesendet"})

	return events.APIGatewayProxyResponse{Body: string(body), StatusCode: 200}, nil

}

func validateUserInput(name, mail, message string) error {
	if name == "" || mail == "" || message == "" {
		return NewClientError(nil, 400, "Alle Felder müssen ausgefüllt sein")
	}

	re := regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
	isValidMail := re.MatchString(mail)
	if !isValidMail {
		return NewClientError(nil, 400, "Die E-Mail-Adresse ist ungültig")
	}

	return nil
}

func isHuman(token string) (bool, error) {
	url := fmt.Sprintf("https://www.google.com/recaptcha/api/siteverify?response=%v&secret=%v", token, recaptchaSecretKey)
	resp, err := http.Get(url)
	if err != nil {
		return false, err
	}

	defer resp.Body.Close()

	type googleResponse struct {
		Score float64 `json:"score"`
	}
	var result googleResponse
	json.NewDecoder(resp.Body).Decode(&result)

	return result.Score > recaptchaScoreThreshold, nil
}

func sendMail(name, mail, body string) error {
	mg := mailgun.NewMailgun(mailgunDomain, mailgunAPIKey)

	sender := fmt.Sprintf("%v <%v>", name, mail)
	subject := "Kontaktformular (lucas-hild.de)"

	message := mg.NewMessage(sender, subject, body, receiverMail)
	_, _, err := mg.Send(message)
	return err
}
