<template>
  <section>
    <article class="card" v-for="data in userArr" :key="data">
      <div class="text">
        <p>{{ data.id }}</p>
        <h3>{{ data.username }}</h3>
        <p>{{ data.name }}</p>
        <p>{{ data.email }}</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userArr: [],
    };
  },
  methods: {
    async getData() {
      const rowData = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await rowData.json();
      console.log(response);
      response.map((data) => {
        this.userArr.push({
          id: data.id,
          name: data.name,
          email: data.email,
          username: data.username,
        });
      });
    },
  },
  mounted() {
    this.getData();
    console.log(this.userArr);
  },
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
