<template>
  <div>
    <div>
      <div class="card">
        <div class="card-item" v-for="data in productArr" :key="data">
          <div>
            <div class="detials" @click="singleProduct(data.id)">
              <img class="detail-card" :src="data.img" alt="" />
            </div>
            <div class="product">
              <span class="h2">Name: {{ data.name }}</span>
              <p class="product_items">Price : {{ data.price }}</p>
              <v-chip
                v-if="data.sell === true"
                class="pa-3 text-h5"
                bg-color="green-darken-4"
              >
                sell
              </v-chip>
              <p class="product_items">quantity :{{ data.quantity }}</p>
              <p class="product_items">rating :{{ data.rating }}</p>
            </div>
            <button @click="addToCart(data)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "productList",

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

    // add to cart
    addToCart(data) {
      this.$swal({
        position: "top-center",
        icon: "success",
        title: "Product Added to Cart",
        customClass: "swal-wide",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log("Id", data);
      //insert obj
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
  mounted() {
    const id = this.$route.params.id;
    this.productsFunction({ Id: Number(id) });
  },
  computed: {
    ...mapGetters({
      productArr: "productModule/getSelectedProduct",
    }),
  },
};
</script>

<style scoped>
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
.product_items {
  font-size: 20px;
  line-height: 2;
}
.h2 {
  font-size: 25px;
  font-weight: bold;
}
.detail-card-name {
  line-height: 150px;
  font-size: 2em;
}
.detials {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-items: center;
}

.card-item {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 5px;
  font-weight: bold;
  text-align: center;
}

.card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 8rem;
  align-items: stretch;
}
img {
  max-width: 100%;
}
</style>
