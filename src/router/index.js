import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Contribute from '@/views/user/upload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/contribute',
      name: 'contribute',
      component: Contribute
    }
  ]
})
