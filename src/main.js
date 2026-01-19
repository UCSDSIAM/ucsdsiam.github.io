import { createApp } from 'vue'
import { initTheme } from './theme'
import App from './App.vue'
import router from './router'
import './assets/main.css'

initTheme()
createApp(App).use(router).mount('#app')
