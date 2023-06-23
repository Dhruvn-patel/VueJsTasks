export default {
    /* handle async tasks */
    login(context) {
        context.commit('setLogin', { flag: true })
    },
    logout(context) {
        context.commit('setLogin', { flag: false })
    }
}