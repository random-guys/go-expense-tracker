import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import SignupPage from '../views/SignupPage'
import TrackerPage from '../views/TrackerPage'
import Result from '../views/Result'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign-up-page',
      name: 'sign-up-page',
      component: SignupPage
    },
    {
      path: '/tracker-page',
      name: 'tracker-page',
      component: TrackerPage
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
