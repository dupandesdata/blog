const { createApp } = Vue
import store from './store/index.js'
import router from './router/index.js'
import Nav from './components/Nav.js'
import HomePage from './pages/Home.js'
const app = createApp({
  components: { Nav },
  data() {
    return {
      year: new Date().getFullYear()
    }
  },
  mounted() {
    const isMobile = window.innerWidth <= 768
    AOS.init({
      once: false,
      duration: 700,
      easing: 'ease-out',
      offset: isMobile ? 8 : 120,
    });
  },
  template: `
    <section class="md:flex gap-2">
      <Nav />
      <main class="pt-12 px-2 overflow-x-hidden md:w-5xl">
        <router-view></router-view>
      </main>
    </section>
      <footer class="mt-2 p-2">
        <h6 class="text-center text-sm">Copyright 2024 - {{year}} All Rights Reserved | Powered by ❤️ github</h6>
      </footer>
  `
})

app.use(store)
app.use(router)
app.mount('#app')
