<template>
  <div>
    <a-button type="primary" @click.stop="showMadal">open a Drag Modal</a-button>
    <div id="custom-modal-container" v-drag-modal class="custom-modal" v-show="visible">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </div>
  </div>
</template>
<script lang="ts">
  import DragModal from '@/directive/dragModal/index'
  import { defineComponent, ref, watch, onMounted } from 'vue'
  export default defineComponent({
    directives: {
      DragModal
    },
    setup() {
      let visible = ref(false)

      const closeModal = () => {
        visible.value = false
      }

      onMounted(() => {
        // 阻止事件冒泡
        const customModalContainer: any = document.getElementById('custom-modal-container')
        customModalContainer.addEventListener('click', (e: any) => {
          e.stopPropagation()
        })
      })

      watch(visible, (val) => {
        if (val) {
          document.body.addEventListener('click', closeModal)
        } else {
          document.body.removeEventListener('click', closeModal)
        }
      })

      const showMadal = () => {
        visible.value = true
      }

      const handleOk = () => {
        visible.value = false
      }

      return {
        visible,
        showMadal,
        handleOk
      }
    }
  })
</script>
<style lang="less" scoped>
  .custom-modal {
    position: absolute;
    width: 500px;
    height: 200px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    cursor: pointer;
  }
</style>
