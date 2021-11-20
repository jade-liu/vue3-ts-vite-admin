<template>
  <!-- 按钮：添加表头 -->
  <div :style="{ margin: '10px 0' }">
    <a-button type="primary" @click="addHeaderRow">添加表头</a-button>
  </div>
  <!-- 表头列表 -->
  <a-table :columns="headerColumns" :dataSource="headerList" :pagination="false">
    <template #field="{ record }">
      <a-select
        v-model:value="record.field"
        :options="fieldOptions"
        :style="{ width: '90%' }"
        @blur="changeField(record)"
      />
    </template>
    <template #span="{ record }">
      <a-select v-model:value="record.span" :options="spanOptions" :style="{ width: '90%' }" />
    </template>
    <template #content="{ record }">
      <a-input v-model:value="record.content" />
    </template>
    <template #action="{ index }">
      <a-button type="primary" @click="deleteHeaderRow(index)">删除</a-button>
    </template>
  </a-table>
  <!-- 按钮：添加校验项目 -->
  <div :style="{ margin: '10px 0' }">
    <a-button type="primary" @click="addItemRow">添加校验项目</a-button>
  </div>
  <!-- 校验项目列表 -->
  <a-table :columns="itemColumns" :dataSource="itemList" :pagination="false">
    <template #inspectionItem="{ record }">
      <a-select
        v-model:value="record.inspectionItem"
        :options="inspectionItemSelectOptions"
        :style="{ width: '90%' }"
        @blur="changeInspectionItem(record)"
      />
    </template>
    <template #inspectionResult="{ record }">
      <a-input v-model:value="record.inspectionResult" />
    </template>
    <template #action="{ index }">
      <a-button type="primary" @click="deleteItemRow(index)">删除</a-button>
    </template>
  </a-table>
  <div>
    <span>审核人：</span>
    <a-input v-model:value="audit" />
  </div>
  <div :style="{ textAlign: 'center', marginTop: '20px' }">
    <a-button type="primary" @click="() => (visible = true)">预览</a-button>
  </div>
  <a-modal v-model:visible="visible" title="模板预览" width="100%" wrapClassName="full-modal" @ok="handleOk">
    <Preview v-if="visible" :headerList="headerList" :itemList="itemList" :audit="audit" />
  </a-modal>
