import store from '@/store'

export default (toRoute, fromRoute, next) => {
  if (store.getters.isUserLoggedIn) {
    next()
  } else {
    next('/login?login-error=true')
  }
}
