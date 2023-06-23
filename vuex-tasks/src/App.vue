<template>
  <section>
    <Counter />
  </section>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: { Counter },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
