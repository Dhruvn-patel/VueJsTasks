<template>
  <div class="formdata">
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          @blur="inputCheck"
          v-model.trim="nameData"
          :class="{ activeinput: errInput }"
        />
        <p v-if="errInput">please input single character !</p>
      </div>
      <div class="form-control">
        <label for="course">Course</label>
        <textarea
          name="course"
          id="course"
          rows="5"
          v-model.trim="courseDetails"
          :class="{ activeinput: errCourse }"
          @keyup="courseCheck"
        ></textarea>
        <p v-if="errCourse">please enter single character !</p>
      </div>
      <div class="form-control">
        <button type="submit">Submit</button>
      </div>
    </form>

    <div class="display">
      <div class="form-control">
        <button @click="displayData">Load Data</button>
      </div>
      <p v-if="errResponse">{{ errResponse }}</p>
      <p v-else-if="isLoading && arr.length > 0">Loading ...</p>
      <p v-else-if="!isLoading && arr.length === 0">No data !</p>
      <ul v-if="arr.length > 0">
        <li v-for="data in arr" :key="data">
          {{ data.name }} taken that
          <span class="blueColor">{{ data.course }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameData: "",
      courseDetails: "",
      errInput: false,
      errCourse: false,
      arr: [],
      isLoading: false,
      errResponse: "",
    };
  },
  methods: {
    inputCheck() {
      if (this.nameData === "") {
        this.errInput = true;
      } else {
        this.errInput = false;
      }
    },
    courseCheck() {
      if (this.courseDetails === "") {
        this.errCourse = true;
      } else {
        this.errCourse = false;
      }
    },
    async displayData() {
      this.isLoading = true;
      const rawData = await fetch(
        `https://vue-https-9e806-default-rtdb.firebaseio.com/form.json`
      );

      if (rawData.ok) {
        this.isLoading = false;
        let response;
        response = await rawData.json();
        for (let id in response) {
          this.arr.push({
            name: response[id].name,
            course: response[id].course,
          });
        }
      }
    },
    submitData() {
      if (!this.errInput && !this.errCourse) {
        fetch(`https://vue-https-9e806-default-rtdb.firebaseio.com/form.json`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: this.nameData,
            course: this.courseDetails,
          }),
        })
          .then((response) => {
            if (response.ok) {
              return response;
            } else {
              throw new Error("not able to send data !");
            }
          })
          .catch((error) => {
            this.errResponse = error;
          });
      } else {
        alert("please fill all details");
      }
      this.nameData = "";
      this.courseDetails = "";
    },
  },
};
</script>

<style scoped>
* {
  font-size: 30px;
}
.blueColor {
  color: rgb(63, 63, 231);
}
.formdata {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 2rem;
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

.activeinput {
  border: 5px solid red;
}
ul {
  margin: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
li {
  list-style: none;
  margin: 1rem;
}
</style>
