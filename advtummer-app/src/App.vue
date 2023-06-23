<template>
  <div>
    <header>
      <navBar />
    </header>
    <main id="mainComponent"></main>
    <footer>
      <theFooter />
    </footer>
  </div>
</template>

<script>
import navBar from "./components/nav/navbar.vue";
import theFooter from "./components/footer/footer.vue";
export default {
  name: "App",
  components: { navBar, theFooter },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#mainComponent {
  margin: 0 16rem;
}
</style>
