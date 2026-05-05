import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import sobre from '../views/sobre.vue'
import contato from '../views/contato.vue'

const routes = [
{ path: '/', component: home },
{ path: '/sobre', component: sobre },
{ path: '/contato', component: contato },
]
const router = createRouter({
history: createWebHistory(),
routes
})
export default router