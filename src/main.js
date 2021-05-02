import Vue from 'vue'

import VueMeta from 'vue-meta'

import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './services/mixin'

import '@/assets/css/tailwind.css'
import '@/assets/css/general.css'

Vue.config.productionTip = false

Vue.use(VueMeta)

Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
