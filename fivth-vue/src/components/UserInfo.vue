<template>
  <section>
    <BageCard>
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <BadgeBase :type="role" :caption="role.toUpperCase()" />
      </template>
      <!-- slot is pass as   v-slot==#para -->
      <template #para>
        <p>{{ infoText }}</p>
      </template>
    </BageCard>

    <ChildElement>
      <template #default="dataItem">
        <h2>Data ==> {{ dataItem.dataItem }}</h2>
      </template>
    </ChildElement>
  </section>
</template>

<script>
import BadgeBase from "./BadgeBase.vue";
import BageCard from "./BageCard.vue";
import ChildElement from "./ChildElement.vue";

export default {
  props: ["fullName", "infoText", "role", "dataItem"],
  components: {
    BadgeBase,
    BageCard,
    ChildElement,
  },
};
</script>

<style scoped>
/* section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
