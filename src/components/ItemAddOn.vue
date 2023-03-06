<template>
  <label :for="service" class="addon--wrapper">
    <div class="chckbox"></div>
    <div class="flex flex-col mr-auto">
      <p class="label" for="service">{{ label }}</p>
      <span>{{ description }}</span>
    </div>
    <p v-if="!store.annualPlan">+${{ priceMonthly }}/mo</p>
    <p v-else-if="store.annualPlan">+${{ priceYearly }}/yr</p>
  </label>
</template>

<script setup>
import { ref } from "vue";
import { store } from "../stores/store";

const planYearly = ref(localStorage.annualPlan);
console.log(planYearly.value);

if (store.annualPlan) {
  planYearly.value = store.annualPlan;
}

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  label: String,
  description: String,
  service: String,
  priceMonthly: Number,
  priceYearly: Number,
});
</script>

<style lang="css" scoped>
.addon--wrapper {
  border: 1px solid #dbdadf;
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

label {
  cursor: pointer;
}

.chckbox {
  height: 1.25rem;
  width: 1.25rem;
  border: 1px solid #dbdadf;
  border-radius: 4px;
  /* background-image: url("data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzQ4M0RGRiIvPgo8cGF0aCBkPSJNOC42NTk5IDExLjIyNzhMNi4yNDEwOCA5LjA2MTIzQzYuMDgyNzIgOC45MDUwNCA1Ljg2OTE3IDguODE3NCA1LjY0NjU5IDguODE3NDFDNS40MjIwNSA4LjgxNzQxIDUuMjA2NzIgOC45MDY2MiA1LjA0Nzk1IDkuMDY1MzlDNC44ODkxOCA5LjIyNDE3IDQuNzk5OTkgOS40Mzk1MSA0LjggOS42NjQwNUM0LjgwMDAxIDkuODg4NTggNC44ODkyMSAxMC4xMDM5IDUuMDQ3OTkgMTAuMjYyN0w1LjA0Nzk5IDEwLjI2MjdMOC4wNjUyMiAxMy4yNzk3QzguMDY1MjYgMTMuMjc5NyA4LjA2NTI5IDEzLjI3OTcgOC4wNjUzMyAxMy4yNzk4TDguMDY1NDEgMTMuMjc5OUw4LjIwNjgzIDEzLjEzODRDOC4yNjY4IDEzLjE5ODYgOC4zMzgwNyAxMy4yNDYyIDguNDE2NTQgMTMuMjc4N0M4LjQ5NSAxMy4zMTEyIDguNTc5MTEgMTMuMzI3OSA4LjY2NDA0IDEzLjMyNzhNOC42NTk5IDExLjIyNzhMMTUuMjk3NSA3LjI0NTIzTDE1LjE1NjEgNy4xMDM4MUw5LjEyMTI1IDEzLjEzODRNOC42NTk5IDExLjIyNzhMMTQuMTAyMSA2LjA0NjExTDguNjU5OSAxMS4yMjc4Wk04LjY2NDA0IDEzLjMyNzhMOC42NjM3OCAxMy41Mjc4QzguNjYzODcgMTMuNTI3OCA4LjY2Mzk1IDEzLjUyNzggOC42NjQwNCAxMy41Mjc4QzguNjY0MTMgMTMuNTI3OCA4LjY2NDIxIDEzLjUyNzggOC42NjQzIDEzLjUyNzhMOC42NjQwNCAxMy4zMjc4Wk04LjY2NDA0IDEzLjMyNzhDOC43NDg5NyAxMy4zMjc5IDguODMzMDggMTMuMzExMiA4LjkxMTU1IDEzLjI3ODdDOC45OTAwMSAxMy4yNDYyIDkuMDYxMjggMTMuMTk4NiA5LjEyMTI1IDEzLjEzODRNOS4xMjEyNSAxMy4xMzg0TDkuMjYyNjcgMTMuMjc5OEw5LjI2Mjg2IDEzLjI3OTdMOS4xMjEyNSAxMy4xMzg0WiIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC40Ii8+Cjwvc3ZnPgo="); */
}

input {
  width: 20px;
  height: 20px;
}

input[type="checkbox"] {
  accent-color: #504aae;
}

.label {
  color: #022a56;
  font-weight: 500;
}

span {
  font-size: 0.875rem;
  color: #9699ab;
}

p {
  color: #504aae;
  font-size: 0.875rem;
}
</style>
