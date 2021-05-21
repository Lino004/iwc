import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './public'
import clientRoutes from './client'
import { PAGE_DEFAULT } from './routerConf'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: PAGE_DEFAULT
  },
  {
    path: '/',
    component: () => import('@/views/public/index.vue'),
    children: publicRoutes
  },
  {
    path: '/',
    component: () => import('@/views/public/index.vue'),
    children: clientRoutes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
