<template>
  <div class="app-main">
    <router-view />
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
  .app-main {
    padding: 20px;
    background: #fff;
    min-height: calc(100vh - 90px);
  }
</style>
