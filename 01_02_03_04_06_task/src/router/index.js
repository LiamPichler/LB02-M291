import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/task01',
    name: 'task01',
    component: () =>
        import('../views/Task01.vue')
  },{
    path: '/task02',
    name: 'task02',
    component: () =>
        import('../views/Task02.vue'),
    props: true
  },{
    path: '/task03',
    name: 'task03',
    component: () =>
        import('../views/Task03.vue'),
    props: true
  },{
    path: '/task06',
    name: 'task06',
    component: () =>
        import('../views/Task06.vue'),
    props: true
  }
  ,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
