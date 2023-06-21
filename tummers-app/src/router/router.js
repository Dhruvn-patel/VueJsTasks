import { createRouter, createWebHistory } from 'vue-router'
import categoryComponent from '../components/category/category-component.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/", name: "Home"
        , component: categoryComponent
    },
    {
        path: '/:notfound(.*)'
    }]
})



export default router;