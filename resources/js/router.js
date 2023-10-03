import {createRouter} from "vue-router";
import {createWebHistory} from "vue-router";

export const router = createRouter({
    routes: [
        {
            path: '/fruits', component: () => import('./components/Fruit/Index.vue'),
            name: 'fruit.index'
        }
    ],
    history: createWebHistory()
})
