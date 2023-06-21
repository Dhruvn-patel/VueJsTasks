import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import UserInfo from "./components/UserInfo.vue";
import TheAlbumInfo from "./components/TheAlbumInfo.vue";
import User from "./components/User.vue";
import TheuserFooter from "./components/TheuserFooter.vue";
import ThealbumFooter from "./components/ThealbumFooter.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/albums', props: true, },
        {
            path: '/users',
            components: { default: UserInfo, footer: TheuserFooter },
            beforeEnter(to, from, next) {
                console.log("user route guard ==>", to, from);
                next()
            }
        },
        {
            name: "albumsInfo", path: '/albums', meta: { auth: true }, components: { default: TheAlbumInfo, footer: ThealbumFooter },
            children: [{ name: "albumsInfoChild", path: ':id', component: User, props: true }]
        },

    ],
    /* scrollbehavior  */
    scrollBehavior(to, from, savedPostions) {
        // console.log("to", to);
        // console.log("from", from);
        // console.log("savedPostions", savedPostions);
        if (savedPostions) {
            return savedPostions
        }
        else
            return { left: 0, top: 0 }
    }
});
/* global  */
router.beforeEach((to, from, next) => {
    console.log("global Guard ==>", to, from);
    next()
})




createApp(App).use(router).mount('#app')
