<template>
  <nav>
    <navBar />
  </nav>
  <main id="mainComponent">
    <HomePage />
  </main>
  <footer></footer>
</template>

<script>
import navBar from "./components/nav-bar/nav-bar.vue";
import HomePage from "./pages/HomePage.vue";

export default {
  name: "App",
  components: {
    navBar,
    HomePage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}
#mainComponent {
  margin: 0 16rem;
}
</style>
