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
        submit() {
            let formData = new FormData();
            formData.append('name', this.name)
            formData.append('mail', this.mail)
            formData.append('message', this.message)

            fetch('https://lanseuo.herokuapp.com/mail-contact', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        this.alertBox.success = false
                        this.alertBox.text = data.error ? data.error : 'Es ist ein Fehler aufgetreten!'
                    } else if (data.success == 'sent') {
                        this.alertBox.success = true
                        this.alertBox.text = 'Die Nachricht wurde gesendet!'

                        this.name = ''
                        this.mail = ''
                        this.message = ''
                    }

                    this.alertBox.visible = true

                })
                .catch(e => {
                    throw e;
                })
        }
    }
}
</script>

<style scoped>
.alert-box {
    padding: 0 10px;
}

.alert-box.success {
    border: 3px solid rgb(66, 181, 131);
}

.alert-box.failure {
    border: 3px solid rgb(218, 13, 61);
}
</style>