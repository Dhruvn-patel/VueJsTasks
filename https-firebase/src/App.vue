<template>
  <section>
    <AddPostData></AddPostData>
  </section>
</template>

<script>
import AddPostData from "./components/AddPostData.vue";
export default {
  name: "App",
  components: { AddPostData },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
