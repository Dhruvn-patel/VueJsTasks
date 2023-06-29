<template>
  <div class="container">
    <div>
      <!-- <div class="row" v-for="category in categoryArr" :key="category">
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
      </div> -->
      <div class="row">
        <div class="col-12 img-grid">
          <a>
            <div class="home-category-banner">
              <div class="home-category-image">
                <img src="asa.png" alt="" />
              </div>
              <div class="home-category-title">dasjkdnk</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoryList",
  data() {},
  methods: {},
  computed: {},
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
