<template>
</template>
<script lang="ts" setup>
import { headerDataType, itemDataType } from '@/utils/interface/templateCustomization'
const props = defineProps({
    headerList: {
        type: Array as () => headerDataType[],
        default: (): headerDataType[] => ([])
    },
    itemList: {
        type: Array as () => itemDataType[],
        default: (): itemDataType[] => ([])
    },
})
</script>