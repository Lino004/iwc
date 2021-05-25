export default [
  {
    path: '',
    name: 'admin-dashbord',
    component: () => import('@/views/admin/Dashbord.vue')
  },
  {
    path: 'admin-sales',
    component: () => import('@/views/admin/sales/index.vue'),
    children: [
      {
        path: 'products',
        name: 'admin-sales-products',
        component: () => import('@/views/admin/sales/Products.vue')
      },
      {
        path: 'add-products',
        name: 'admin-sales-add-products',
        component: () => import('@/views/admin/sales/EditProduct.vue')
      },
      {
        path: 'edit-products',
        name: 'admin-sales-edit-products',
        component: () => import('@/views/admin/sales/EditProduct.vue')
      },
      {
        path: 'client-orders',
        name: 'admin-sales-client-orders',
        component: () => import('@/views/admin/sales/ClientOrders.vue')
      }
    ]
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
