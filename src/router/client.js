export default [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/client/Home.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('@/views/client/SignIn.vue')
  },
  {
    path: '/password-reset-token',
    name: 'password-reset-token',
    component: () => import('@/views/client/PasswordResetT.vue')
  }
]
