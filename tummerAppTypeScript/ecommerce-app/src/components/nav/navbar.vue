<template>
  <div class="nav">
    <div class="d-flex">
      <span class="pa-2 me-auto ml-6"
        ><router-link to="/">
          <v-img
            class="navImg"
            src="https://eptummers.nl/7e8e89a030b10f539cffe444ef646945.svg"
            alt=""
          /> </router-link
      ></span>
      <span class="pa-2">
  
        <v-info v-if="isLogin === false">
          <router-link to="/login" name="login">
            <img
              src="https://eptummers.nl/media/icoon_account_wit.svg"
              alt=""
              class="userIcon"
            />
          </router-link>
        </v-info>
        <v-info v-else>
          <v-btn class="rounded mr-2 rounded-pill" @click ="LogOutFunction"
            >logout
          </v-btn>
        </v-info>
      </span>
      <span class="pa-2">
        <router-link to="/cartItems">
          <v-badge :content="cartQty" class="ma-1">
            <v-icon size="x-large">
              <img
                src="https://eptummers.nl/media/wagentje_wit.svg"
                alt=""
                class="userIcon"
              />
            </v-icon>
          </v-badge> </router-link
      ></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "navBar",
  methods: {
    ...mapActions({
      LogOutFunction: "LogOutFunction",
    }),
  },
  computed: {
    ...mapGetters({
      cartQty: "cartModule/cartQty",
      isLogin: "isLogin",
    }),
  },
};
</script>

<style scoped>
.userIcon {
  height: 2.5rem;
  margin: 0.1rem 1rem;
}
.nav {
  border: 1px solid;
  background-color: #515150;
  padding: 2 rem !important;
}
.navImg {
  padding: 0.5rem;
}
</style>
