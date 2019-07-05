import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import '@/assets/css/settings.css'
import '@/assets/css/generic.css'
import '@/assets/css/elements.css'
import '@/assets/css/objects.css'
import '@/assets/css/utilities.css'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
