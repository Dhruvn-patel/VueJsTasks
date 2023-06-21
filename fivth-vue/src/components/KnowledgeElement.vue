<template>
  <div>
    <li>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <button @click="selecTopics(id)">click here</button>
    </li>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "description"],
  inject: ["selecTopics"],
};
</script>

<style></style>
