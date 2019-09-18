import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'button',
      component: () => import('../views/demo/button')
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: () => import('../views/swipe')
    }
  ]
})
