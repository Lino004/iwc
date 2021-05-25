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
        path: 'client-orders',
        name: 'admin-sales-client-orders',
        component: () => import('@/views/admin/sales/ClientOrders.vue')
      },
      {
        path: 'plans',
        name: 'admin-sales-plans',
        component: () => import('@/views/admin/sales/Plans.vue')
      }
    ]
  },
  {
    path: 'admin-accreditations',
    component: () => import('@/views/admin/accreditations/index.vue'),
    children: [
      {
        path: 'accreditation-applications',
        name: 'admin-accreditations-accreditation-applications',
        component: () => import('@/views/admin/accreditations/AccreditationApplications.vue')
      },
      {
        path: 'procedures',
        name: 'admin-accreditations-procedures',
        component: () => import('@/views/admin/accreditations/Procedures.vue')
      },
      {
        path: 'dental-clinics',
        name: 'admin-accreditations-dental-clinics',
        component: () => import('@/views/admin/accreditations/DentalClinics.vue')
      },
      {
        path: 'dentists',
        name: 'admin-accreditations-dentists',
        component: () => import('@/views/admin/accreditations/Dentists.vue')
      },
      {
        path: 'regions-provinces',
        name: 'admin-accreditations-regions-provinces',
        component: () => import('@/views/admin/accreditations/RegionsProvinces.vue')
      }
    ]
  },
  {
    path: 'admin-clients',
    component: () => import('@/views/admin/clients/index.vue'),
    children: [
      {
        path: 'groups',
        name: 'admin-clients-groups',
        component: () => import('@/views/admin/clients/Groups.vue')
      },
      {
        path: 'members',
        name: 'admin-clients-members',
        component: () => import('@/views/admin/clients/Members.vue')
      },
      {
        path: 'payors',
        name: 'admin-clients-payors',
        component: () => import('@/views/admin/clients/Payors.vue')
      },
      {
        path: 'bulk-payments',
        name: 'admin-clients-bulk-payments',
        component: () => import('@/views/admin/clients/BulkPayments.vue')
      }
    ]
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
