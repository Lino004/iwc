export default [
  {
    path: '',
    name: 'dentist',
    redirect: 'dentist-profile'
  },
  {
    path: '/dentist/profile',
    name: 'dentist-profile',
    component: () => import('@/views/dentist/DentistProfile.vue')
  },
  {
    path: '/dentist/procedures',
    name: 'procedures',
    component: () => import('@/views/dentist/Procedures.vue')
  },
  {
    path: '/dentist/settings',
    name: 'dentist-settings',
    component: () => import('@/views/dentist/Settings.vue')
  }
]
