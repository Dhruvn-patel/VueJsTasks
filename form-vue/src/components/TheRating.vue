<template>
  <div class="form-control">
    <ul>
      <li :class="{ active: activeItem == 'low' }">
        <button type="button" @click="selectItem('low')">low</button>
      </li>
      <li :class="{ active: activeItem == 'medium' }">
        <button type="button" @click="selectItem('medium')">medium</button>
      </li>
      <li :class="{ active: activeItem == 'advance' }">
        <button type="button" @click="selectItem('advance')">advance</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["modelValue", "update:modelValue"],
  data() {
    return {
      activeItem: null,
    };
  },
  methods: {
    selectItem(option) {
      this.activeItem = option;
      this.$emit("update:modelValue", option);
      console.log("actions", this.activeItem);
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
li {
  list-style-type: none;
}
.active {
  background-color: rgb(89, 19, 143);
}
.active button {
  background-color: rgb(89, 19, 143);
}
</style>
