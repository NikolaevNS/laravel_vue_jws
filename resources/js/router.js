import {createRouter} from "vue-router";
import {createWebHistory} from "vue-router";

const router = createRouter({
    routes: [
        {
            path: '/fruits', component: () => import('./components/Fruit/Index.vue'),
            name: 'fruit.index'
        },
        {
            path: '/users/login', component: () => import('./components/User/Login.vue'),
            name: 'user.login'
        },
        {
            path: '/users/registration', component: () => import('./components/User/Registration.vue'),
            name: 'user.registration'
        },
        {
            path: '/users/personal', component: () => import('./components/User/Personal.vue'),
            name: 'user.personal'
        },

        {
            path: '/:pathMatch(.*)*', component: () => import('./components/User/Personal.vue'),
            name: '404'
        },

    ],
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next()
        } else {
            return next({
                name: 'user.login'
            })
        }
    }

    if ((to.name === 'user.login' || to.name === 'user.registration') && accessToken) {
        return next({
            name: 'user.personal'
        })
    }

    next();
});

export default router
