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
    path: '/products',
    name: 'products',
    component: () => import('@/views/public/products.vue')
  }
]
