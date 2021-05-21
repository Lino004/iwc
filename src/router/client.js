export default [
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('@/views/client/SignIn/SignIn.vue')
  },
  {
    path: '/password-reset-token',
    name: 'password-reset-token',
    component: () => import('@/views/client/SignIn/PasswordResetT.vue')
  },
  {
    path: '/password-reset',
    name: 'password-reset',
    component: () => import('@/views/client/SignIn/PasswordReset.vue')
  }
]
