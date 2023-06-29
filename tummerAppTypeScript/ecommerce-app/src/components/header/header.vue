<template>
  <div class="main-header">
    <v-container>
      <div class="d-flex">
        <span class="pa-2 me-auto font-weight-bold">
          <router-link to="/"> Home </router-link></span
        >

        <span class="pa-2 me-auto text-h5 font-weight-bold"
          >Sell on !! {{ mins }}m :{{ secs }}s</span
        >
        <span class="pa-2 font-weight-bold">
          <router-link to="/checkout"> Checkout </router-link></span
        >
        <span class="pa-2">085-105 4444</span>
        <span class="pa-2">Customer service </span>
        <span class="pa-2">Repair</span>
        <span class="pa-2">Commerical</span>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Theheaders-menu",
  data() {
    return {
      timedisplay: 0,
      mins: 0,
      secs: 0,
    };
  },
  computed: {
    ...mapGetters({
      timmerFlag: "timmerFlag",
    }),
  },
  methods: {
    ...mapActions({
      timmerToogleFunction: "timmerToogleFunction",
    }),
    timeOutFunction(timer) {
      var countDownMins = new Date().getTime() + 1000 * 60 * timer;
      // Update the count down every 1 second
      var x = setInterval(() => {
        // Get current time
        var now = new Date().getTime();
        var distance = countDownMins - now;
        this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.secs = Math.floor((distance % (1000 * 60)) / 1000);

        if (this.secs <= 0 && this.mins <= 0) {
          clearInterval(x);
          this.timmerToogleFunction();
        }
      }, 1000);

      // console.log("outside", this.mins, this.secs);
    },
  },
  created() {
    let timer = JSON.parse(localStorage.getItem("timerMin"));
    this.timeOutFunction(timer);
  },
};
</script>

<style scoped>
* {
  color: white;
  font-size: 20px;
}
.router-link-active {
  text-decoration: none;
}
.main-header {
  background: #04a64a;
  margin: 1rem 0;
}
</style>
