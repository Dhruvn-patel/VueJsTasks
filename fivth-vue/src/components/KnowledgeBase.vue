<template>
  <div>
    <h2>Select a Topic</h2>
    <knowledgGrid
      :topics="topics"
     
    />
  </div>
</template>

<script>
import knowledgGrid from "./knowledgGrid.vue";
export default {
  components: {
    knowledgGrid,
  },
  props: ["topics"],
  
};
</script>

<style></style>
