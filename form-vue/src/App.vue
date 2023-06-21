<template>
  <section>
    <TheForm></TheForm>
  </section>
</template>

<script>
import TheForm from "./components/TheForm.vue";
export default {
  name: "App",
  components: {
    TheForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
