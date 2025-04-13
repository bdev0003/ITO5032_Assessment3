import { createRouter, createWebHistory } from "vue-router";

const router = createRouter ({
    history: createWebHistory (),
    routes: [
        {
            path: '/',
            component: () => import("../views/Home.vue"),
            name: 'home'
        },
        {
            path: '/about',
            component: () => import("../views/About.vue"),
            name: 'about'
        },
        {
            path: '/patients',
            component: () => import("../views/Patients.vue"),
            name: 'patients'
        },
        {
            path: '/contact',
            component: () => import("../views/Contact.vue"),
            name: 'contact'
        }
    ]
})

export default router;