export default {
    addProductToCart(state, payload) {

        const productInCartIndex = state.items.findIndex(
            (ci) => ci.productId === payload.product.id
        );
        if (productInCartIndex >= 0) {
            state.items[productInCartIndex].qty++;
            console.log("productInCartIndex", state.items[productInCartIndex]);
        } else {
            const newItem = {
                productId: payload.product.id,
                title: payload.product.title,
                image: payload.product.image,
                price: payload.product.price,
                qty: 1,
            };
            state.items.push(newItem);
        }
        state.qty++;
        state.total += payload.product.price;
    },

    removeProductFromCart(state, payload) {
        const productInCartIndex = state.items.findIndex(
            (cartItem) => cartItem.productId === payload.prodId
        );
        const prodData = state.items[productInCartIndex];
        state.items.splice(productInCartIndex, 1);
        state.qty -= prodData.qty;
        state.total -= prodData.price * prodData.qty;
    },

}