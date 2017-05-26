import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './Home.vue'
import Theme from './Theme.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/themes/:theme', component: Theme },
]

export default new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (from.params.theme && to.params.theme) {
      return { x: 0, y: window.scrollTop }
    }
    return (savedPosition) ? savedPosition : { x: 0, y: 0 }
  },
  routes
})
