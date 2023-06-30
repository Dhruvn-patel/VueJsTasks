<template>
  <div>
    <div class="empty-page" v-if="isAuthLogin === false">
      Please Checkout Cart Product
    </div>

    <div v-else>
      <div class="main">
        <div class="total">
        
        </div>
        <div class="product-list">
          <li v-for="data in checkOutArr" :key="data">
            <div class="cart-style-second items-box">
              <div class="section-one">
                <img :src="data.image" class="checkoutImg" />
              </div>
              <div class="section-two">
                <div class="content-box">
                  <div class="product-detail">
                    <p>
                      <strong>Name:{{ data.name }}</strong>
                    </p>
                    <p><strong>Price : </strong>₹{{ data.price }}</p>
                    <p><strong>quantity : </strong>{{ data.qty }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheCheckout",
  data() {
    return {
      checkOutArr: [],
     
    };
  },
  computed: {
    ...mapGetters({
      isAuthLogin: "isLogin",
    }),
  },
  methods: {},
  mounted() {
    let idx = 0;
    const userLoginData = JSON.parse(localStorage.getItem("userLogin") || "");
    const userId = JSON.parse(localStorage.getItem("userCurrent") || "").userId;
    let cartUserItem = [];
  
    for (let i = 0; i < userLoginData.length; i++) {
      if (userLoginData[i].id === userId) {
        cartUserItem = userLoginData[i].order;
        idx = i;
    
        
        localStorage.setItem("userLogin", JSON.stringify(userLoginData));
        break;
      }
    }
    this.checkOutArr = cartUserItem;
   
  },
};
</script>

<style scoped>
.product-detail {
  padding: 0 2rem;
  text-align: left;
}
.checkoutImg {
  height: 150px;
  width: 150px;
  object-fit: cover;
  overflow: clip;
}
li {
  list-style: none;
}
.items-box {
  background-color: #fff;
  text-align: center;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 3px 8px rgb(0 0 0 / 24%);
}
.main {
  border-radius: 5px;
  width: 70%;
  margin: 10px auto;
  padding: 30px;
  background-color: #d5f5ac;
}
.total {
  font-size: 1.4rem;
}
.cart-style-second {
  display: flex;
  border-radius: 3px;
  background-color: #e1f7d9;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 0 0 / 16%);
}
.empty-page {
  margin: 10% 0;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  color: #aaa9a9;
}
.section-one {
  margin: 0 2rem;
}
</style>
