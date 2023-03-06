<template>
  <div class="router--wrapper">
    <header>
      <h2 class="title">Select your plan</h2>
      <span class="description"
        >You have the option of monthly or yearly billing.</span
      >
    </header>

    <form class="main--wrapper" @submit.prevent="handleSendForm">
      <div class="grid grid-cols-3 gap-4 w-full relative">
        <div class="grid" v-for="item in cardInfos" :key="item.id">
          <input
            required
            type="radio"
            class="hidden"
            :id="item.infos.title"
            v-model="planInfos"
            :value="item.infos"
            @change="hideErrorMessage"
          />
          <CardPlan
            :image="item.image"
            :title="item.infos.title"
            :priceMonthly="item.infos.priceMonthly"
            :priceYearly="item.infos.priceYearly"
            :planType="item.infos.title"
          />
        </div>

        <p class="error">{{ errorMessage }}</p>
      </div>

      <div class="flex flex-col relative">
        <div class="plan--toggle">
          <input
            type="checkbox"
            v-model="planYearly"
            id="checked"
            @input="store.changeState(store.annualPlan)"
          />

          <p class="month">Monthly</p>
          <label for="checked" class="switch">
            <span class="slider"></span>
          </label>
          <p class="year">Yearly</p>
        </div>
      </div>

      <footer>
        <RouterLink to="/">Go Back</RouterLink>
        <button type="submit" class="next--button">Next Step</button>
      </footer>
    </form>
  </div>
</template>

<script type="module" setup>
import CardPlan from "../components/CardPlan.vue";
import { RouterLink, useRouter, useRoute } from "vue-router";
import { store } from "../stores/store";
import { ref, onMounted, watch } from "vue";

const planInfos = ref([]);
const planYearly = ref(store.annualPlan);
const errorMessage = ref("");

const router = useRouter();
const route = useRoute();

const cardInfos = [
  {
    id: 1,
    image: "../../src/assets/images/icon-arcade.svg",
    infos: {
      title: "Arcade",
      priceMonthly: 9,
      priceYearly: 90,
    },
  },
  {
    id: 2,
    image: "../../src/assets/images/icon-advanced.svg",
    infos: {
      title: "Advanced",
      priceMonthly: 12,
      priceYearly: 120,
    },
  },
  {
    id: 3,
    image: "../../src/assets/images/icon-pro.svg",
    infos: {
      title: "Pro",
      priceMonthly: 15,
      priceYearly: 150,
    },
  },
];

function handleSendForm(query) {
  if (!localStorage.planInfos) {
    errorMessage.value = "Plan type is required";
    return;
  }

  router.push({
    name: "pickaddons",
    query: {
      ...route.query,
      ...query,
    },
  });

  if (!localStorage.annualPlan) {
    localStorage.annualPlan = false;
  }
}

function hideErrorMessage() {
  if (planInfos.value) {
    errorMessage.value = "";
  }
}

onMounted(() => {
  if (localStorage.planInfos) {
    planInfos.value = JSON.parse(localStorage.planInfos);
  }
});

watch(planInfos, (newVal) => {
  console.log(newVal);
  localStorage.planInfos = JSON.stringify(newVal);
});
</script>

<style scoped>
.plan--toggle {
  background: #f8f9fe;
  height: 3rem;
  border-radius: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 1.5rem;
}

#checked {
  display: none;
}

.switch {
  position: relative;
  background: #022a56;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 4px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.slider {
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  transition: all 0.5s ease-in-out;
}
/* 
#checked:checked ~ .switch {
  background: ;
} */

.month {
  color: #022a56;
}

.year {
  color: #9699ab;
}

#checked:checked ~ .year {
  color: #022a56;
}

#checked:checked ~ .month {
  color: #9699ab;
}
#checked:checked ~ .switch .slider {
  transform: translateX(20px);
}

.error {
  color: red;
  font-size: 0.875rem;
  position: absolute;
  bottom: -20%;
  z-index: 2;
}

.error2 {
  bottom: -30%;
}
</style>
