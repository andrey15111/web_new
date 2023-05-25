import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegView from '../views/RegView.vue'
import EventsView from '../views/EventsView.vue'
import FranchiseView from '../views/FranchiseView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/reg',
    name: 'registr',
    component: RegView
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  {
    path: '/franchise',
    name: 'franchise',
    component: FranchiseView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
