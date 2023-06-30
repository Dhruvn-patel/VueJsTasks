<template>
  <section>
    <v-sheet class="d-flex flex-warp justify-center">
      <v-sheet class="flex-3-0 ma-2 pa-2 text-h5 font-weight-bold">
        Your Cart
      </v-sheet>
      <v-sheet class="flex-3-0 ma-0 pa-2">
        <v-btn
          class="font-weight-medium"
          @click="checkOutFunction"
          color="#7C787C"
          >CheckOut</v-btn
        >
      </v-sheet>
    </v-sheet>

    <h3>Total Amount: ₹ {{ cartTotal }}</h3>
    <ul>
      <cartCommon
        v-for="item in cartData"
        :key="item.id"
        :prod-id="item.id"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      ></cartCommon>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import cartCommon from "./cartCommon.vue";
export default {
  name: "cartItems",
  components: {
    cartCommon,
  },
  data() {
    return {
      localStorageCart: JSON.parse(localStorage.getItem("cart")),
    };
  },
  computed: {
    ...mapGetters({
      cartTotal: "cartModule/total",
      cartData: "cartModule/items",
      isAuthLogin: "isLogin",
    }),
  },
  methods: {
    checkOutFunction() {
      {
        if (this.isAuthLogin === false) {
          this.$swal({
            position: "top-center",
            icon: "warning",
            title: "After Login You Can Checkout Product  !!! ",
            customClass: "swal-wide",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          const userId = JSON.parse(
            localStorage.getItem("userCurrent") || ""
          ).userId;

          let idx = 0;
          const userLoginData = JSON.parse(
            localStorage.getItem("userLogin") || ""
          );

          for (let i = 0; i < userLoginData.length; i++) {
            if (userLoginData[i].id === userId) {
              userLoginData[i].order = [
                ...userLoginData[i].cart,
                ...userLoginData[i].order,
              ];
              
              idx = i;
              // trendingProduct setItems
              localStorage.setItem(
                "trendingProduct",
                JSON.stringify({
                  items: userLoginData[i].order,
                  cartTotal: this.cartTotal,
                })
              );

              /* set cart user item empty() */
              userLoginData[idx].total = 0;
              userLoginData[idx].qty = 0;
              userLoginData[idx].cart = [];
              break;
            }
          }
          this.$router.push({ path: "/checkout" });
          localStorage.setItem("userLogin", JSON.stringify(userLoginData));
        }
      }
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
