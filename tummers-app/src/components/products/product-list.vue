<template>
  <section>
    <div>
      <div class="card">
        <div class="card-item" v-for="data in productArr" :key="data">
          <div>
            <div class="detials">
              <img class="detail-card" :src="data.img" alt="" />
            </div>
            <div class="product">
              <span class="h2">Name: {{ data.name }}</span>
              <p class="product_items">Price : {{ data.price }}</p>
              <p class="product_items">quantity :{{ data.quantity }}</p>
              <p class="product_items">rating :{{ data.rating }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { productList } from "../../productData";
export default {
  name: "productListData",
  data() {
    return {
      productArr: [],
    };
  },
  props: {
    productId: Number,
    subCategoryFlag: Boolean,
  },
  created() {
    this.productArr = productList.filter(
      (data) => data.subCatId === this.productId
    );
    console.log(this.productArr);
  },
};
</script>

<style scoped>
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
