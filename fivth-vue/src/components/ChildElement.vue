<template>
  <div>
    <li v-for="val in arr" :key="val">
      <slot name="default" :dataItem="val.id"></slot>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
