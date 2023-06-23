<template>
  <v-container> <Auth /> </v-container>
  <v-container v-if="isLogin">
    <AddOne />
    <h2>counter :{{ handleCounter }}</h2>
    <MiniusOne />

    {{ getLoginPath }}
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import AddOne from "./Addone.vue";
import MiniusOne from "./MinusOne.vue";
import Auth from "./Auth.vue";
export default {
  name: "CounterValue",
  components: {
    AddOne,
    MiniusOne,
    Auth,
  },
  methods: {},
  computed: {
    ...mapGetters(
      "counterStore",
      ["handleCounter", "getLoginPath"],
    ),
    ...mapGetters(["isLogin"])
  },
};
</script>

<style></style>
