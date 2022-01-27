<template>
  <div class="demo">
    <a-table id="mytb" :dataSource="dataSource" :columns="columns" />
  </div>
</template>
<script lang="ts">
  import { data, columns } from './helper'
  import { onMounted } from '@vue/runtime-core'
  import Sortable from 'sortablejs'
  import { message } from 'ant-design-vue'
  import { ref } from 'vue'
  export default {
    setup() {
      const dataSource = ref([])

      // 更新列表接口
      const syncdataSource = async () => {
        const res = await Promise.resolve(data)
        dataSource.value = res
      }

      //初始化表格拖动
      const initSortable = () => {
        const mytb = document.querySelector('#mytb tbody')
        new Sortable(mytb, {
          handle: '.ant-table-row',
          animation: 150,
          ghostClass: 'blue-background-class',
          sort: true,
          async onEnd({ newIndex, oldIndex }) {
            const source = dataSource.value[oldIndex] // 谁
            const destination = dataSource.value[newIndex] // 移动到哪儿
            // 拖动后同步至stata
            dataSource.value[newIndex] = source
            dataSource.value[oldIndex] = destination
            message.success('排序完成')

            // // 执行接口更新拖动后的接口
            // const parmas = {
            //   sourceId: source.id, //源话术id
            //   destinationId: destination.id, //目的话术id
            // };
            // try {
            //   const res = await api.sort(parmas);
            //   if (res.code === 0) {
            //     message.success(`移动成功`);
            //   } else {
            //     message.error(`移动失败`);
            //   }
            // } catch (e) {
            //   message.error(`移动失败`);
            // } finally {
            //   syncdataSource();
            // }
          }
        })
      }

      onMounted(() => {
        syncdataSource()
        initSortable()
      })

      return { dataSource, columns }
    }
  }
</script>
<style scoped lang="less">
  .demo {
    width: 800px;
    margin: auto;
    margin-top: 20px;
  }
</style>
