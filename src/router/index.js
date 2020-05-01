import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/carts',
    name:'Carts',
    component:()=>import(/* webpackChunkName: "carts" */ '../views/carts/Carts.vue'),
    meta:{
      title:'购物车',
    }
  },
  {
    path:'/showcarts',
    name:'ShowCarts',
    component:()=>import(/* webpackChunkName: "ShowCarts" */ '../views/carts/ShowCarts.vue'),
    meta:{
      title:'购物车列表展示',
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
