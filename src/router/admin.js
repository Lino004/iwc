export default [
  {
    path: '',
    name: 'admin-dashbord',
    component: () => import('@/views/admin/Dashbord.vue')
  },
  {
    path: 'admin-sales',
    name: 'admin-sales',
    component: () => import('@/views/admin/Sales.vue')
  },
  {
    path: 'admin-accreditations',
    name: 'admin-accreditations',
    component: () => import('@/views/admin/Accreditations.vue')
  },
  {
    path: 'admin-clients',
    name: 'admin-clients',
    component: () => import('@/views/admin/Clients.vue')
  },
  {
    path: 'admin-reports',
    name: 'admin-reports',
    component: () => import('@/views/admin/Reports.vue')
  },
  {
    path: 'admin-account',
    name: 'admin-account',
    component: () => import('@/views/admin/Account.vue')
  }
]
