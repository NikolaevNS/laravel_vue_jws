import {createRouter} from "vue-router";
import {createWebHistory} from "vue-router";

export const router = createRouter({
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

    ],
    history: createWebHistory()
})
