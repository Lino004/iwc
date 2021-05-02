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
    path: '/about-company',
    name: 'about-company',
    component: () => import('@/views/public/About/Company.vue')
  }
]
