<template>
  <div>
    <v-app>
      <v-card-title class="text-h2 text-lg-h3 font-weight-bold"
        >Trending Products</v-card-title
      >
      <div>
        <ul>
          <li v-for="data in cartdata" :key="data">
            <div class="trending-style items-box">
              <div class="section-one" @click="singleProduct(data.productId)">
                <img :src="data.image" class="imgData" alt="image not found" />
              </div>
              <div class="section-two">
                <div class="product-detail">
                  <strong>{{ data.name }}</strong>
                  <p><strong>Rating : </strong>4.3</p>
                  <p><strong>Price : </strong>{{ data.price }}</p>

                  <p class="sell-product" v-if="data.sell === true">
                    <strong>Sell List Product </strong>
                  </p>
                  <div title="add product to cart" class="add-to-cart">
                    <v-btn @click="addToCart(data)">Add to Cart</v-btn>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </v-app>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "trendingProduct",
  data() {
    return {
      cartdata: JSON.parse(localStorage.getItem("trendingProduct")).items,
      
    };
  },
  computed: {},
  methods: {
    ...mapActions({
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
        timer: 1500,
      });
      console.log("Id", data);
      //insert obj
      const objProduct = {
        id: data.productId,
        image: data.image ,
        name: data.name,
        price: data.price,
        sell: data.sell,
      };
      this.addProductToCart({ product: objProduct });
    },
  },
};
</script>

<style scoped>
.imgData {
  height: 200px;
  object-fit: cover;
}

.section-two {
  font-size: 1.2rem;
}
ul {
  padding: 20px;
  overflow: auto;
  background-color: #d3d1d1;
  display: flex;
  align-items: center;
}
li {
  list-style: none;
}
.items-box {
  background-color: #fff;
  text-align: center;
  padding: 20px;
  box-shadow: 0 3px 8px rgb(0 0 0 / 24%);
  margin: 10px;
}
</style>
