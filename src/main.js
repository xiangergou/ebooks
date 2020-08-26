// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = axios
const AV = require('leancloud-storage')

AV.init({
  appId: 'AlWeYVtSToe0WIC9iWiVHLsQ-MdYXbMMI',
  appKey: 'gC4mPTDAI5e5GriuORDNgED4'
})

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
