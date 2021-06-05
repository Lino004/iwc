import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from './public'
import clientRoutes from './client'
import dentistRoutes from './dentist'
import adminRoutes from './admin'
import { PAGE_DEFAULT } from './routerConf'
import store from '../store'

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
  },
  {
    path: '/admin-signin',
    name: 'admin-signin',
    component: () => import('@/views/admin/AdminSignin.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/index.vue'),
    children: adminRoutes,
    beforeEnter: async (to, from, next) => {
      try {
        await store.dispatch('adminUser/getUser')
        next()
      } catch (error) {
        next({ name: 'admin-signin' })
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
