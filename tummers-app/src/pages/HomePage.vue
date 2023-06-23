<template>
  <section>
    <div class="navigation">
      <div v-if="!isCategory">
        <span class="links" @click="CategoryToogle"> Category > </span>
        <span class="links" @click="SubCategoryToogle"> SubCategory > </span>
        <span
          class="links"
          v-if="!isCategory && !isSubCategory"
          @click="ProductToogle"
        >
          Products
        </span>
      </div>
      <span v-else class="links">Home</span>
    </div>
    <!-- category list  -->
    <categoryComponent
      @selectedCategoryId="getCategoryId"
      v-if="isCategory"
    ></categoryComponent>

    <!-- subCategory List -->
    <div v-else-if="isSubCategory">
      <div class="card">
        <commonComponent
          class="card-item"
          v-for="subdata in subCategoryListData"
          :key="subdata"
        >
          <div @click="productFunction(subdata.id)">
            <div class="detials">
              <img class="detail-card" :src="subdata.img" alt="" />
            </div>
            <span class="detail-card-name"> {{ subdata.name }} </span>
          </div>
        </commonComponent>
      </div>
    </div>

    <!-- Product List -->
    <div v-else-if="isProduct">
      <div class="card">
        <commonComponent
          class="card-item"
          v-for="data in productList"
          :key="data"
        >
          <div class="productList-detail">
            <div class="detials" @click="productSelected(data.id)">
              <img class="detail-card-product" :src="data.img" alt="" />
            </div>
            <div class="product">
              <span class="h2">Name: {{ data.name }}</span>
              <p class="product_items">Price : {{ data.price }}</p>
              <p class="product_items">quantity :{{ data.quantity }}</p>
              <p class="product_items">rating :{{ data.rating }}</p>
              <div><button>Add to Cart</button></div>
            </div>
          </div>
        </commonComponent>
      </div>
    </div>

    <!-- Product selected -->
    <div v-else-if="!isSubCategory">
      <ProductDetail :prouductObj="productObj"></ProductDetail>
    </div>
  </section>
</template>

<script>
import { categoryList, subCategoryList, productList } from "../productData";
import categoryComponent from "@/components/category/category-component.vue";

import commonComponent from "../components/commonComponent.vue";
import ProductDetail from "@/components/products/productDetail.vue";
export default {
  name: "HomePage",
  props: {},
  components: {
    categoryComponent,
    commonComponent,
    ProductDetail,
  },
  data() {
    return {
      isCategory: true,
      isSubCategory: true,
      isProduct: true,
      selectedCategoryId: null,
      selectedSubCategoryId: null,
      productObj: {},
      subCategoryListData: [],
      productList: [],
    };
  },
  methods: {
    CategoryToogle() {
      this.isCategory = true;
      this.isSubCategory = true;
      this.isProduct = true;
    },
    SubCategoryToogle() {
      this.isSubCategory = true;
      this.isProduct = true;
    },
    ProductToogle() {
      this.isProduct = true;
    },
    productSelected(id) {
      this.isProduct = false;
      const result = productList.filter((data) => data.id === id);
      this.productObj = result[0];
    },
    getCategoryId(id) {
      this.selectedCategoryId = id;
      this.subCategoryListData = subCategoryList.filter(
        (data) => data.catId == id
      );
      console.log("this.subCategoryListData", this.subCategoryListData);
      this.isCategory = false;
      console.log("emit id", this.selectedCategoryId);
    },
    getSubCategoryId(id) {
      this.selectedSubCategoryId = id;
      this.isSubCategory = false;
    },
    productFunction(id) {
      this.isSubCategory = false;
      this.productList = productList.filter((data) => data.subCatId === id);
      console.log("this.productList", this.productList);
    },
  },

  mounted() {
    console.log(categoryList, subCategoryList, productList);
  },
};
</script>

<style scoped>
.links {
  font-size: 20px;
}
.links:hover {
  color: rgba(212, 212, 212, 0.735);
  cursor: pointer;
}
.navigation {
  margin: 1rem;
  background: rgb(30, 196, 30);
  padding: 1rem;
}
.productList-detail {
  text-align: center;
  cursor: pointer;
}
.card-item :hover {
  cursor: pointer;
}
.card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-flow: row;
  grid-gap: 30px;
  align-items: stretch;
}
.card-item {
  box-shadow: rgba(184, 184, 184, 0.629) 0px 5px 15px;
  padding: 3px;
  font-weight: bold;
  text-align: center;
}
.detials {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  justify-items: center;
}
.detail-card-name {
  line-height: 150px;
  font-size: 2em;
}
.detail-card-product {
  width: 90%;
  /* object-fit: cover; */
}
.product_items {
  font-size: 20px;
  line-height: 2;
}
.h2 {
  font-size: 25px;
  font-weight: bold;
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
