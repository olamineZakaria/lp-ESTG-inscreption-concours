// router/router.js

import { createWebHistory, createRouter } from "vue-router";
import welcome_page from '../components/welcome_page.vue'
import login_page from '../components/login_page.vue'
import regestration_page from '../components/regestration_page.vue'
import forget_password from '../components/forget_password.vue'
import cover_page from '../components/cover_page.vue'
import dashboard from '../components/dashboard.vue'
import templatepdf from '../components/Template.vue'
import admindashboard from '../components/admindashboard.vue'
const routes = [
    {
        path: '/',
        component: cover_page
    },
    {
        path: '/login',
        component: login_page
    },
    {
        path: '/pdf',
        component: templatepdf
    },
    {
        path: '/admin',
        component: admindashboard
    },
    {
        path: '/regestration',
        component: regestration_page
    },
    {
        path: '/forgetpassword',
        component: forget_password
    },
    {
        path: '/welcome',
        component: welcome_page
    },
    {
        path: '/dashboard',
        component: dashboard
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
