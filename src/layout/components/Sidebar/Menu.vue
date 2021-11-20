<template>
  <a-menu model="inline" theme="dark" v-model:selectedKeys="selectedKeys">
    <a-menu-item v-for="item in routes" :key="item.name">
      <router-link :to="item.path">
        <Icon :icon="item.meta && item.meta.icon" />
        <span>{{ item.meta && item.meta.title }}</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts" setup>
  import { Icon } from '@/components/Icon/index'
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'

  const routes = computed(() => useRouter().options.routes)
  const selectedKeys = computed(() => [useRouter().currentRoute.value.name])
</script>
