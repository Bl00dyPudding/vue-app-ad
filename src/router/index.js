import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('@/views/User/Orders')
  },
  {
    path: '/new',
    name: 'NewAd',
    component: () => import('@/views/Ads/NewAd')
  },
  {
    path: '/list',
    name: 'AdList',
    component: () => import('@/views/Ads/AdList')
  },
  {
    path: '/ad/:id',
    name: 'Ad',
    component: () => import('@/views/Ads/Ad')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/Login')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/Auth/Registration')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
