import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/settings.css'
import '@/assets/css/generic.css'
import '@/assets/css/elements.css'
import '@/assets/css/objects.css'
import '@/assets/css/utilities.css'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
