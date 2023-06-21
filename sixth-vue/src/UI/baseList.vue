<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
