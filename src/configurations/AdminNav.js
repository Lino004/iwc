export default [
  {
    label: 'Dashboard',
    to: 'admin-dashbord',
    icon: 'IconDashboard'
  },
  {
    label: 'Sales',
    to: 'admin-sales-products',
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
