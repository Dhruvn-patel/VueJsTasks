import { createStore } from 'vuex'
import rootMutations from './mutations'
import rootGetters from './getters'
import rootActions from './actions'
import cartModule from './cart/index'
import productModule from './products/product'

const store = createStore({

    modules: {
        productStore: productModule,
        cartStore: cartModule
    },
    state() {
        return {
            isLogin: false
        }
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
})

export default store;