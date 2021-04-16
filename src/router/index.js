import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
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
    props: true,
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
  },
  {
    path: '/404',
    component: () => import('@/components/Error404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, saved) {
    if (saved) return saved
    if (to.hash) return to.hash
    return { x: 0, y: 0 }
  }
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta?.title || 'Vue App'
  })
})

export default router
