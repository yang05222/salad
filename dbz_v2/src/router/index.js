import Vue from 'vue'
import VueRouter from 'vue-router'
// import Heyui from 'heyui'
import Index from '../views/Index.vue'
// import Table from '../components/Table'
Vue.use(VueRouter)
// Vue.use(Heyui)
const routes = [
  // {
  //   path:'/table',
  //   component:Table
  // },
  {
    path: '/',
    name: 'Index',
    component: Index
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
