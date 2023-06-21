<template>
  <section>
    <the-user-id
      v-if="Object.keys(userData).length !== 0"
      :userData="userData"
    ></the-user-id>
    <div>
      <button id="bottone1" @click="usersData"><strong>Users</strong></button>
    </div>
    <article class="card" v-for="data in userArr" :key="data">
      <a @click="callbyId(data.id)">
        <div class="text">
          <h3>{{ data.id }}</h3>
          <p>{{ data.userId }}</p>
          <p>{{ data.title }}</p>
        </div>
      </a>
    </article>
  </section>
</template>

<script>
import TheUserId from "./User.vue";
export default {
  name: "TheAlbumInfo",
  inject: ["getDataById"],
  components: { TheUserId },
  data() {
    return {
      userArr: [],
      items: "",
      isRouted: false,
      userData: {},
    };
  },
  computed: {
    redirectLink() {
      console.log("ISDdssdfsdf", this.items);
      return "albums/" + this.id;
    },
  },
  methods: {
    async getAlbumData() {
      const rowData = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const response = await rowData.json();
      response.map((data) => {
        this.userArr.push({
          id: data.id,
          title: data.title,
          userId: data.userId,
        });
      });
    },
    usersData() {
      /* dynamic routing   */
      this.$router.push("/users");
    },
    async callbyId(id) {
      /* children routing  */
      // this.$router.push({
      //   path: url,
      //   name: "albumsInfoChild",
      //   params: {
      //     id: Number(id),
      //   },
      //   query: {
      //     sort: "asc",
      //   },
      // });

      const rowData = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`
      );
      const response = await rowData.json();
      console.log(response);
      this.userData = response;
    },
  },
  created() {
    this.getAlbumData();
  },
  beforeRouteEnter(to, from, next) {
    console.log("albums routes ==>", to, from);
    if (to.meta.auth) next();
  },

  beforeRouteLeave(to, from, next) {
    console.log("beforeLeaveRoute==>", to, from);
    if (this.isRouted) next();
    else {
      const userAns = confirm("Are you sure !");
      next(userAns);
    }
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

#bottone1 {
  padding-left: 33px;
  padding-right: 33px;
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

#bottone1:hover {
  box-shadow: 7px 5px 56px -14px #c3d900;
}

#bottone1:active {
  transform: scale(0.97);
  box-shadow: 7px 5px 56px -10px #c3d900;
}
</style>
