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
        path: '',
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
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/public/faq.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/public/products.vue')
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
  },
  {
    path: '/apply-for-accreditation',
    name: 'apply-for-accreditation',
    component: () => import('@/views/public/ApplyForAccreditation.vue')
  }
]
