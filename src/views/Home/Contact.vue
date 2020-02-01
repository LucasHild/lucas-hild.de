<template>
    <section class="contact" id="contact">
        <div class="container">
            <h2>Kontakt</h2>
            <p class="section-introduction">Hast Du eine Frage? Kontaktiere mich!</p>
            <div class="alert-box" v-if="alertBox.visible" :class="{ success: alertBox.success }">
                <p>{{ alertBox.text }}</p>
            </div>
            <form @submit.prevent="submit">
                <input type="text" v-model="name" placeholder="Name" />
                <input type="email" v-model="mail" placeholder="E-Mail-Adresse" />
                <textarea v-model="message" placeholder="Nachricht" />
                <small>
                    Diese Seite wird durch reCAPTCHA geschützt und die Google
                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                    >Datenschutzerklärung</a> sowie deren
                    <a href="https://policies.google.com/terms" target="_blank">Geschäftsbedingungen</a> sind gültig.
                </small>
                <div class="button-wrapper">
                    <p class="button" @click="submit">
                        <span v-if="!loading">Absenden</span>
                        <span v-else>Wird gesendet ...</span>
                    </p>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'contact',

    data() {
        return {
            name: '',
            mail: '',
            message: '',
            alertBox: {
                visible: false,
                text: 'ab',
                success: true
            },
            loading: false
        }
    },

    methods: {
        async submit() {
            this.loading = true

            let requestData = {
                name: this.name,
                mail: this.mail,
                message: this.message,
                recaptchaToken: await this.recaptchaToken()
            }

            let response = await fetch('https://a7cug9jwkl.execute-api.us-east-1.amazonaws.com/dev/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData)
            })

            let responseData = await response.json()
            this.alertBox.text = responseData.message
            let success = response.status == 200
            this.alertBox.success = success

            if (success) {
                this.name = ''
                this.mail = ''
                this.message = ''
            }

            this.alertBox.visible = true
            this.loading = false
        },

        recaptchaToken() {
            const recaptchaSiteKey = '6Ld1UNQUAAAAAF9dlqlyxIGRKqFGsgvtAXeIOIXl'

            return new Promise(resolve => {
                grecaptcha.ready(async () => {  // eslint-disable-line
                    const token = await grecaptcha.execute(recaptchaSiteKey) // eslint-disable-line
                    resolve(token)
                })
            })
        }
    }
}
</script>

<style scoped>
.alert-box {
    padding: 0 10px;
    border: 3px solid rgb(218, 13, 61);
}

.alert-box.success {
    border: 3px solid rgb(66, 181, 131);
}
</style>