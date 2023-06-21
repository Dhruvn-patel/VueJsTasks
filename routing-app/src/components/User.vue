<template>
  <section>
    <div>
      <article class="card">
        <div class="text">
          <h3>userId : {{ userData.id }}</h3>
          <p>{{ userData.userId }}</p>
          <p>title :{{ userData.title }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserComponent",
  props: ["userData"],
  data() {
    return {
      userArr: {},
    };
  },

  methods: {},
};
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.card {
  display: inline-flex;
  padding: 20px;
  flex-direction: row;
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

.card .text {
  padding: 0 20px 20px;
}
.card .text > button {
  background: gray;
  border: 0;
  color: white;
  padding: 10px;
  width: 100%;
}
</style>
