import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'

createApp(App)
  .use(router)
  .use(VueSpinners)
  .use(Chartkick.use(Chart))
  .mount('#app')
