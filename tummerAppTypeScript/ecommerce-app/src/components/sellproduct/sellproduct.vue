<template>
  <div class="mt-6">
    <v-card-title class="text-lg-h3 font-weight-bold"
      >Sell Products</v-card-title
    >
    <v-card label="Label">
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows="hover"
      >
        <v-carousel-item v-for="product in sellProduct" :key="product">
          <v-sheet height="100%">
            <div class="d-flex justify-center align-center">
              <div class="detials">
                <v-container
                  class="d-flex justify-center align-center"
                  @click="singleProduct(product.id)"
                >
                  <img class="detail-card" :src="product.img" alt="" />
                </v-container>
                <div
                  class="product d-flex justify-center flex-column align-center"
                >
                  <span class="text-h6">Name: {{ product.name }}</span>
                  <p class="product_items">Price : {{ product.price }}</p>
                  <v-chip
                    v-if="product.sell === true"
                    class="pa-3 text-h5"
                    bg-color="green-darken-4"
                  >
                    sell
                  </v-chip>
                  <p class="product_items">quantity :{{ product.quantity }}</p>
                  <p class="product_items">rating :{{ product.rating }}</p>
                  <v-btn class="mt-3" @click="addToCart(product)"
                    >Add to Cart</v-btn
                  >
                </div>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card> 
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ThesellProduct",
  methods: {
    ...mapActions({
      productsFunction: "productModule/productsFunction",
      addProductToCart: "cartModule/addProductToCart",
    }),
    singleProduct(Id) {
      this.$router.push({
        name: "singleProduct",
        path: "/products/singleProduct/:id",
        params: { id: Id },
      });
    },

    addToCart(data) {
      this.$swal({
        position: "top-center",
        icon: "success",
        title: "Product Added to Cart",
        customClass: "swal-wide",
        showConfirmButton: false,
        timer: 1000,
      });

      const objProduct = {
        id: data.id,
        image: data.img,
        name: data.name,
        price: data.price,
        sell: data.sell,
      };
      this.addProductToCart({ product: objProduct });
    },
  },
  computed: {
    ...mapGetters({
      sellProduct: "productModule/sellproduct",
    }),
  },
};
</script>

<style scoped>
.detail-card {
  height: 150px;
  object-fit: cover;
}
</style>
