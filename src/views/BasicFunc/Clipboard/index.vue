<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="directly" tab="use clipboard directly">
      <a-input v-model:value="inputData" placeholder="Please Copy" :style="{ width: '500px', marginRight: '10px' }" />
      <a-button type="primary" @click="handleCopy(inputData, $event)">Copy</a-button>
    </a-tab-pane>
    <a-tab-pane key="v-directive" tab="use clipboard by v-directive" force-render>
      <a-input v-model:value="inputData" placeholder="Please Copy" :style="{ width: '500px', marginRight: '10px' }" />
      <a-button type="primary" v-clipboard:copy="inputData" v-clipboard:success="clipboardSuccess">Copy</a-button>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts">
  import { ref } from 'vue'
  import Clipboard from '@/directive/clipboard/index'
  export default {
    directives: {
      Clipboard
    },
    setup() {
      const activeKey = ref<string>('directly')
      const inputData = ref<string>('https://github.com/jade-liu/vue3-ts-vite-admin.git')
      const handleCopy = (text: string, event: any) => {
        console.log('text', text, event)
      }
      const clipboardSuccess = () => {}

      return {
        activeKey,
        inputData,
        handleCopy,
        clipboardSuccess
      }
    }
  }
</script>
