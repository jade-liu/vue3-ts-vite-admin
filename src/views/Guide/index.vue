<template>
  <div class="description">
    引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于
    <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
  </div>
  <a-button type="primary" @click.prevent.stop="guide">打开引导</a-button>
</template>
<script lang="ts" setup>
  import Driver from 'driver.js' // import driver.js
  import 'driver.js/dist/driver.min.css' // import driver.js css
  import { onMounted } from 'vue'

  let driver: any
  onMounted(() => {
    driver = new Driver()
  })

  const guide = () => {
    driver.defineSteps([
      {
        element: '#menu-content',
        popover: {
          title: '菜单栏',
          description: '显示系统菜单',
          position: 'right'
        }
      },
      {
        element: '#collapse-btn',
        popover: {
          title: '菜单打开/关闭',
          description: '打开系统菜单或者关闭系统菜单',
          position: 'bottom'
        }
      }
    ])
    driver.start()
  }
</script>
<style lang="less" scoped>
  .description {
    width: 100%;
    background: #f0f0f0;
    border: 1px #d9d9d9 solid;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 20px;
  }
</style>
