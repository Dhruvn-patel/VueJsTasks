<template>
  <div>
    <ul>
      <KnowledgeElement
        v-for="topic in topics"
        :key="topic.id"
        :id="topic.id"
        :name="topic.title"
        :description="topic.description"
       
      />
    </ul>
  </div>
</template>

<script>
import KnowledgeElement from "./KnowledgeElement";
export default {
  components: {
    KnowledgeElement,
  },
  inject: ["topics"],
  
};
</script>

<style></style>
