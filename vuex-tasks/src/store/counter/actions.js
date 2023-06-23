export default {
    increment(context, payload) {
        console.log("context", context);
        setTimeout(() => {
            context.commit('increment', payload)
        }, 1000)
    }
}