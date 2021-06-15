import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meditations',
    name: 'Bibliotéca',
    component: () => import(/* webpackChunkName: "library" */ '../views/Library.vue')
  },
  {
    path: '/read/:id',
    name: 'Leitura',
    props: true,
    component: () => import(/* webpackChunkName: "reading" */ '../views/Reading.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
