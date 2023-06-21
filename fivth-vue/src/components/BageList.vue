<template>
  <section>
    <h2>Available Badges</h2>
    <ul>
      <li>
        <BadgeBase type="admin" caption="ADMIN" />
      </li>
      <li>
        <BadgeBase type="author" caption="AUTHOR" />
      </li>
    </ul>
  </section>
</template>

<script>
import BadgeBase from "./BadgeBase.vue";
export default {
  components: {
    BadgeBase,
  },
};
</script>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
