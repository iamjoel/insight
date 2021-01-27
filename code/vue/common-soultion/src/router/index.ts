import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/parent-call-child'
  },
  {
    path: '/parent-call-child',
    name: 'ParentCallChild',
    component: () => import(/* webpackChunkName: "ParentCallChild" */ '../views/ParentCallChild.vue')
  },
  {
    path: '/set-style',
    name: 'SetStyle',
    component: () => import(/* webpackChunkName: "SetStyle" */ '../views/SetStyle.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
