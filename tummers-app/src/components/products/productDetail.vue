<template>
  <section>
    <div class="container">
      <div class="img-product">
        <img :src="prouductObj.img" alt="" />
      </div>
      <div class="prouduct-data">
        <h1>{{ prouductObj.name }}</h1>
        <p>description :{{ prouductObj.description }}</p>
        <p>price :{{ prouductObj.price }}</p>
        <p>quantity :{{ prouductObj.quantity }}</p>
        <p>rating :{{ prouductObj.rating }}</p>

        <button>Add to Cart</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    prouductObj: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  margin: 1rem 0;
  font-size: 25px;
}
.container {
  margin: 10rem;
  text-align: center;
}
img {
  height: 600px;
  object-fit: cover;
  padding: 2rem;
}
button {
  appearance: none;
  background-color: transparent;
  border: 0.125em solid #1a1a1a;
  border-radius: 0.9375em;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 3.75em;
  min-width: 0;
  outline: none;
  padding: 1em 2.3em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}

button:disabled {
  pointer-events: none;
}

button:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

button:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>
