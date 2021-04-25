import Vue from 'vue'
import Router from 'vue-router'

// Pages 
// import Home from '../pages/Home.vue'
// import Articles from '../pages/Articles.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: () => import(/* webpackChunkName: "Home Page" */ "../pages/Home.vue")
    },
    {
      path: '/articles',
      component: () => import(/* webpackChunkName: "Articles Page" */ "../pages/Articles.vue")
    },
    {
      path: '/article',
      component: () => import(/* webpackChunkName: "Article Page" */ "../pages/Article.vue")
    }
  ]
})
