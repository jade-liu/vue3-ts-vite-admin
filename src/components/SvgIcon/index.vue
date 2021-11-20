<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :href="iconName" :fill="color" />
  </svg>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  const props = defineProps({
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#24292e'
    }
  })

  const iconName = computed(() => `#icon-${props.iconClass}`)

  const svgClass = computed(() => {
    if (props.className) {
      return 'svg-icon ' + props.className
    } else {
      return 'svg-icon'
    }
  })
</script>
<style lang="less" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
