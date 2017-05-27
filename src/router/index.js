import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '../page/register'
import Home from '../page/home'
import Hot from '../components/hot'
import Coming from '../components/coming'
import movieDetail from '../components/movieDetail'
import acountLogin from '../components/acountLogin'
import mobileLogin from '../components/mobileLogin'
import homeCart from '../page/homeCart'
import map from '../page/map'
import mapGaode from '../page/mapGaode.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
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
      path: '/acountLogin',
      name: 'acountLogin',
      component: acountLogin
    },
    {
      path: '/mobileLogin',
      name: 'mobileLogin',
      component: mobileLogin
    },
    {
      path: '/Hot/movieDetail/:id',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path: '/homeCart',
      name: 'homeCart',
      component: homeCart
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/mapGaode',
      name: 'mapGaode',
      component: mapGaode
    },
  ]
})
