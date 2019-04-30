import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import * as VueGoogleMaps from 'vue2-google-maps'
import apiKey from '../config.js'


Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: apiKey,
  }
})
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

