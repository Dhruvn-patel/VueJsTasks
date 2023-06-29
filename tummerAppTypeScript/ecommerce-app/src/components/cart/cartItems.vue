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
        :key="item.productId"
        :prod-id="item.productId"
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
  components: { cartCommon },

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
          const { items, total, qty, userId } = JSON.parse(
            localStorage.getItem("addCartProduct")
          );

          this.cartData = JSON.parse(
            localStorage.getItem("userCartProduct")
          ).items;
          // trendingProduct setItems
          localStorage.setItem(
            "trendingProduct",
            JSON.stringify({
              items: this.cartData,
              cartTotal: this.cartTotal,
            })
          );

          // checkOutProduct setItems
          localStorage.setItem(
            "addCartProduct",
            JSON.stringify({
              items: [],
              userId,
              total: 0,
              qty: 0,
            })
          );

          // remove productFrom cart
          localStorage.setItem(
            "checkOutProduct",
            JSON.stringify({
              items,
              userId,
              total,
              qty,
            })
          );

          this.$router.push({ path: "/checkout" });
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
