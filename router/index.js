import HomePage from '../pages/Home.js'
import ProjectPage from '../pages/Projects.js'
import AboutPage from '../pages/About.js'

const routes = [
  { path: '/', component: HomePage },{ path: '/about', component: AboutPage },
  { path: '/project/:id', component: ProjectPage },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router