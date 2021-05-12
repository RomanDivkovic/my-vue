import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jokes from '../views/jokes.vue'
import Weather from '../views/weather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jokes',
    name: 'jokes',
    component: Jokes
  },
  {
    path: '/weather',
    name: 'weather',
    component: Weather
  }
]

const router = new VueRouter({
  routes
})

export default router
