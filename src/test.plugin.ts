import { App } from 'vue'
import Hello from '@/components/Hello.vue'

const plugins = {
  install: (app: App) => {
    // 註冊全域方法
    // 使用 getCurrentInstance().appContext.config.globalProperties 調用
    app.config.globalProperties.$echo = () => {
      console.log('a plugin')
    }
    // 註冊全域組件
    app.component('hello', Hello)

    // 註冊全域資料, 使用 inject 取得
    app.provide('test', { message: 'from plugins' })
  }
}

export default plugins
