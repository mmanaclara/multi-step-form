import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Quasar, Notify } from 'quasar'
import iconSet from 'quasar/icon-set/fontawesome-v6'
// import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

import '@/index.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(Quasar, {
    iconSet: iconSet,
    plugins: { Notify },
})

app.use(pinia)
app.mount('#app')
