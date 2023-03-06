<template>
  <div class="router--wrapper" v-if="hasOverview">
    <header>
      <h2 class="title">Finishing up</h2>
      <span class="description"
        >Double-check everything looks OK before confirming.</span
      >
    </header>

    <form class="main--wrapper" @submit.prevent="handleSendForm">
      <div class="finish--wrapper">
        <div class="sum--container">
          <header>
            <div>
              <h4>
                {{ planInfos.title }} (<span v-if="!store.annualPlan"
                  >Monthly</span
                ><span v-else-if="store.annualPlan">Yearly</span>)
              </h4>
              <RouterLink to="/selectyourplan" class="change--button"
                >Change</RouterLink
              >
            </div>
            <p v-if="!store.annualPlan" class="font-medium text-[#022a56]">
              ${{ planInfos.priceMonthly }}/mo
            </p>
            <p v-else-if="store.annualPlan" class="font-medium text-[#022a56]">
              ${{ planInfos.priceYearly }}/yr
            </p>
          </header>

          <div
            class="services--wrapper"
            v-for="item in addOnsParse"
            :key="item.service"
          >
            <div class="flex justify-between px-[1.5rem]">
              <p class="service--description">{{ item.service }}</p>
              <p v-if="!store.annualPlan" class="service--price">
                ${{ item.priceMonthly }}/mo
              </p>
              <p v-else-if="store.annualPlan" class="service--price">
                ${{ item.priceYearly }}/yr
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-between p-[1.5rem]">
          <p class="service--description">
            Total
            <span v-if="!store.annualPlan">(per month)</span>
            <span v-else-if="store.annualPlan">(per year)</span>
          </p>
          <span v-if="!store.annualPlan" class="total--price"
            >+{{ monthlySum }}/mo</span
          >
          <span v-else-if="store.annualPlan" class="total--price"
            >+{{ annualSum }}/yr</span
          >
        </div>
      </div>

      <footer>
        <RouterLink to="/pickaddons">Go Back</RouterLink>
        <button type="submit" class="confirm--button">Confirm</button>
      </footer>
    </form>
  </div>

  <div v-if="isFormSent" class="thanks--container">
    <div class="w-[400px] thanks--wrapper">
      <div class="w-[5rem] h-[5rem]">
        <img src="../assets/images/icon-thank-you.svg" alt="" />
      </div>

      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        suppert@loremgaming.com.
      </p>
    </div>
  </div>
</template>

<script type="module" setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { store } from "../stores/store";

const hasOverview = ref(true);
const isFormSent = ref(false);

const addOnsParse = ref();
const planInfos = ref();

// const rockets = [
//   { country: "ENG", launches: 29 },
//   { country: "SCO", launches: 22 },
// ];
const monPrice = ref(0);
const annPrice = ref(0);

let annualSum = ref(0);
let monthlySum = ref(0);

// let numbers = [29, 30, 61, 64];
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

function handleSendForm() {
  isFormSent.value = true;
  hasOverview.value = false;
}

if (localStorage.planInfos) {
  planInfos.value = JSON.parse(localStorage.planInfos);
}

onMounted(() => {
  if (localStorage.addOns) {
    addOnsParse.value = JSON.parse(localStorage.addOns);
  }

  monPrice.value = addOnsParse.value?.reduce(
    (oldVal, newVal) => oldVal + newVal.priceMonthly,
    0
  );

  monthlySum.value = monPrice.value + planInfos.value.priceMonthly;

  annPrice.value = addOnsParse.value?.reduce(
    (oldVal, newVal) => oldVal + newVal.priceYearly,
    0
  );

  annualSum.value = annPrice.value + planInfos.value.priceYearly;
});
</script>

<style scoped>
.finish--wrapper header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #90909a;
  padding: 1.5rem;
}

.sum--container {
  border-radius: 8px;
  background: #f8f9fe;
}

.change--button {
  color: #90909a;
  font-size: 0.875rem;
  text-decoration: underline;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h4 {
  color: #022a56;
  font-weight: 500;
}

.services--wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-block: 0.75rem;
}

.service--description {
  font-size: 0.875rem;
  color: #90909a;
}

.service--price {
  font-size: 0.875rem;
  color: #022a56;
}

.total--price {
  font-size: 1.25rem;
  font-weight: 600;
  color: #483dff;
}

.thanks--container {
  padding-inline: 64px;
  text-align: center;
}

.thanks--wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.thanks--wrapper h2 {
  font-size: 2rem;
  color: #022a56;
  font-weight: 700;
  margin-top: 2rem;
}

.thanks--wrapper p {
  color: #9699ab;
  margin-top: 1rem;
}
</style>
