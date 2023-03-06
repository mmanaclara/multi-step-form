import { reactive } from 'vue'

export const store = reactive({
    annualPlan: localStorage.annualPlan,
    planInfos: localStorage.planInfos,
    addOns: localStorage.addOns,
    changeState(boolean) {
        this.annualPlan = !boolean
        if (boolean === true) {
            this.annualPlan = false
        } else {
            this.annualPlan = true
        }

        localStorage.annualPlan = this.annualPlan
    },
})