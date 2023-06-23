<template>
  <v-btn @click="increment({ value: 2 })"> Add</v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TheAdd",
  methods: {
    ...mapActions("counterStore", ["increment"]),
  },
};
</script>

<style></style>
