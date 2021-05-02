import { PAGE_DEFAULT } from '../routerConf'

export default [
  {
    path: '*',
    redirect: PAGE_DEFAULT
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  }
]
