<template>
  <div class="ActiveElement">
    <p>{{ title }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "text"],
};
</script>

<style scoped></style>
