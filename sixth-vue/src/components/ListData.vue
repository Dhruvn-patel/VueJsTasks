<template>
  <div>
    <base-card>
      <button><span>&times;</span></button>
      <base-list>
        <h2>{{ id }}</h2>
        <div>
          <p>{{ title }}</p>
        </div>
        <a :href="link">view website</a>
      </base-list>
    </base-card>
  </div>
</template>

<script>
import baseCard from "../UI/baseCard.vue";
import baseList from "../UI/baseList.vue";
export default {
  props: ["id", "title", "link"],
  components: {
    baseCard,
    baseList,
  },
};
</script>

<style scoped>
span {
  font-size: 30px;
}
</style>
