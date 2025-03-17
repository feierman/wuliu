import { createApp } from 'vue'
import '@/style/Normalize.scss'
import '@/assets/fonts/iconfont.css'



import router from './router'

import { createPinia } from 'pinia'
import App from './App.vue'
// import { userAuthStore } from './stores'

const app = createApp(App)
app.use(createPinia())
// const authStore = userAuthStore();
// authStore.initialize();


app.use(router).mount('#app')