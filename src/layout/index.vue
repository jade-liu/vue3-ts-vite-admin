<template>
  <a-layout class="layout-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed">
      <Sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-custom-trigger">
        <Navbar @setSiderStatus="setSiderStatus" />
      </a-layout-header>
      <a-layout-content class="content-custom-trigger" :style="{ height: contentHeight }">
        <AppMain />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
  import { ref, provide, computed } from 'vue'
  import Sidebar from './components/sidebar/index.vue'
  import Navbar from './components/Navbar/index.vue'
  import AppMain from './components/AppMain.vue'

  const contentHeight = computed(() => `${document.body.clientHeight - 52}px`)

  const collapsed = ref(true)
  provide('collapsed', collapsed)
  const setSiderStatus = (e: any) => (collapsed.value = e)
</script>
<style lang="less" scoped>
  .layout-custom-trigger {
    height: 100vh;
    overflow: auto;
  }
  .header-custom-trigger {
    background: #fff;
    padding: 0 20px;
    line-height: 50px;
    height: 50px;
  }
  .content-custom-trigger {
    padding: 20px 16px;
    overflow: auto;
  }
</style>
