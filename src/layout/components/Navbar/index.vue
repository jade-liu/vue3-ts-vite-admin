<template>
  <div>
    <menu-unfold-outlined v-if="collapsed" @click="opSider" style="color: #333; font-size: 16px" />
    <menu-fold-outlined v-else @click="opSider" style="color: #333; font-size: 16px" />
  </div>
</template>
<script lang="ts" setup>
  import { inject } from 'vue'
  import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'

  const collapsed: any = inject('collapsed')
  const emit = defineEmits(['setSiderStatus'])

  const opSider = () => {
    emit('setSiderStatus', !collapsed.value)
  }
</script>
