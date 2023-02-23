<template>
  <div class="router--wrapper">
    <header>
      <h2 class="title">Pick Add-ons</h2>
      <span class="description"
        >Add-ons help enhance your gaming experience.</span
      >
    </header>

    <form class="main--wrapper">
      <div class="flex flex-col gap-4">
        <ItemAddOn
          v-for="item in services"
          :key="item.id"
          :label="item.label"
          :description="item.description"
          :priceMonthly="item.priceMonthly"
          :priceYearly="item.priceYearly"
          :service="item.service"
        />
      </div>

      <footer>
        <RouterLink to="/selectyourplan">Go Back</RouterLink>
        <button class="confirm--button">Confirm</button>
      </footer>
    </form>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import ItemAddOn from "../components/ItemAddOn.vue";

const services = [
  {
    id: 1,
    label: "Online service",
    service: "online",
    description: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
  },
  {
    id: 2,
    label: "Larger storage",
    service: "storage",
    description: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
  },
  {
    id: 3,
    label: "Customizable profile",
    service: "profile",
    description: "Custom theme on your profile",
    priceMonthly: 2,
    priceYearly: 20,
  },
];
</script>

<style scoped></style>
