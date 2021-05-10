export default [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/public/Home.vue')
  },
  {
    path: '/about/company',
    name: 'about/company',
    component: () => import('@/views/public/About/Company.vue')
  },
  {
    path: '/about/accredited-dentists',
    name: 'about/accredited-dentists',
    component: () => import('@/views/public/About/Accredited.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/public/Contact.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/public/Services.vue')
  },
  {
    path: '/informations',
    component: () => import('@/views/public/Informations/index.vue'),
    children: [
      {
        path: '/',
        name: 'terms',
        component: () => import('@/views/public/Informations/Terms.vue')
      },
      {
        path: '/informations/privacy',
        name: 'privacy',
        component: () => import('@/views/public/Informations/Privacy.vue')
      },
      {
        path: '/informations/dataSharing',
        name: 'dataSharing',
        component: () => import('@/views/public/Informations/DataSharing.vue')
      }
    ]
  }
]
