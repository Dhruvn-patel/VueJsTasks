<template>
  <div>
    <div>
      <theHeader />
    </div>
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import theHeader from "../components/header/header.vue";

export default {
  name: "HomePages",
  components: { theHeader },
  created() {
    const userLoginCredential = [
      {
        id: 1,
        username: "dhruv",
        password: "123",
        cart: [],
        order: [],
        total: 0,
        qty: 0,
        active: false,
      },
      {
        id: 2,
        username: "admin",
        password: "123456",
        cart: [],
        order: [],
        total: 0,
        qty: 0,
        active: false,
      },
    ];
    if (localStorage.length === 0) {
      localStorage.setItem("userLogin", JSON.stringify(userLoginCredential));

      localStorage.setItem(
        "trendingProduct",
        JSON.stringify({ items: [], qty: 0, total: 0 })
      );

      localStorage.setItem("timerMin", JSON.stringify(10));
    }
    // localStorage.setItem("userLogin", JSON.stringify(userLoginCredential));  
    if (localStorage.getItem("addCartProduct") === null) {
      localStorage.setItem(
        "addCartProduct",
        JSON.stringify({ items: [], qty: 0, total: 0 })
      );
    }
    if (localStorage.getItem("isAuthLogin") === null) {
      localStorage.setItem(
        "isAuthLogin",
        JSON.stringify({ flag: false, userId: null })
      );
    }
  },
};
</script>

<style></style>
