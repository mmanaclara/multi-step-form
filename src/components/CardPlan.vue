<template>
  <label :for="planType" class="card--wrapper">
    <div class="image--wrapper">
      <img :src="image" alt="" />
    </div>

    <div class="card--footer">
      <p class="plan--title">{{ title }}</p>
      <span v-if="!store.annualPlan" class="plan--price"
        >${{ priceMonthly }}/mo</span
      >
      <div v-else-if="store.annualPlan" class="flex flex-col gap-1">
        <span class="plan--price">${{ priceYearly }}/yr</span>
        <span class="free">2 months free</span>
      </div>
    </div>
  </label>
</template>

<script setup>
import { store } from "../stores/store";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  image: String,
  title: String,
  priceMonthly: Number,
  priceYearly: Number,
  planType: String,
});

console.log();
</script>

<style lang="scss" scoped>
.card--wrapper {
  border: 1px solid #dbdadf;
  border-radius: 8px;
  padding: 1.25rem 1rem;
  cursor: pointer;
}

.card--footer {
  margin-top: 32px;
}

.plan--title {
  font-weight: 500;
  color: #022a56;
}

.plan--price {
  font-size: 0.875rem;
  color: #9699ab;
}

.free {
  color: #022a56;
  font-size: 0.75rem;
}

input:checked ~ label {
  border-color: #022a56;
}
</style>
