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
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/public/faq.vue')
  },
  {
    path: '/cart',
    component: () => import('@/views/public/Cart/index.vue'),
    children: [
      {
        path: '/',
        name: 'dentalPackage',
        component: () => import('@/views/public/Cart/DentalPackage.vue')
      },
      {
        path: '/cart/checkout',
        name: 'checkout',
        component: () => import('@/views/public/Cart/Checkout.vue')
      },
      {
        path: '/cart/order-confirmation',
        name: 'order-confirmation',
        component: () => import('@/views/public/Cart/OrderConfirmation.vue')
      },
      {
        path: '/cart/payment-instruction',
        name: 'payment-instruction',
        component: () => import('@/views/public/Cart/PaymentInstruction.vue')
      }
    ]
  }
]
