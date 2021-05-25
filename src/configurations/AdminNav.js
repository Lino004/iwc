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
      }
      /* {
        label: 'Plans',
        to: 'admin-plans'
      } */
    ]
  },
  {
    label: 'Accreditations',
    to: 'admin-accreditations',
    reg: /^\/admin\/admin-accreditations/gm,
    icon: 'IconAccreditations',
    chidren: []
  },
  {
    label: 'Clients',
    to: 'admin-clients',
    reg: /^\/admin\/admin-clients/gm,
    icon: 'IconClients',
    chidren: []
  },
  {
    label: 'Reports',
    to: 'admin-reports',
    reg: /^\/admin\/admin-reports/gm,
    icon: 'IconReports',
    chidren: []
  },
  {
    label: 'Account',
    to: 'admin-account',
    reg: /^\/admin\/admin-account/gm,
    icon: 'IconAccount',
    chidren: []
  }
]
