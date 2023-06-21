<template>
  <nav>
    <navBar />
  </nav>
  <main id="mainComponent">
    <!-- <categoryComponent /> -->
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<script>
import navBar from "./components/nav-bar/nav-bar.vue";
// import categoryComponent from "./components/category/category-component.vue";

export default {
  name: "App",
  components: {
    navBar,
    // categoryComponent
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  font-size: 16px;
  text-decoration: none;
}
#mainComponent {
  margin: 0 16rem;
}
</style>
