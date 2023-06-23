<template>
  <div class="nav">
    <router-link to="/">
      <img
        class="navImg"
        src="https://eptummers.nl/7e8e89a030b10f539cffe444ef646945.svg"
        alt=""
      />
    </router-link>
    <span>
      <img
        src="https://eptummers.nl/media/icoon_account_wit.svg"
        alt=""
        class="userIcon"
      />

      <img
        src="https://eptummers.nl/media/wagentje_wit.svg"
        alt=""
        class="userIcon"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>
.userIcon {
  height: 2.5rem;
  margin: 0.2rem 1rem;
}
.nav {
  border: 1px solid;
  background-color: #515150;
  padding: 2 rem !important;
  display: flex;
  justify-content: space-around;
}
.navImg {
  padding: 0.5rem;
}
</style>
