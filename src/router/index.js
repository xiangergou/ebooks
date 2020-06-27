import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Contribute from '@/views/user/upload'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home,
      children: [
        {
          path: '/notice',
          name: 'notice',
          component: () => import('@/views/home/components/Content/notice')
        },
        {
          path: '/detail',
          name: 'detail',
          component: () => import('@/views/home/components/Content/dataDetail')
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [

        {
          path: '/detail',
          name: 'detail',
          component: () => import('@/views/home/components/Content/dataDetail')
        }
      ]
    },
    {
      path: '/contribute',
      name: 'contribute',
      component: Contribute
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
