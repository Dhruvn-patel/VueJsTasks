import { createRouter, createWebHistory } from 'vue-router'
import categoryList from "../components/category/categoryList.vue"
import subcategoryList from '../components/subcategory/subcategoryList.vue'
import products from '../components/products/productList.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: categoryList
        },
        {
            path: '/subcategory',
            component: subcategoryList
        },
        {
            path: '/products',
            component: products
        },
        {
            path: '/:notfound(.*)'
        }]
})



export default router;