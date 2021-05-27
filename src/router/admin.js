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
        component: () =>
          import('@/views/admin/accreditations/AccreditationApplications.vue')
      },
      {
        path: 'procedures',
        name: 'admin-accreditations-procedures',
        component: () => import('@/views/admin/accreditations/Procedures.vue')
      },
      {
        path: 'dental-clinics',
        name: 'admin-accreditations-dental-clinics',
        component: () =>
          import('@/views/admin/accreditations/DentalClinics.vue')
      },
      {
        path: 'dentists',
        name: 'admin-accreditations-dentists',
        component: () => import('@/views/admin/accreditations/Dentists.vue')
      },
      {
        path: 'regions-provinces',
        name: 'admin-accreditations-regions-provinces',
        component: () =>
          import('@/views/admin/accreditations/RegionsProvinces.vue')
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
    component: () => import('@/views/admin/reports/index.vue'),
    children: [
      {
        path: 'payment-reports',
        name: 'admin-reports-payment-reports',
        component: () => import('@/views/admin/reports/PaymentReports.vue')
      },
      {
        path: 'availment-reports',
        name: 'admin-reports-availment-reports',
        component: () => import('@/views/admin/reports/AvailmentReports.vue')
      },
      {
        path: 'print-cart',
        name: 'admin-reports-print-cart',
        component: () => import('@/views/admin/reports/PrintCart.vue')
      }
    ]
  },
  {
    path: 'admin-account',
    component: () => import('@/views/admin/account/index.vue'),
    children: [
      {
        path: 'users',
        name: 'admin-account-users',
        component: () => import('@/views/admin/account/Users.vue')
      },
      {
        path: 'logs',
        name: 'admin-account-logs',
        component: () => import('@/views/admin/account/Logs.vue')
      },
      {
        path: 'website-settings',
        name: 'admin-account-website-settings',
        component: () => import('@/views/admin/account/WebsiteSettings.vue')
      },
      {
        path: 'payment-settings',
        name: 'admin-account-payment-settings',
        component: () => import('@/views/admin/account/PaymentSettings.vue')
      },
      {
        path: 'sign-out',
        name: 'admin-account-sign-out',
        component: () => import('@/views/admin/account/SignOut.vue')
      }
    ]
  }
]
