import Vue from 'vue'
import Router from 'vue-router'

// Pages 
import Home from '../pages/Home.vue'
import Articles from '../pages/Articles.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: Home
    },
    {
      path: '/articles',
      component: Articles
    }
  ]
})
