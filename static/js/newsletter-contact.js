document.addEventListener('DOMContentLoaded', function () {
    // getElementsByClassName returns HTMLCollection (not iterable)
    [...document.getElementsByClassName('closebtn')].forEach(closeButton => {
        closeButton.addEventListener('click', function () {
            closeButton.parentElement.style.opacity = 0;
            closeButton.parentElement.style.display = 'none';
        })
    })

    // Contact Form
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        let contactSpinner = document.getElementById('contact-spinner');
        let contactAlert = document.getElementById('contact-alert');
        let contactAlertText = document.querySelector('#contact-alert p');

        contactSpinner.style.display = 'block';
        contactAlert.style.opacity = 0;
        contactAlert.style.display = 'none';

        let contactName = document.getElementById('contact-name')
        let contactMail = document.getElementById('contact-mail')
        let contactMessage = document.getElementById('contact-message')

        let formData = new FormData();
        formData.append('name', contactName.value)
        formData.append('mail', contactMail.value)
        formData.append('message', contactMessage.value)

        fetch('https://lanseuo.herokuapp.com/mail-contact', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                contactSpinner.style.display = 'none'

                if (data.error) {
                    contactAlert.style.border = '3px solid rgb(218, 13, 61)'
                    contactAlertText.innerText = data.error
                } else if (data.success == 'sent') {
                    contactAlert.style.border = '3px solid rgb(66, 181, 131)'
                    contactAlertText.innerText = 'Die Nachricht wurde gesendet!'

                    contactName.value = ''
                    contactMail.value = ''
                    contactMessage.value = ''
                }

                contactAlert.style.display = 'block';
                contactAlert.style.opacity = '1';
            })
            .catch(e => {
                throw e;
            })
    });
});