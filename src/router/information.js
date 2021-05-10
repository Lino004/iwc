export default [
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/public/Informations/Terms.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/public/Informations/Privacy.vue')
  },
  {
    path: '/dataSharing',
    name: 'dataSharing',
    component: () => import('@/views/public/Informations/DataSharing.vue')
  }
]
