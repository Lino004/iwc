export default [
  {
    label: 'Dashboard',
    to: 'admin-dashbord',
    icon: 'IconDashboard'
  },
  {
    label: 'Sales',
    to: 'admin-sales',
    icon: 'IconSales',
    chidren: [
      /* {
        label: 'Products',
        to: 'admin-products'
      },
      {
        label: 'Client Orders',
        to: 'admin-client-orders'
      },
      {
        label: 'Plans',
        to: 'admin-plans'
      } */
    ]
  },
  {
    label: 'Accreditations',
    to: 'admin-accreditations',
    icon: 'IconAccreditations',
    chidren: []
  },
  {
    label: 'Clients',
    to: 'admin-clients',
    icon: 'IconClients',
    chidren: []
  },
  {
    label: 'Reports',
    to: 'admin-reports',
    icon: 'IconReports',
    chidren: []
  },
  {
    label: 'Account',
    to: 'admin-account',
    icon: 'IconAccount',
    chidren: []
  }
]