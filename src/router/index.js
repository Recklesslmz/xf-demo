import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '../page/register'
import Home from '../page/home'
import Hot from '../components/hot'
import Coming from '../components/coming'
import movieDetail from '../components/movieDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/Hot',
      name: 'hot',
      component: Hot
    },
    {
      path: '/Coming',
      name: 'coming',
      component: Coming
    },
    {
      path: '/Hot/movieDetail/:id',
      name: 'movieDetail',
      component: movieDetail
    },
  ]
})
