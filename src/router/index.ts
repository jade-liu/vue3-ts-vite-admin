import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/views/Dashboard/index.vue'
import Guide from '@/views/Guide/index.vue'
import SystemIcon from '@/views/SystemIcon/index.vue'

const routerHistory = createWebHistory()

interface metaType {
  title: string
  icon: string
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { title: '工作台', icon: 'DashboardOutlined' }
  },
  {
    path: '/guide',
    name: 'guide',
    component: Guide,
    meta: { title: '系统导航', icon: 'AimOutlined' }
  },
  {
    path: '/systemIcon',
    name: 'systemIcon',
    component: SystemIcon,
    meta: { title: '系统图标', icon: 'WalletOutlined' }
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
