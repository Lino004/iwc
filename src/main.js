import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/tailwind.css'
import IconEmail from '@/components/icons/IconEmail'
import IconPhone from '@/components/icons/IconPhone'

Vue.config.productionTip = false
Vue.mixin({
  components: {
    IconEmail,
    IconPhone
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
