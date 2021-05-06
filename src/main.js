import Vue from 'vue'

import VueMeta from 'vue-meta'

import VueGoogleMap from 'vuejs-google-maps'
import 'vuejs-google-maps/dist/vuejs-google-maps.css'

import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './services/mixin'

import '@/assets/css/tailwind.css'
import '@/assets/css/general.css'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueGoogleMap, {
  load: {
    apiKey: '',
    libraries: ['places']
  }
})

Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
