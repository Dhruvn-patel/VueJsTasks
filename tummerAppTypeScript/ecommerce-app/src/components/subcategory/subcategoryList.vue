<template>
  <div class="head">
    <div class="card">
      <div class="card-item" v-for="subdata in subCategoryArr" :key="subdata">
        <div @click="productId(subdata.id)">
          <div class="detials">
            <img class="detail-card" :src="subdata.img" alt="" />
          </div>
          <span class="detail-card-name"> {{ subdata.name }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "subcategoryList",
  methods: {
    ...mapActions({
      subCategoryFunction: "subcategoryModule/subCategoryFunction",
    }),
    productId(id) {
      // this.productsFunction({ Id: id });
      console.log("p", id);
      this.$router.push({
        name: "products",
        path: "/products/:id",
        params: { id: id },
      });
    },
  },
  mounted() {
    const id = this.$route.params.id;
    this.subCategoryFunction({ catId: Number(id) });
  },
  computed: {
    ...mapGetters({
      subCategoryArr: "subcategoryModule/subcategoryDisplay",
    }),
  },
};
</script>

<style scoped>
.head {
  margin: 4rem 0;
}
.detail-card-name {
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
  padding: 3rem;
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
