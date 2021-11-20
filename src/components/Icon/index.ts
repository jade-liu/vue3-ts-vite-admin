import { createVNode } from 'vue'
import * as $Icon from '@ant-design/icons-vue'

export const Icon = (props: { icon: any }) => {
  const { icon } = props
  return createVNode($Icon[icon])
}
