import { createRouter, createWebHistory } from "vue-router";

const router = createRouter ({
    history: createWebHistory (),
    routes: [
        {
            path: '/',
            component: () => import("../views/Home.vue")
        },
        {
            path: '/about',
            component: () => import("../views/About.vue")
        },
        {
            path: '/patients',
            component: () => import("../views/Patients.vue")
        },
        {
            path: '/forum',
            component: () => import("../views/Forum.vue")
        },
        {
            path: '/contact',
            component: () => import("../views/Contact.vue")
        }
    ]
})

export default router;