</template>
<script lang="ts" setup>
  import { ref, reactive, computed } from 'vue'
  import {
    headerDataType,
    fieldSelectType,
    spanSelectType,
    itemDataType,
    inspectionItemSelectType
  } from '@/utils/interface/templateCustomization'
  import Preview from './Preview.vue'

  // 表头列表列设置
  const headerColumns = reactive([
    {
      title: '字段',
      dataIndex: 'field',
      key: 'field',
      slots: { customRender: 'field' },
      align: 'center',
      width: 300
    },
    {
      title: '占位格数',
      dataIndex: 'span',
      key: 'span',
      slots: { customRender: 'span' },
      align: 'center',
      width: 300
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      slots: { customRender: 'content' },
      align: 'center',
      width: 300
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      slots: { customRender: 'action' },
      align: 'center',
      width: 300
    }
  ])

  // 表头列表数据
  const headerList = reactive<headerDataType[]>([
    { key: 1, label: '产品名称', field: 'productName', span: 24, content: '抗氧化剂 RIANOX 245' },
    { key: 2, label: 'CAS登录号', field: 'account', span: 24, content: '36443-68-2' },
    { key: 3, label: '批号', field: 'batch', span: 24, content: 'sh' },
    { key: 4, label: '生产日期', field: 'productionDate', span: 12, content: 'May 05, 2021' },
    { key: 5, label: '校验日期', field: 'validateDate', span: 12, content: 'May 05, 2021' },
    { key: 6, label: '数量', field: 'amount', span: 24, content: '1000kg' }
  ])

  // 表头字段下拉框选项
  const fieldOptions = reactive<fieldSelectType[]>([
    { label: '产品名称', value: 'productName' },
    { label: 'CAS登录号', value: 'account' },
    { label: '批号', value: 'batch' },
    { label: '生产日期', value: 'productionDate' },
    { label: '校验日期', value: 'validateDate' },
    { label: '数量', value: 'amount' }
  ])

  // 表头占位符下拉框选项
  const spanOptions = reactive<spanSelectType[]>([
    { label: '半行', value: 12 },
    { label: '整行', value: 24 }
  ])

  // 表头列表条数
  const headerCount = computed(() => headerList.length + 1)

  // 表头列表新增行
  const addHeaderRow = () => {
    headerList.push({
      key: headerCount.value,
      label: '',
      field: '',
      span: 24,
      content: ''
    })
  }

  // 表头列表删除行
  const deleteHeaderRow = (index: number) => {
    headerList.splice(index, 1)
  }

  // 表头列表修改字段
  const changeField = (record: headerDataType) => {
    const item = fieldOptions.find((item) => item.value == record.field)
    record.label = item ? item.label : ''
  }

  // 项目列表列设置
  const itemColumns = reactive([
    {
      title: '检验项目',
      dataIndex: 'inspectionItem',
      key: 'inspectionItem',
      slots: { customRender: 'inspectionItem' },
      align: 'center',
      width: 300
    },
    {
      title: '规格指标',
      dataIndex: 'indicator',
      key: 'indicator',
      align: 'center',
      width: 300
    },
    {
      title: '检验结果',
      dataIndex: 'inspectionResult',
      key: 'inspectionResult',
      slots: { customRender: 'inspectionResult' },
      align: 'center',
      width: 300
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      slots: { customRender: 'action' },
      align: 'center',
      width: 300
    }
  ])

  // 项目列表数据
  const itemList = reactive<itemDataType[]>([
    {
      key: 1,
      inspectionItem: 'Appearance',
      inspectionItemName: '外观',
      indicator: '白色～类白色粉末',
      inspectionResult: '白色粉末'
    },
    {
      key: 2,
      inspectionItem: 'Melting point',
      inspectionItemName: '熔点',
      indicator: '77.0~81.0',
      inspectionResult: '78.6~79.6'
    },
    {
      key: 3,
      inspectionItem: 'Volatiles',
      inspectionItemName: '挥发分，%',
      indicator: '0.50max',
      inspectionResult: '0.09'
    },
    {
      key: 4,
      inspectionItem: 'Ash',
      inspectionItemName: '灰分，%',
      indicator: '0.10max',
      inspectionResult: '0.01'
    },
    {
      key: 5,
      inspectionItem: 'Transmittance',
      inspectionItemName: '透光率 425nm，%',
      indicator: '95.0min',
      inspectionResult: '99.7'
    },
    {
      key: 6,
      inspectionItem: 'Clarity of solution',
      inspectionItemName: '溶清性',
      indicator: '澄清透明',
      inspectionResult: '澄清透明'
    },
    {
      key: 7,
      inspectionItem: 'Assay',
      inspectionItemName: '含量，%',
      indicator: '96.0min',
      inspectionResult: '99.1'
    }
  ])

  // 项目校验下拉框选项
  const inspectionItemSelectOptions = reactive<inspectionItemSelectType[]>([
    { value: 'Appearance', label: '外观', indicator: '白色～类白色粉末' },
    { value: 'Melting point', label: '熔点', indicator: '77.0~81.0' },
    { value: 'Volatiles', label: '挥发分，%', indicator: '0.50max' },
    { value: 'Ash', label: '灰分，%', indicator: '0.10max' },
    { value: 'Transmittance', label: '透光率 425nm，%', indicator: '95.0min' },
    { value: 'Clarity of solution', label: '溶清性', indicator: '澄清透明' },
    { value: 'Assay', label: '含量，%', indicator: '96.0min' }
  ])

  // 项目列表条数
  const listCount = computed(() => itemList.length + 1)

  // 项目列表新增行
  const addItemRow = () => {
    itemList.push({
      key: listCount.value,
      inspectionItem: '',
      inspectionItemName: '',
      indicator: '',
      inspectionResult: ''
    })
  }

  // 项目列表删除行
  const deleteItemRow = (index: number) => {
    itemList.splice(index, 1)
  }

  // 项目列表修改项目校验
  const changeInspectionItem = (record: itemDataType) => {
    const item = inspectionItemSelectOptions.find((item) => item.value == record.inspectionItem)
    record.indicator = item ? item.indicator : ''
    record.inspectionItemName = item ? item.label : ''
  }

  const audit = ref<string>()

  const visible = ref<boolean>(false)

  const handleOk = () => {
    visible.value = false
  }
</script>
<style lang="less">
  .full-modal {
    .ant-modal {
      max-width: 100%;
      top: 0;
      padding-bottom: 0;
      margin: 0;
    }
    .ant-modal-content {
      display: flex;
      flex-direction: column;
      height: calc(100vh);
    }
    .ant-modal-body {
      flex: 1;
    }
  }
</style>
