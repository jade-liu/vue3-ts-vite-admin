import { createStore } from 'vuex'
import getters from './getters'

//因为我把模块拆分了，但是我又不想每次都导入，就通过这个自动导入modules目录下的模块，vite通过import引入
const modulesFiles: any = import.meta.globEager('./module/*.ts')
const modules: { [key: string]: any } = {}
for (const modulePath in modulesFiles) {
  const moduleName = modulePath.replace(/^\.\/\w+\/(.*)\.\w+$/, '$1')
  const value = modulesFiles[modulePath]
  modules[moduleName] = value.default
}

// 调用createStore
export default createStore({
  getters,
  modules
})
