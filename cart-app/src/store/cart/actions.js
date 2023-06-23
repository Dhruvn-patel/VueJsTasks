export default {
    /* increment(context, payload) {
        console.log("context", context);
        setTimeout(() => {
            context.commit('increment', payload)
        }, 1000)
    } */

    addProductToCart(context, payload) {
        context.commit('addProductToCart', payload)
    },
    removeProductFromCart(context, payload) {
        context.commit('removeProductFromCart', payload)
    }
}