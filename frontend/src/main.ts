import { createApp } from 'vue'
import '@/style/style.css'
import App from './App.vue'
import { setupStore } from '@/store'
import { setupNaive } from '@/plugins'
import { setupRouter } from '@/route'

function appInit() {
  const app = createApp(App)
  setupStore(app)
  setupNaive(app)

  setupRouter(app)
  app.mount('#app', true)
}
appInit()
