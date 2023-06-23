import { createStore } from 'vuex'
import rootMutations from './mutations'
import rootGetters from './getters'
import rootActions from './actions'
import cntModule from './counter/index'
const store = createStore({
    modules: {
        counterStore: cntModule
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