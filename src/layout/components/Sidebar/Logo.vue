<template>
  <div class="logo-container" @click="openLink">
    <img class="logo" src="@/assets/logo.png" />
    <div class="title" v-show="!collapsed">vue3-ts-vite-admin</div>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const collapsed = computed(() => store.getters.collapsed)

  const openLink = () => {
    window.open('https://github.com/jade-liu/vue-element-admin', '_blank')
  }
</script>
<style lang="less" scoped>
  .logo-container {
    width: 100%;
    height: 50px;
    overflow: hidden;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid rgb(83, 88, 94, 0.6);
    cursor: pointer;
    .logo {
      height: 32px;
      width: 32px;
    }
    .title {
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
    }
  }
</style>
