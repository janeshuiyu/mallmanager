// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import httpHelper from '@/plugins/http.js'
import moment from 'moment'
// import axios from 'axios'
// Vue.prototype.axios = axios
import router from './router'
import '@/assets/css/index.css'
Vue.use(ElementUI)
Vue.use(httpHelper)

Vue.config.productionTip = false

Vue.filter('fmtdate', (v) => {
  return moment(v).format('YYYY-MM-DD')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
