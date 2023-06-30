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
      const userData = JSON.parse(localStorage.getItem("userLogin"));
      let userId = null;
      let idx = 0;
      userData.map((data) => {
        if (data.username == this.name && data.password == this.password) {
          userId = data.id;
          this.$swal({
            position: "top-center",
            icon: "success",
            title: "login ",
            customClass: "swal-wide",
            showConfirmButton: false,
            timer: 1000,
          });

          console.log("user", userId);
          localStorage.setItem(
            "userCurrent",
            JSON.stringify({ userId: userId })
          );

          const getdata = JSON.parse(localStorage.getItem("addCartProduct"));
          const { items, qty, total } = getdata;

          console.log("items.length", items.length);
          if (items.length > 0) {
            console.log("idx", idx);
            const userLoginData = JSON.parse(localStorage.getItem("userLogin"));
            if (data.cart.length > 0) {
              console.log("carts ", data.cart, items);
              // merge cartItem and Items
              for (let i = 0; i < items.length; i++) {
                let flag = true;
                for (let j = 0; j < data.cart.length; j++) {
                  if (items[i].id === data.cart[j].id) {
                    userLoginData[idx].total += items[i].qty * items[i].price;
                    userLoginData[idx].cart[j].qty += items[i].qty;
                    flag = false;
                  }
                }
                if (flag) {
                  userLoginData[idx].cart.push(items[i]);
                  userLoginData[idx].qty = userLoginData[idx].cart.length;
                  userLoginData[idx].total += total;
                  // data.cart.push(items[i]);
                }
              }

              localStorage.setItem("userLogin", JSON.stringify(userLoginData));
            } else {
              for (let i = 0; i < userLoginData.length; i++) {
                if (userLoginData[i].id === data.id) {
                  userLoginData[i].cart = items;
                  userLoginData[i].total = total;
                  userLoginData[i].qty = userLoginData[i].cart.length;
                }
              }
              localStorage.setItem("userLogin", JSON.stringify(userLoginData));
            }
          }

          localStorage.setItem(
            "addCartProduct",
            JSON.stringify({
              items: [],
              qty: 0,
              total: 0,
            })
          );
          this.LogOutFunction();
          this.$router.push({ path: "/" });
        }
      });
      idx++;
    },
  },
  computed: {},
};
</script>

<style scoped></style>
