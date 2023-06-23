<template>
  <v-btn v-if="!isLogin" @click="login">Login</v-btn>
  <v-btn v-if="isLogin" @click="logout">LogOut</v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheAuth",
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    ...mapActions(["login", "logout"]),
  },
};
</script>

<style></style>
