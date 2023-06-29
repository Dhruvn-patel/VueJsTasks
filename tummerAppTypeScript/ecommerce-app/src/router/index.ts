import { createRouter, createWebHistory } from "vue-router";
import categoryList from "../components/category/categoryList.vue";
import subcategoryList from "../components/subcategory/subcategoryList.vue";
import products from "../components/products/productList.vue";
import singleProduct from "../components/products/singleProduct.vue";
import checkOut from "../components/checkOut/checkOut.vue";
import cartItems from "../components/cart/cartItems.vue";
import login from "../components/auth/login.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "login",
      path: "/login",
      component: login,
    },
    {
      name: "category",
      path: "/",
      component: categoryList,
    },
    {
      name: "subcategory",
      path: "/subcategory/:id",
      component: subcategoryList,
    },
    {
      name: "products",
      path: "/products/:id",
      component: products,
    },
    {
      name: "singleProduct",
      path: "/products/singleProduct/:id",
      component: singleProduct,
    },
    {
      name: "cartItems",
      path: "/cartItems",
      component: cartItems,
    },
    {
      name: "checkout",
      path: "/checkout",
      component: checkOut,
    },
    // {
    //   path: "/:notfound(.*)",
    // },
  ],
});

export default router;
