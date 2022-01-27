import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/views/BasicFunc/Dashboard/index.vue'
import Guide from '@/views/BasicFunc/Guide/index.vue'
import SystemIcon from '@/views/BasicFunc/SystemIcon/index.vue'
import Clipboard from '@/views/BasicFunc/Clipboard/index.vue'
import DragModal from '@/views/BasicFunc/DragModal/index.vue'
import DragTable from '@/views/BasicFunc/DragTable/index.vue'

const routerHistory = createWebHistory()

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
  },
  {
    path: '/clipboard',
    name: 'clipboard',
    component: Clipboard,
    meta: { title: 'Clipboard', icon: 'CopyOutlined' }
  },
  {
    path: '/dragModal',
    name: 'dragModal',
    component: DragModal,
    meta: { title: 'DragModal', icon: 'DragOutlined' }
  },
  {
    path: '/dragTable',
    name: 'dragTable',
    component: DragTable,
    meta: { title: 'DragTable', icon: 'DragOutlined' }
  }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
