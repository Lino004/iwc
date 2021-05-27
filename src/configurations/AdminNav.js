export default [
  {
    label: 'Dashboard',
    to: 'admin-dashbord',
    reg: /^\/admin\/admin-dashbord/gm,
    icon: 'IconDashboard'
  },
  {
    label: 'Sales',
    to: 'admin-sales-products',
    reg: /^\/admin\/admin-sales/gm,
    icon: 'IconSales',
    chidren: [
      {
        label: 'Products',
        to: 'admin-sales-products'
      },
      {
        label: 'Client Orders',
        to: 'admin-sales-client-orders'
      },
      {
        label: 'Plans',
        to: 'admin-sales-plans'
      }
    ]
  },
  {
    label: 'Accreditations',
    to: 'admin-accreditations-accreditation-applications',
    reg: /^\/admin\/admin-accreditations/gm,
    icon: 'IconAccreditations',
    chidren: [
      {
        label: 'Accreditation Application',
        to: 'admin-accreditations-accreditation-applications'
      },
      {
        label: 'Procedures',
        to: 'admin-accreditations-procedures'
      },
      {
        label: 'Dental Clinics',
        to: 'admin-accreditations-dental-clinics'
      },
      {
        label: 'Dentists',
        to: 'admin-accreditations-dentists'
      },
      {
        label: 'Regions & Provinces',
        to: 'admin-accreditations-regions-provinces'
      }
    ]
  },
  {
    label: 'Clients',
    to: 'admin-clients-groups',
    reg: /^\/admin\/admin-clients/gm,
    icon: 'IconClients',
    chidren: [
      {
        label: 'Groups',
        to: 'admin-clients-groups'
      },
      {
        label: 'Members',
        to: 'admin-clients-members'
      },
      {
        label: 'Payors',
        to: 'admin-clients-payors'
      },
      {
        label: 'Bulk Payments',
        to: 'admin-clients-bulk-payments'
      }
    ]
  },
  {
    label: 'Reports',
    to: 'admin-reports-payment-reports',
    reg: /^\/admin\/admin-reports/gm,
    icon: 'IconReports',
    chidren: [
      {
        label: 'Payment Reports',
        to: 'admin-reports-payment-reports'
      },
      {
        label: 'Availment Reports',
        to: 'admin-reports-availment-reports'
      },
      {
        label: 'Print Cart',
        to: 'admin-reports-print-cart'
      }
    ]
  },
  {
    label: 'Account',
    to: 'admin-account-users',
    reg: /^\/admin\/admin-account/gm,
    icon: 'IconAccount',
    chidren: [
      {
        label: 'Users',
        to: 'admin-account-users'
      },
      {
        label: 'Logs',
        to: 'admin-account-logs'
      },
      {
        label: 'Website Settings',
        to: 'admin-account-website-settings'
      },
      {
        label: 'Payment Settings',
        to: 'admin-account-payment-settings'
      },
      {
        label: 'Sign Out',
        to: 'admin-account-sign-out'
      }
    ]
  }
]
