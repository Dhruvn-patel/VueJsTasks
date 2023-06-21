<template>
  <section>
    <The-Header> </The-Header>
    <store-data :arr="arr"></store-data>
  </section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import StoreData from "./components/StoreData.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    StoreData,
  },
  data() {
    return {
      arr: [
        {
          id: 1,
          title: "Opera App",
          link: "https://www.opera.com",
        },
        {
          id: 2,
          title: "Google App",
          link: "https://www.google.com",
        },
        {
          id: 3 ,
          title: "Piuysh App",
          link: "https://www.piyushgarg.dev",
        },
      ],
    };
  },
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
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>
