<template>
  <a-menu model="inline" theme="dark" v-model:selectedKeys="selectedKeys">
    <a-menu-item key="1" @click="openMenu">
      <user-outlined />
      <span>创建模板</span>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts" setup>
  import { UserOutlined } from '@ant-design/icons-vue'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

  const selectedKeys = ref<string[]>(['1'])

  const router = useRouter()
  const openMenu = () => {
    router.push({ name: 'templateCustomization' })
  }
</script>
<style lang="less"></style>
