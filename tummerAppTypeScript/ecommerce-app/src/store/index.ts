import { createStore } from "vuex";
import { category } from "./category";
import { products } from "./products";
import { subcategory } from "./subcategory";
import { cart } from "./cart";

const store = createStore({
  modules: {
    categoryModule: category,
    subcategoryModule: subcategory,
    productModule: products,
    cartModule: cart,
  },
  state() {
    return {
      isAuthLogin: JSON.parse(localStorage.getItem("isAuthLogin") || "").flag,
      timmerFlag: true,
      userLoginCredential: [
        { id: 1, username: "Dhruv", password: "123", active: false },
        { id: 2, username: "admin", password: "123456", active: false },
      ],
    };
  },
  mutations: {
    LogOutFunction(state: any) {
      state.isAuthLogin = !state.isAuthLogin;
      // get isAuthLogin
      const loginData = JSON.parse(localStorage.getItem("isAuthLogin") || " ");
      // set isAuthLogin
      localStorage.setItem(
        "isAuthLogin",
        JSON.stringify({
          id: loginData.userId,
          name: loginData.username,
          flag: state.isAuthLogin,
        })
      );
      const getdata = JSON.parse(localStorage.getItem("addCartProduct") || "");
      const { items, qty, total } = getdata;
      // addCartProduct
      localStorage.setItem(
        "addCartProduct",
        JSON.stringify({ items, qty, total, userId: null })
      );
    },
    timmerToogleFunction(state: any) {
      state.timmerFlag = false;
    },
  },
  actions: {
    LogOutFunction(context: any) {
      context.commit("LogOutFunction");
    },
    timmerToogleFunction(context: any) {
      context.commit("timmerToogleFunction");
    },
  },
  getters: {
    isLogin(state: any) {
      return state.isAuthLogin;
    },
    timmerFlag(state: any) {
      return state.timmerFlag;
    },
  },
});

export default store;
