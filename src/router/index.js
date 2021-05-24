import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './public'
import clientRoutes from './client'
import dentistRoutes from './dentist'
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
    path: '/client',
    component: () => import('@/views/client/index.vue'),
    children: clientRoutes
  },
  {
    path: '/dentist',
    component: () => import('@/views/dentist/index.vue'),
    children: dentistRoutes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
