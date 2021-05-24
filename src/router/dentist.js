export default [
  {
    path: '',
    name: 'dentist',
    redirect: 'profile'
  },
  {
    path: '/dentist/profile',
    name: 'profile',
    component: () => import('@/views/dentist/DentistProfile.vue')
  },
  {
    path: '/dentist/apply-for-accreditation',
    name: 'apply-for-accreditation',
    component: () => import('@/views/dentist/ApplyAccreditation.vue')
  },
  {
    path: '/dentist/procedures',
    name: 'procedures',
    component: () => import('@/views/dentist/Procedures.vue')
  },
  {
    path: '/dentist/settings',
    name: 'settings',
    component: () => import('@/views/dentist/Settings.vue')
  }
]
