export default {
    increment(state, playload) {
        state.counter += playload.value
    },
    decrement(state) {
        state.counter--;
    },
}