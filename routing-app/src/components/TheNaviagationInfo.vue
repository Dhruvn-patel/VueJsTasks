<template>
  <nav>
    <div class="btn">
      <router-link to="/users">users</router-link>
      <router-link to="/albums">albums</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  height: 10rem;
  background-color: rgba(5, 58, 184, 0.987);
}
a {
  margin: 20px;
  padding-left: 33px;
  padding-right: 33px;
  text-decoration: none;
  padding-bottom: 16px;
  padding-top: 16px;
  border-radius: 9px;
  background: #d5f365;
  border: none;
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
}

a:hover {
  box-shadow: 7px 5px 56px -14px #c3d900;
}

a:active {
  transform: scale(0.97);
  box-shadow: 7px 5px 56px -10px #c3d900;
}
</style>
