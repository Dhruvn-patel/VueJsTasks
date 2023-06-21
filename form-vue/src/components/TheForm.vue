<template>
  <form @submit.prevent="submitData">
    <div
      class="form-control"
      :class="{ inValidError: inputCheck == 'invalid' }"
    >
      <label for="name">Your Name</label>
      <input
        id="name"
        name="name"
        type="text"
        v-model.trim="nameInput"
        @blur="inputValidation"
      />
      <p v-if="inputCheck == 'invalid'">please enter a valid name</p>
    </div>
    <div class="form-control">
      <label for="age">Your age</label>
      <input id="age" name="age" type="number" ref="ageData" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="selectedValue">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>

    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          v-model="checkValue"
          value="News"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          v-model="checkValue"
          value="Tutorials"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          v-model="checkValue"
          value="Nothing"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="Courses"
          v-model="radioValue"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="Blogs"
          v-model="radioValue"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="Other"
          v-model="radioValue"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <!-- rating  -->
      <the-rating v-model="rateData"></the-rating>
    </div> 
    <div>
      <button>Add data</button>
    </div>
  </form>
</template>

<script>
import TheRating from "./TheRating.vue";
export default {
  components: { TheRating },
  data() {
    return {
      nameInput: "",
      ageData: 0,
      checkValue: [],
      radioValue: null,
      selectedValue: "select value ",
      inputCheck: "",
      rateData: "",
    };
  },
  methods: {
    submitData() {
      console.log("name", this.nameInput);
      console.log("age", this.$refs.ageData.value);
      console.log("selected", this.selectedValue);
      console.log("checked ", this.checkValue);
      console.log("radioValue ", this.radioValue);
      console.log("rating  ", this.rateData);
    },
    inputValidation() {
      if (this.nameInput === "") {
        this.inputCheck = "invalid";
      } else this.inputCheck = "";
    },
  },
};
</script>

<style scoped>
.form-control.name.inValidError {
  border: 1px solid red;
}
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}
</style>
