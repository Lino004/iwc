export default [
  {
    path: '',
    name: 'client',
    redirect: 'profile'
  },
  {
    path: 'profile',
    name: 'profile',
    component: () => import('@/views/client/Profile.vue')
  }
]
