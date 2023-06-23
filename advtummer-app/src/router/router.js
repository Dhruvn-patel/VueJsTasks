import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:notfound(.*)'
        }]
})



export default router;