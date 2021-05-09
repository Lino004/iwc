export default [
  {
    path: '/informations',
    name: 'informations',
    component: () => import('@/views/public/Informations/informations.vue')
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/public/Informations/Terms.vue')
  }
]
