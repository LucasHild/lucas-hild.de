# Contact function for lucas-hild.de

An AWS Lambda function which is being called by the Vue.js frontend in order to send contact requests. The contact form is protected by Google ReCAPTCHA. Mails are being sent via Mailgun.

```
GOOS=linux GOARCH=amd64 go build -o bin/lucas-hild-contact .
serverless deploy
```