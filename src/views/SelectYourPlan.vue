<template>
  <div class="router--wrapper">
    <header>
      <h2 class="title">Select your plan</h2>
      <span class="description"
        >You have the option of monthly or yearly billing.</span
      >
    </header>

    <form class="main--wrapper">
      <div class="grid grid-cols-3 gap-4">
        <CardPlan
          v-for="item in cardInfos"
          :key="item.id"
          :image="item.image"
          :title="item.title"
          :price="item.price"
        />
      </div>

      <div class="plan--toggle">Monthly | Yearly</div>

      <footer>
        <RouterLink to="/">Go Back</RouterLink>
        <button class="next--button">Next Step</button>
      </footer>
    </form>
  </div>
</template>

<script setup>
import CardPlan from "../components/CardPlan.vue";
import { RouterLink } from "vue-router";

const cardInfos = [
  {
    id: 1,
    image: "../../src/assets/images/icon-arcade.svg",
    title: "Arcade",
    price: 9,
  },
  {
    id: 2,
    image: "../../src/assets/images/icon-advanced.svg",
    title: "Advanced",
    price: 12,
  },
  {
    id: 3,
    image: "../../src/assets/images/icon-pro.svg",
    title: "Pro",
    price: 15,
  },
];
</script>

<style scoped>
.plan--toggle {
  background: #f8f9fe;
  height: 3rem;
  border-radius: 8px;
  text-align: center;
  display: grid;
  place-items: center;
  font-weight: 500;
}
</style>
