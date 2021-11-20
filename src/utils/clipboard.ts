import Clipboard from 'clipboard'
import { message } from 'ant-design-vue'

export function clipboard(text: string, event: any) {
  const clipboard = new Clipboard(event.target, {
    text: () => {
      return text
    }
  })
  clipboard.on('success', () => {
    message.success('Copy successfully')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    message.error('Copy failed')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
