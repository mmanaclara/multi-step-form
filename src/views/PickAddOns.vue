<template>
  <div class="router--wrapper">
    <header>
      <h2 class="title">Pick Add-ons</h2>
      <span class="description"
        >Add-ons help enhance your gaming experience.</span
      >
    </header>

    <form class="main--wrapper" @submit.prevent="handleSendForm">
      <div v-for="item in services" :key="item.id" class="flex flex-col gap-4">
        <input
          type="checkbox"
          v-model="addon"
          :value="item.service"
          :id="item.service.service"
          class="hidden"
        />
        <ItemAddOn
          :label="item.label"
          :description="item.description"
          :priceMonthly="item.priceMonthly"
          :priceYearly="item.priceYearly"
          :service="item.service.service"
        />
      </div>

      <footer>
        <RouterLink to="/selectyourplan">Go Back</RouterLink>
        <button type="submit" class="confirm--button">Confirm</button>
      </footer>
    </form>
  </div>
</template>

<script type="module" setup>
import ItemAddOn from "../components/ItemAddOn.vue";
import { RouterLink, useRouter, useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";

const router = useRouter();
const route = useRoute();

const addon = ref([]);

const services = [
  {
    id: 1,
    label: "Online service",
    service: {
      service: "Online service",
      priceMonthly: 1,
      priceYearly: 10,
    },
    description: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
  },
  {
    id: 2,
    label: "Larger storage",
    service: {
      service: "Larger storage",
      priceMonthly: 2,
      priceYearly: 20,
    },
    description: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
  },
  {
    id: 3,
    label: "Customizable profile",
    service: {
      service: "Customizable profile",
      priceMonthly: 2,
      priceYearly: 20,
    },
    description: "Custom theme on your profile",
    priceMonthly: 2,
    priceYearly: 20,
  },
];

function handleSendForm(query) {
  router.push({
    name: "finishingup",
    query: {
      ...route.query,
      ...query,
    },
  });
}

onMounted(() => {
  if (localStorage.addOns) {
    addon.value = JSON.parse(localStorage.addOns);
  }
});

watch(addon, (newVal) => {
  console.log(newVal);
  localStorage.addOns = JSON.stringify(newVal);
});
</script>

<style scoped>
input[type="checkbox"]:checked ~ label {
  border: 1px solid #4f4c99;
}
</style>
