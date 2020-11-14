import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const AppComponent = () => import(/* webpackChunkName: "group-app" */'@/views/App.vue')
const Web = () => import(/* webpackChunkName: "group-web" */'../components/Courses/Web/WebStyleList.vue')
const Soft = () => import(/* webpackChunkName: "group-soft" */'../components/Courses/Software/SoftStyleList.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: AppComponent,
    children: [
      {
        path: '/web',
        name: 'web',
        component: Web
      },
      {
        path: '/software',
        name: 'software',
        component: Soft
      }
    ]
  }
  ]
})

export default router
