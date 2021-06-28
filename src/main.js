import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from "./store"

// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Smooth scroll to anchor
import VueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueSmoothScroll)

// Vuelidate - input fields validation
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Lazyload to images
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
