<template>
  <div>
    <div class="container">
      <div class="img-product">
        <img :src="prouductObj.img" alt="" />
      </div>
      <div class="prouduct-data">
        <h1>{{ prouductObj.name }}</h1>
        <p>description :{{ prouductObj.description }}</p>
        <p>price :{{ prouductObj.price }}</p>
        <p>quantity :{{ prouductObj.quantity }}</p>
        <v-chip v-if="prouductObj.sell === true" class="pa-3 text-h3s">
          sell
        </v-chip>
        <p>rating :{{ prouductObj.rating }}</p>
        <button @click="addToCart(prouductObj)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "singleProduct",
  methods: {
    ...mapActions({
      singleProductFunction: "productModule/singleProductFunction",
      addProductToCart: "cartModule/addProductToCart",
    }),
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
      };
      this.addProductToCart({ product: objProduct });
    },
  },
  computed: {
    ...mapGetters({
      prouductObj: "productModule/singleProduct",
    }),
  },
  mounted() {
    const id = this.$route.params.id;
    console.log("single value ", id);
    this.singleProductFunction({ productId: Number(id) });
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
  font-size: 25px;
}
.container {
  margin: 10rem;
  text-align: center;
}
img {
  height: 600px;
  object-fit: cover;
  padding: 2rem;
}
button {
  appearance: none;
  background-color: transparent;
  border: 0.125em solid #1a1a1a;
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 3.75em;
  min-width: 0;
  outline: none;
  padding: 1em 2.3em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

button:disabled {
  pointer-events: none;
}

button:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

button:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>
