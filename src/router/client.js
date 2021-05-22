export default [
  {
    path: '/client/profile',
    name: 'profile',
    component: () => import('@/views/client/Profile.vue')
  },
  {
    path: '/client/my-plans',
    name: 'plans',
    component: () => import('@/views/client/Plans.vue')
  },
  {
    path: '/client/orders',
    name: 'orders',
    component: () => import('@/views/client/Orders.vue')
  },
  {
    path: '/client/settings',
    name: 'settings',
    component: () => import('@/views/client/Settings.vue')
  }
]
