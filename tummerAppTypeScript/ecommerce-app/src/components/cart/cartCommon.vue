<template>
  <li>
    <div>
      <img :src="image" :alt="title" />
    </div>
    <div>
      <h3>{{ name }}</h3>
      <div class="item__data">
        <div>
          Price per Item:
          <strong>₹ {{ price }}</strong>
        </div>
        <div>
          Quantity:
          <v-btn @click="minusQty(prodId)">-</v-btn>
          <strong>{{ qty }}</strong>
          <v-btn @click="plusQty(prodId)">+</v-btn>
        </div>
      </div>
      <div class="item__total">Total: ₹ {{ price * qty }}</div>
      <v-btn @click="remove(prodId)">Remove</v-btn>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "cartCommon",
  props: ["prodId", "name", "image", "price", "qty"],
  methods: {
    ...mapActions({
      increaseQty: "cartModule/increaseQty",
      deceraseQty: "cartModule/deceraseQty",
      removeProductToCart: "cartModule/removeProductToCart",
    }),
    plusQty(id) {
      this.increaseQty({ Id: id });
    },
    minusQty(id) {
      this.deceraseQty({ Id: id });
    },
    remove(id) {
      this.removeProductToCart({ Id: id });
    },
  },
  computed: {},
};
</script>

<style scoped>
strong {
  margin: 0 1.5rem;
}
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 30rem;
}

img {
  width: 10rem;
  height: 10rem;
  border-radius: 10%;
  object-fit: cover;
}

.item__data {
  display: flex;
  flex-direction: column;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

/* button {
  font: inherit;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #53001c;
  border-color: #53001c;
} */
</style>
