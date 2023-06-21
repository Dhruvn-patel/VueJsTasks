<template>
  <div>
    <ul>
      <list-data
        v-for="data in arr"
        :key="data"
        :id="data.id"
        :title="data.title"
        :link="data.link"
      ></list-data>
    </ul>
  </div>
</template>

<script>
import ListData from "./ListData.vue";
export default {
  props: ["arr"],
  data() {},
  components: { ListData },
};
</script>

<style></style>
