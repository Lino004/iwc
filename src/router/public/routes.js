import { PAGE_DEFAULT } from '../routerConf'

export default [
  {
    path: '*',
    redirect: PAGE_DEFAULT
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/public/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/public/About.vue')
  }
]
