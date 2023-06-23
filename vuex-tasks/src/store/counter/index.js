import counterActions from './actions'
import counterGetters from './getters'
import counterMutations from './mutations'

const cntModule = ({
    namespaced: true,
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutations,
    getters: counterGetters,
    actions: counterActions
})

export default cntModule