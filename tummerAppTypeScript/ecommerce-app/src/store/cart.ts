interface cartData {
  cartitems: Array<cardDataItem>;
  total: number;
  qty: number;
}
interface cardDataItem {
  id: number;
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
      // total: [],
      // qty: [],
    };
  },
  getters: {
    total(state: any) {
      return state.total;
    },
    cartQty(state: any, _getter: any, rootState: any) {
      const userId = JSON.parse(
        localStorage.getItem("userCurrent") || ""
      ).userId;

      if (rootState.isAuthLogin === true) {
        const userLoginData = JSON.parse(
          localStorage.getItem("userLogin") || ""
        );
        for (let i = 0; i < userLoginData.length; i++) {
          if (userLoginData[i].id === userId) {
            state.qty = userLoginData[i].qty;
            break;
          }
        }
      }

      return state.qty;
    },
    items(state: any, _getter: any, rootState: any) {
      console.log("rootstate ::", rootState.isAuthLogin);
      const userId = JSON.parse(
        localStorage.getItem("userCurrent") || ""
      ).userId;

      if (rootState.isAuthLogin === true) {
        const userLoginData = JSON.parse(
          localStorage.getItem("userLogin") || ""
        );
        for (let i = 0; i < userLoginData.length; i++) {
          if (userLoginData[i].id === userId) {
            state.cartitems = userLoginData[i].cart;
            state.total = userLoginData[i].total;
            state.qty = userLoginData[i].qty;
            break;
          }
        }
      }

      return state.cartitems;
    },
  },
  mutations: {
    addProductToCart(state: any, payload: any) {
      let data;
      const userId = JSON.parse(
        localStorage.getItem("userCurrent") || ""
      ).userId;
      const checkLoginUser = JSON.parse(
        localStorage.getItem("isAuthLogin") || ""
      ).flag;

      if (checkLoginUser) {
        /* userCart */
        let idx = 0;
        const userLoginData = JSON.parse(
          localStorage.getItem("userLogin") || ""
        );
        let cartUserItem = [];
        for (let i = 0; i < userLoginData.length; i++) {
          if (userLoginData[i].id === userId) {
            cartUserItem = userLoginData[i].cart;
            idx = i;
            break;
          }
        }

        const productInCartIndex = cartUserItem.findIndex(
          (data: any) => data.id === payload.product.id
        );

        if (productInCartIndex >= 0) {
          cartUserItem[productInCartIndex].qty++;
        } else {
          const newItem = {
            id: payload.product.id,
            name: payload.product.name,
            image: payload.product.image,
            price: payload.product.price,
            qty: 1,
          };
          cartUserItem.push(newItem);
          state.total += payload.product.price;
          userLoginData[idx].total = state.total;
          userLoginData[idx].qty = cartUserItem.length;
        }
        userLoginData[idx].cart = cartUserItem;
        localStorage.setItem("userLogin", JSON.stringify(userLoginData));
      } else {
        /* cart addProduct */
        data = JSON.parse(localStorage.getItem("addCartProduct") || "");
        const items = data.items;
        let total = data.total;
        let qty = data.qty;
        const productInCartIndex = items.findIndex(
          (data: any) => data.id === payload.product.id
        );
        if (productInCartIndex >= 0) {
          items[productInCartIndex].qty++;
          // state.cartitems[productInCartIndex].qty++;
        } else {
          const newItem = {
            id: payload.product.id,
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
            qty: qty,
          })
        );
      }
    },

    increaseQty(state: any, payload: any) {
      let data;
      const checkLoginUser = JSON.parse(
        localStorage.getItem("isAuthLogin") || ""
      ).flag;
      const userId = JSON.parse(
        localStorage.getItem("userCurrent") || ""
      ).userId;
      if (checkLoginUser) {
        /* increase qty in userProduct */

        let idx = 0;
        const userLoginData = JSON.parse(
          localStorage.getItem("userLogin") || ""
        );
        let cartUserItem = [];
        for (let i = 0; i < userLoginData.length; i++) {
          if (userLoginData[i].id === userId) {
            cartUserItem = userLoginData[i].cart;
            idx = i;
            break;
          }
        }
        for (let i = 0; i < state.cartitems.length; i++) {
          if (state.cartitems[i].id === payload.Id) {
            state.cartitems[i].qty++;
            cartUserItem[i].qty++;
            state.total += state.cartitems[i].price;
            userLoginData[idx].total = state.total;
            break;
          }
        }

        userLoginData[idx].cart = cartUserItem;
        localStorage.setItem("userLogin", JSON.stringify(userLoginData));
      } else {
        data = JSON.parse(localStorage.getItem("addCartProduct") || "");
        const items = data.items;
        let total = data.total;
        for (let i = 0; i < state.cartitems.length; i++) {
          if (state.cartitems[i].id === payload.Id) {
            state.cartitems[i].qty++;
            items[i].qty++;
            total += items[i].price;
            state.total += state.cartitems[i].price;

            localStorage.setItem(
              "addCartProduct",
              JSON.stringify({
                items,
                total: total,
                qty: state.qty,
              })
            );
            break;
          }
        }
      }
    },
    deceraseQty(state: any, payload: any) {
      let data;
      const checkLoginUser = JSON.parse(
        localStorage.getItem("isAuthLogin") || ""
      ).flag;
      const userId = JSON.parse(
        localStorage.getItem("userCurrent") || ""
      ).userId;
      if (checkLoginUser) {
        /* decrease qty in userProduct */

        let idx = 0;
        const userLoginData = JSON.parse(
          localStorage.getItem("userLogin") || ""
        );
        let cartUserItem = [];
        for (let i = 0; i < userLoginData.length; i++) {
          if (userLoginData[i].id === userId) {
            cartUserItem = userLoginData[i].cart;
            idx = i;
            break;
          }
        }
        for (let i = 0; i < state.cartitems.length; i++) {
          if (state.cartitems[i].id === payload.Id) {
            if (state.cartitems[i].qty > 1) {
              state.cartitems[i].qty--;
              cartUserItem[i].qty--;
              state.total -= state.cartitems[i].price;
            } else {
              state.total -= state.cartitems[i].price;
              state.cartitems.splice(i, 1);
              cartUserItem.splice(i, 1);
              userLoginData[idx].qty = cartUserItem.length;
              state.qty -= 1;
              break;
            }
          }
        }
        userLoginData[idx].total = state.total;
        userLoginData[idx].cart = cartUserItem;
        localStorage.setItem("userLogin", JSON.stringify(userLoginData));
      } else {
        data = JSON.parse(localStorage.getItem("addCartProduct") || "");
        const items = data.items;
        let qty = data.qty;
        let total = data.total;
        for (let i = 0; i < state.cartitems.length; i++) {
          if (state.cartitems[i].id === payload.Id) {
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
            qty: state.qty,
          })
        );
      }
    },
    removeProductToCart(state: any, payload: any) {
      let data;
      const userId = JSON.parse(
        localStorage.getItem("userCurrent") || ""
      ).userId;
      const checkLoginUser = JSON.parse(
        localStorage.getItem("isAuthLogin") || ""
      ).flag;
      if (checkLoginUser) {
        /* remove product in userProduct */

        let idx = 0;
        const userLoginData = JSON.parse(
          localStorage.getItem("userLogin") || ""
        );
        let cartUserItem = [];
        for (let i = 0; i < userLoginData.length; i++) {
          if (userLoginData[i].id === userId) {
            cartUserItem = userLoginData[i].cart;
            idx = i;
            break;
          }
        }

        for (let i = 0; i < state.cartitems.length; i++) {
          if (state.cartitems[i].id === payload.Id) {
            state.total =
              state.total - state.cartitems[i].price * state.cartitems[i].qty;
            state.qty -= 1;
            state.cartitems.splice(i, 1);
            cartUserItem.splice(i, 1);
            userLoginData[idx].qty = cartUserItem.length;
            userLoginData[idx].total = state.total;
            break;
          }
        }
        userLoginData[idx].cart = cartUserItem;
        localStorage.setItem("userLogin", JSON.stringify(userLoginData));
      } else {
        /* remove product in cart */
        data = JSON.parse(localStorage.getItem("addCartProduct") || "");
        const items = data.items;
        let qty = data.qty;
        let total = data.total;
        for (let i = 0; i < state.cartitems.length; i++) {
          if (state.cartitems[i].id === payload.Id) {
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
                qty: state.qty,
              })
            );

            break;
          }
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
