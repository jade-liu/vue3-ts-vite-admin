import { defineConfig } from 'vite'
import viteSvgIcons from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './',
  server: {
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    fs: {
      strict: false
    }
  }
})
