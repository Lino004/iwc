import Vue from 'vue'

import VueMeta from 'vue-meta'

import VueGoogleMap from 'vuejs-google-maps'
import 'vuejs-google-maps/dist/vuejs-google-maps.css'

import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

import '@/assets/css/tailwind.css'
import '@/assets/css/general.scss'
import '@/assets/css/input.scss'
import '@/assets/css/paymentMethod.scss'
import '@/assets/css/modal.scss'
import '@/assets/css/loading.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import iconsComponent from './services/iconsComponent'
import generalComponent from './services/generalComponent'
import mixins from './services/mixin'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueGoogleMap, {
  load: {
    apiKey: '',
    libraries: ['places']
  }
})
Vue.use(VueToast)

Vue.mixin(iconsComponent)
Vue.mixin(generalComponent)
Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
