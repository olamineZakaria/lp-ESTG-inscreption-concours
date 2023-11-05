// router.js

import { createWebHistory, createRouter } from "vue-router";
import welcome_page from '../components/welcome_page.vue'
import login_page from '../components/login_page.vue'
import regestration_page from '../components/regestration_page.vue'
import forget_password from '../components/forget_password.vue'

const routes = [
    {
        path: '/',
        component: welcome_page
    },
    {
        path: '/login',
        component: login_page
    },
    {
        path: '/regestration',
        component: regestration_page
    },
    {
        path: '/forgetpassword',
        component: forget_password
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
