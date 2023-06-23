export default {
    /*     handleCounter(state, getters) {
            const counter = getters.counterValue
            if (counter < 0)
                return 0;
            else if (counter > 100)
                return 100;
            return counter;
        }, */
    total(state) {
        return (state.total).toFixed(2);
    },
    cartQty(state) {
        return state.qty;
    },
    items(state) {
        return state.items;
    },
}