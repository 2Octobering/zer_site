import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import CartonPage from '../views/CartonPage.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [{
      path: 'about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }]
  },
  {
    path: '/cartonPage',
    name: 'CartonPage',
    // component: CartonPage,
    component: () => import( '../views/CartonPage.vue')
  },
  {
    path: '/login',
    name: 'index_logon',
    // component: index_logon,
    component: () => import( '../components/index_login.vue')


  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
