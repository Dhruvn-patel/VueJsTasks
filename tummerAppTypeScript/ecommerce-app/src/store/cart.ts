interface cartData {
  cartitems: Array<cardDataItem>;
  total: number;
  qty: number;
}
interface cardDataItem {
  productId: number;
  title: string;
  image: string;
  price: number;
  qty: number;
}
export const cart = {
  namespaced: true,
  state() {
    return {
      cartitems: JSON.parse(localStorage.getItem("addCartProduct") || "").items,
      total: JSON.parse(localStorage.getItem("addCartProduct") || "").total,
      qty: JSON.parse(localStorage.getItem("addCartProduct") || "").qty,
      // cartitems: [],
      // total: 0,
      // qty: 0,
    };
  },
  getters: {
    total(state: any) {
      return state.total;
    },
    cartQty(state: any) {
      return state.qty;
    },
    items(state: any, _getter: any, rootState: any) {
      console.log("rootstate ::", rootState.isAuthLogin);

      if (rootState.isAuthLogin) {
        state.cartitems = JSON.parse(
          localStorage.getItem("userCartProduct") || ""
        ).items;
      }
      return state.cartitems;
    },
  },
  mutations: {
    addProductToCart(state: any, payload: any) {
      /* const productInCartIndex = state.cartitems.findIndex(
        (data: any) => data.productId === payload.product.id
      );
      if (productInCartIndex >= 0) {
        state.cartitems[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.product.id,
          name: payload.product.name,
          image: payload.product.image,
          price: payload.product.price,
          qty: 1,
        };
        state.cartitems.push(newItem);
        state.qty++;
      }
      state.total += payload.product.price; */
      const data = JSON.parse(localStorage.getItem("addCartProduct") || "");
      const items = data.items;
      let total = data.total;
      let qty = data.qty;
      const productInCartIndex = items.findIndex(
        (data: any) => data.productId === payload.product.id
      );
      if (productInCartIndex >= 0) {
        items[productInCartIndex].qty++;
        state.cartitems[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: payload.product.id,
          name: payload.product.name,
          image: payload.product.image,
          price: payload.product.price,
          qty: 1,
        };
        qty++;
        items.push(newItem);
        state.cartitems.push(newItem);
        state.qty++;
      }
      state.total += payload.product.price;
      total += payload.product.price;
      localStorage.setItem(
        "addCartProduct",
        JSON.stringify({
          items,
          total: total,
          userId: null,
          qty: qty,
        })
      );
    },

    increaseQty(state: any, payload: any) {
      console.log("state.cartitems", payload.Id);

      const data = JSON.parse(localStorage.getItem("addCartProduct") || "");
      const items = data.items;
      let total = data.total;
      for (let i = 0; i < state.cartitems.length; i++) {
        if (state.cartitems[i].productId === payload.Id) {
          state.cartitems[i].qty++;
          items[i].qty++;
          total += items[i].price;
          state.total += state.cartitems[i].price;
          localStorage.setItem(
            "addCartProduct",
            JSON.stringify({
              items,
              total: total,
              userId: null,
              qty: state.qty,
            })
          );
          break;
        }
      }
    },

    deceraseQty(state: any, payload: any) {
      const data = JSON.parse(localStorage.getItem("addCartProduct") || "");
      const items = data.items;
      let qty = data.qty;
      let total = data.total;
      for (let i = 0; i < state.cartitems.length; i++) {
        if (state.cartitems[i].productId === payload.Id) {
          if (state.cartitems[i].qty > 1) {
            state.cartitems[i].qty--;
            items[i].qty--;
            total -= items[i].price;
            state.total -= state.cartitems[i].price;
          } else {
            state.total -= state.cartitems[i].price;
            total -= items[i].price;
            state.cartitems.splice(i, 1);
            items.splice(i, 1);
            qty--;
            state.qty -= 1;
            break;
          }
        }
      }
      localStorage.setItem(
        "addCartProduct",
        JSON.stringify({
          items,
          total: total,
          userId: null,
          qty: state.qty,
        })
      );
    },
    removeProductToCart(state: any, payload: any) {
      const data = JSON.parse(localStorage.getItem("addCartProduct") || "");
      const items = data.items;
      let qty = data.qty;
      let total = data.total;
      for (let i = 0; i < state.cartitems.length; i++) {
        if (state.cartitems[i].productId === payload.Id) {
          console.log("products ::", state.cartitems[i]);

          state.total =
            state.total - state.cartitems[i].price * state.cartitems[i].qty;
          state.qty -= 1;

          state.cartitems.splice(i, 1);
          total = total - items[i].price * items[i].qty;
          qty -= 1;

          items.splice(i, 1);

          localStorage.setItem(
            "addCartProduct",
            JSON.stringify({
              items,
              total: total,
              userId: null,
              qty: qty,
            })
          );

          break;
        }
      }
    },
  },
  actions: {
    addProductToCart(context: any, payload: any) {
      context.commit("addProductToCart", payload);
    },
    increaseQty(context: any, payload: any) {
      context.commit("increaseQty", payload);
    },
    deceraseQty(context: any, payload: any) {
      context.commit("deceraseQty", payload);
    },
    removeProductToCart(context: any, payload: any) {
      context.commit("removeProductToCart", payload);
    },
  },
};
