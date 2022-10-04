import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/InfoPersonal',
    name: 'InfoPersonal',
    component: () => import(/* webpackChunkName: "InfoPersonal" */ '../views/InfoPersonal.vue')
  },
  {
    path: '/ComidaMenu',
    name: 'ComidaMenu',
    component: () => import(/* webpackChunkName: "ComidaMenu" */ '../views/ComidaMenu.vue')
  },
  {
    path: '/EstructuraEmpresarial',
    name: 'EstructuraEmpresarial',
    component: () => import(/* webpackChunkName: "EstructuraEmpresarial" */ '../views/EstructuraEmpresarial.vue')
  },
  {
  path: '/fotos/:id',
    name: 'fotos',
    component: () => import(/* webpackChunkName: "fotos" */ '../views/FotosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
