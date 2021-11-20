import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'vite-plugin-svg-icons/register'
import SvgIcon from '@/components/SvgIcon/index.vue'

import App from './App.vue'
import router from './router/index'
import store from './store/index'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(Antd).use(router).use(store).mount('#app')
