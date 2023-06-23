<template> 
    <slot></slot>
</template>

<script>
export default {};
</script>
<style scoped>
.card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-flow: row;
  grid-gap: 20px;
}
.card-item {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 3px;
  font-weight: bold;
  text-align: center;
}
</style>
