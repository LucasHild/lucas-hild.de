import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Imprint from '@/views/Imprint.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/impressum',
            name: 'imprint',
            component: Imprint
        }
    ]
})
