<template>
  <section>
    <div class="path">
      <a @click="backHome()">Home</a> <span> --> subCategory</span>
    </div>
    <div v-if="subCategoryFlag">
      <div class="card">
        <div class="card-item" v-for="subdata in subCategoryArr" :key="subdata">
          <div class="detials">
            <img class="detail-card" :src="subdata.img" alt="" />
          </div>
          <span class="detail-card-name"> {{ subdata.name }} </span>
        </div>
      </div>
    </div>
    <div v-else>
      <productList @subCategoryflag="toogleSubcategory"></productList>
    </div>
  </section>
</template>

<script>
import { subCategoryList } from "../../productData";
import productList from "../products/product-list.vue";
export default {
  name: "subCategory",
  props: {
    subCategoryId: Number,
    backFlag: Boolean,
  },
  components: {
    productList,
  },
  data() {
    return {
      subCategoryArr: [],
      subCategoryFlag: true,
    };
  },
  methods: {
    backHome() {
      this.$emit("backToHome", true);
    },
  },
  computed: {},
  created() {
    this.subCategoryArr = subCategoryList.filter(
      (data) => data.catId == this.subCategoryId
    );
    console.log(this.subCategoryArr);
  },
};
</script>

<style scoped>
.path > a {
  font-size: 1.5rem;
  cursor: pointer;
}
.path > a :hover {
  cursor: pointer;
  color: rgb(30, 196, 30);
}
.path > span {
  font-size: 1.5rem;
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
  padding: 3px;
  font-weight: bold;
  text-align: center;
}
.card-item :hover {
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.454);
}
.card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}
img {
  width: 200px;
}
</style>
