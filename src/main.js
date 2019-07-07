import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
    router,
    autoTracking: {
        pageviewTemplate(route) {
            return {
                page: route.path,
                title: route.name,
                location: window.location.href
            }
        }
    },
    set: [
        { field: 'anonymizeIp', value: true }
    ],
    debug: {
        sendHitTask: process.env.NODE_ENV === 'production'
    }
})

import '@/assets/css/settings.css'
import '@/assets/css/generic.css'
import '@/assets/css/elements.css'
import '@/assets/css/objects.css'
import '@/assets/css/utilities.css'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
