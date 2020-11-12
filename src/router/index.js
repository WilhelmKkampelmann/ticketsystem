import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.Base_URL,
  routes
})


export default router

// willi.com/main?client=richardkarsten@webdasein.net