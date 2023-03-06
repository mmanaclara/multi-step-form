import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlanStore = defineStore("plan", () => {
    const planYearly = ref(false);
    function setPlan(boolean) {
        planYearly.value = boolean;
    }

    return { planYearly, setPlan };
});