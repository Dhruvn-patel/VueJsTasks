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
      { id: 1, username: "dhruv", password: "123", active: false },
      { id: 2, username: "admin", password: "123456", active: false },
    ];    
    if (localStorage.length == 0) {
      localStorage.setItem("userLogin", JSON.stringify(userLoginCredential));
      localStorage.setItem(
        "addCartProduct",
        JSON.stringify({ items: [], qty: 0, total: 0, userId: null })
      );
      localStorage.setItem(
        "trendingProduct",
        JSON.stringify({ items: [], qty: 0, total: 0, userId: null })
      );
   
      localStorage.setItem("timerMin", JSON.stringify(10));
    }
  },
};
</script>

<style></style>
