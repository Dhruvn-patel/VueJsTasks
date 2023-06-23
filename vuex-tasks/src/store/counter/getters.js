export default {
    getLoginPath(state, rootState) {

        return rootState.isLogin
    },
    counterValue(state) {
        return state.counter * 10;
    },
    handleCounter(state, getters) {
        const counter = getters.counterValue
        if (counter < 0)
            return 0;
        else if (counter > 100)
            return 100;
        return counter;
    },
}