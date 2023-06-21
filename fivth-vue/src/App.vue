<template>
  <div>
    <!-- <ActiveElement
        :title="isActive && isActive.title"
        :text="isActive && isActive.text"
      />
      <knowledge-base @select-topic="activateTopic" /> -->
    <div>
      <BageList />
      <UserInfo
        :full-name="activeUser.name"
        :info-text="activeUser.description"
        :role="activeUser.role"
      />
    </div>

    <!-- dynamic add -->
    <button @click="selectedCmp('ActivePeople')">Active</button>
    <button @click="selectedCmp('ManagePeople')">Manage</button>
    <ActivePeople v-if="selectCmp === 'ActivePeople'" />
    <ManagePeople v-if="selectCmp === 'ManagePeople'" />
  </div>
</template>

<script>
// import ActiveElement from "./components/ActiveElement.vue";
// import KnowledgeBase from "./components/KnowledgeBase.vue";

// import BageList from "./components/BageList.vue";
// import UserInfo from "./components/UserInfo.vue";
import ActivePeople from "./components/ActivePeople.vue";
import ManagePeople from "./components/ManagePeople.vue";

export default {
  name: "App",
  components: {
    // ActiveElement,
    // KnowledgeBase,

    // BageList,
    // UserInfo,
    ManagePeople,
    ActivePeople,
  },
  provide() {
    return {
      topics: this.topics,
      selecTopics: this.activateTopic,
    };
  },
  data() {
    return {
      isActive: null,
      selectCmp: "ActivePeople",
      activeUser: {
        name: "Maximilian ",
        description: "Site owner and admin",
        role: "author",
      },
      topics: [
        {
          id: 1,
          title: "title 1 ",
          text: "text 1",
          description: "description 1",
        },
        {
          id: 2,
          title: "title 2 ",
          text: "text 2",
          description: "description 2",
        },
      ],
    };
  },

  methods: {
    activateTopic(topicId) {
      this.isActive = this.topics.find((topic) => topic.id === topicId);
    },
    selectedCmp(cmp) {
      this.selectCmp = cmp;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>
