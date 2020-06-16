import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Contribute from '@/views/user/upload'
import Login from '@/views/login'
import Books from '@/views/home/components/Content/bookList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/books'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/books',
      children: [
        {
          path: '/books',
          name: 'books',
          component: Books
        },
        {
          path: '/dataDetail',
          name: 'dataDetail',
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
