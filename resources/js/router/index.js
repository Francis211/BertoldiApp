//Lo usamos asi porque no existe VueRouter 
import {createRouter, createWebHistory} from "vue-router";




import WelcomeMessage from '../components/WelcomeMessage.vue'
import User from '../components/User.vue'

const routes = [
    {path: "/", component: WelcomeMessage},
    {path: "/user", component: User},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

