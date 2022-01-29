<template>
  <div class="card-container">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="svg" tab="svg">
        <div class="grid">
          <div
            class="icons"
            v-for="icon in svgIcons"
            :key="icon"
            @click="handleClipboard(generateIconCode(icon), $event)"
          >
            <div class="icon-item">
              <svg-icon :icon-class="icon" />
              <div class="icon-item-text">{{ icon }}</div>
            </div>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="antd" tab="antd">
        <div class="grid">
          <div
            class="icons"
            v-for="icon in antDesignIcons"
            :key="icon"
            @click="handleClipboard(generateAntDIconCode(icon), $event)"
          >
            <div class="icon-item">
              <Icon :icon="icon" />
              <div class="icon-item-text">{{ icon }}</div>
            </div>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts" setup>
  import * as AntDesignIcon from '@ant-design/icons-vue'
  import { Icon } from '@/components/Icon/index'
  import { clipboard } from '@/utils/clipboard'
  import { ref } from 'vue'

  const activeKey = ref('svg')

  const svgIcons: any = []
  const icons: any = import.meta.globEager('../../../icons/*.svg')
  for (const icon in icons) {
    const iconName = icon.replace(/^\.\.\/\.\.\/\.\.\/\w+\/(.*)\.\w+$/, '$1')
    svgIcons.push(iconName)
  }

  const antDesignIcons: any = []
  for (const icon in AntDesignIcon) {
    if (
      icon !== 'createFromIconfontCN' &&
      icon !== 'default' &&
      icon !== 'getTwoToneColor' &&
      icon !== 'setTwoToneColor'
    ) {
      antDesignIcons.push(icon)
    }
  }

  const generateIconCode = (symbol: any) => {
    return `<svg-icon icon-class="${symbol}" />`
  }
  const generateAntDIconCode = (symbol: any) => {
    return `<i class="el-icon-${symbol}" />`
  }
  const handleClipboard = (text: string, event: any) => {
    clipboard(text, event)
  }
</script>

<style>
  .card-container {
    margin: 0;
  }
  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  .icons {
    cursor: pointer;
  }
  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 150px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
    pointer-events: none;
  }
  .icon-item-text {
    font-size: 14px;
    word-break: break-all;
  }
</style>
