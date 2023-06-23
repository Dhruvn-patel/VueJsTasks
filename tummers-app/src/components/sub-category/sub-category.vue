<template>
  <section>
      <div class="card">
        <div class="card-item" v-for="subdata in subCategoryArr" :key="subdata">
          <div @click="productFunction(subdata.id)">
            <div class="detials">
              <img class="detail-card" :src="subdata.img" alt="" />
            </div>
            <span class="detail-card-name"> {{ subdata.name }} </span>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import { subCategoryList } from "../../productData";
export default {
  name: "subCategory",
  props: {
    subCategoryId: Number,
  },
  data() {
    return {
      subCategoryArr: [],
    };
  },
  methods: {
    productFunction(id) {
      this.$emit('selectedSubCategoryId',id)
    },
  },
  created() {
    this.subCategoryArr = subCategoryList.filter(
      (data) => data.catId == this.subCategoryId
    );
    console.log(this.subCategoryArr);
  },
};
</script>

<style scoped>

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
