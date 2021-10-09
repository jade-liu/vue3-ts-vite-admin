import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TemplateCustomization from '@/views/TemplateCustomization/index.vue'

const routerHistory = createWebHistory()

const routes: Array<RouteRecordRaw> = [
  {
    path: '/templateCustomization',
    name: 'templateCustomization',
    component: TemplateCustomization
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
