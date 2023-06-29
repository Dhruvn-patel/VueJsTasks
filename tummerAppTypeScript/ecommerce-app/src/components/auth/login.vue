<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Username</div>

      <v-form
        @submit.prevent="submitFunction"
        class="swa-confirm"
        data-flag="0"
      >
        <v-text-field
          density="compact"
          placeholder="Enter username"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model.trim="name"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password
        </div>
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
          v-model.trim="password"
        ></v-text-field>

        <v-btn
          type="submit"
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
        >
          Log In
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "loginAuth",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      LogOutFunction: "LogOutFunction",
    }),
    submitFunction() {
      console.log(this.name, this.password);
      const userData = JSON.parse(localStorage.getItem("userLogin"));
      let userId = null;
      userData.map((data) => {
        if (data.username == this.name && data.password == this.password) {
          console.log("valdiata");
          userId = data.id;
          this.$swal({
            position: "top-center",
            icon: "success",
            title: "login ",
            customClass: "swal-wide",
            showConfirmButton: false,
            timer: 1000,
          });

          // set  isAuthLogin flag
          localStorage.setItem(
            "isAuthLogin",
            JSON.stringify({ id: userId, name: data.username, flag: true })
          );
          const getdata = JSON.parse(localStorage.getItem("addCartProduct"));
          const { items, qty, total } = getdata;

          //userProduct
          if (
            localStorage.getItem("userCartProduct") == !null &&
            localStorage.getItem("userCartProduct").items.length > 0
          ) {
            //if already exist cart items in localstorage
            const userlogincartData = localStorage.getItem("userCartProduct");
            const cartUserItems = [...items, ...userlogincartData.items];
            const totalqty = Number(qty) + Number(cartUserItems.gty);
            const totalValue = Number(total) + Number(cartUserItems.total);
            localStorage.setItem(
              "userCartProduct",
              JSON.stringify({
                items: cartUserItems,
                qty:totalqty,
                total:totalValue,
                userId: userId,
              })
            );
          } else {
            localStorage.setItem(
              "userCartProduct",
              JSON.stringify({ items, qty, total, userId: userId })
            );
          }

          this.LogOutFunction();
          this.$router.push({ path: "/" });
        }
      });
    },
  },
  computed: {},
};
</script>

<style scoped></style>
