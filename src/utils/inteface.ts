import { ColumnProps } from 'ant-design-vue/es/table/interface';

type Key = ColumnProps['key']

// 表头字段
export interface headerDataType {
    key: Key
    field: string
    label: string
    span: number
    content: string
}

export interface fieldSelectType {
    label: string
    value: string
}

export interface spanSelectType {
    label: string
    value: number
}

// 校验项目
export interface itemDataType {
    key: Key
    inspectionItem: string
    inspectionItemName: string
    indicator: string
    inspectionResult: string
}

export interface inspectionItemSelectType {
    label: string
    value: string
    indicator: string
}
