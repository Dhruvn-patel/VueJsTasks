<template id="category">
  <section class="container">
    <div v-if="checkFlag == true">
      <div class="row" v-for="category in categoryArr" :key="category">
        <div class="col-12 img-grid">
          <a @click="subCategoryFunction(category.id)">
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
    <div v-else>
      <subCategory
        @backToHome="toggleFlag"
        :subCategoryId="subCategoryId"
        :backFlag="checkFlag"
      ></subCategory>
    </div>
  </section>
</template>

<script>
import { categoryList } from "../../productData";
import subCategory from "../sub-category/sub-category.vue";
export default {
  name: "categoryComponent",
  components: { subCategory },
  data() {
    return {
      categoryArr: [],
      subCategoryId: null,
      checkFlag: true,
    };
  },
  methods: {
    subCategoryFunction(id) {
      console.log("id", id, this.checkFlag);
      this.checkFlag = false;
      this.subCategoryId = id;
    },
    toggleFlag(values) {
      this.checkFlag = values;
    },
  },
  computed: {},
  created() {
    console.log("categoryList", categoryList);
    this.categoryArr = categoryList;
  },
};
</script>

<style scoped>
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
