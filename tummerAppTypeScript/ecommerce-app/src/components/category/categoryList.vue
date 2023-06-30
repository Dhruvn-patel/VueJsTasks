<template>
  <div class="container">
    <div>
      <div class="row" v-for="category in catergoryArr" :key="category">
        <div class="col-12 img-grid">
          <a @click="subCategory(category.id, category.text)">
            <div class="home-category-banner">
              <div class="home-category-image">
                <img :src="category.img" alt="" />
              </div>
              <div class="home-category-title">{{ category.name }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div v-if="flag === true">
      <Sellproduct />
    </div>
    <div v-else>
      <v-card-title class="text-h6 text-md-h5 text-lg-h3"
        >Sell Products</v-card-title
      >
      <p class="sellOut">Sell Out of Stock !</p>
    </div>

    <div>
      <trendingProduct />
    </div>
  </div>
</template>

<script>
import trendingProduct from "../products/trendingProduct.vue";
import Sellproduct from "../sellproduct/sellproduct.vue";
import { mapGetters } from "vuex";
export default {
  name: "categoryList",
  components: {
    Sellproduct,
    trendingProduct
  },
  methods: {
    subCategory(id, text) {
  
      this.$router.push({
        name: "subcategory",
        path: "/subCategory/:id",
        params: { id: id },
      });
    },
  },
  computed: {
    ...mapGetters({
      catergoryArr: "categoryModule/categoryData",
      flag: "timmerFlag",
    }),
  },
};
</script>

<style scoped>
.sellOut {
  text-align: center;
}
.container {
  margin: 5rem 0;
}
.row {
  display: flex;
  flex-direction: column;
}

.img-grid {
  margin-bottom: 10px;
}
.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
  width: 20%;
}
.img-grid .home-category-banner {
  display: flex;
  padding: 8px 10px;
  background: #e6e6e6;
  align-items: center;
  border-radius: 5px;
}
.img-grid .home-category-banner .home-category-image {
  margin-right: 15px;
  text-align: center;
}
.home-category-title {
  font-size: 25px;
}
a:hover {
  cursor: pointer;
  color: rgb(30, 196, 30);
}
</style>
