<template>
  <v-btn @click="minusCount"> minus</v-btn>
</template>

<script>
export default {
  name: "TheMinius",
  methods: {
    minusCount() {
      this.$store.commit("counterStore/decrement");
    },
  },
};
</script>

<style></style>
