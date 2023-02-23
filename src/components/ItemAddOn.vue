<template>
  <div class="addon--wrapper">
    <input type="checkbox" v-model="addon" :id="service" />
    <div class="flex flex-col mr-auto">
      <label for="service">{{ label }}</label>
      <span>{{ description }}</span>
    </div>
    <p v-if="(hasMonthlyPrice = true)">+${{ priceMonthly }}/mo</p>
    <p v-if="hasYearlyPrice">+${{ priceYearly }}/yr</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  label: String,
  description: String,
  service: String,
  priceMonthly: Number,
  priceYearly: Number,
});

const addon = ref("");
</script>

<style lang="scss" scoped>
input {
  width: 20px;
  height: 20px;
}

input[type="checkbox"] {
  accent-color: #504aae;
}

label {
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
