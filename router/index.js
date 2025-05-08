import HomePage from '../pages/Home.js'

const routes = [
  { path: '/', component: HomePage },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router