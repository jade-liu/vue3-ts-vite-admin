<template>
  <div>
    <menu-unfold-outlined v-if="collapsed" @click="openSider" style="color: #333; font-size: 16px" />
    <menu-fold-outlined v-else @click="closeSider" style="color: #333; font-size: 16px" />
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'

  const store = useStore()
  const collapsed = computed(() => store.getters.collapsed)

  const openSider = () => {
    store.dispatch('openSidebar')
  }

  const closeSider = () => {
    store.dispatch('closeSidebar')
  }
</script>
