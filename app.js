const { createApp } = Vue
import store from './store/index.js'
import router from './router/index.js'
import HomePage from './pages/Home.js'
const app = createApp({
  template: `
    <router-view></router-view>
  `
})

app.use(store)
app.use(router)
app.mount('#app')

// Init AOS
AOS.init()