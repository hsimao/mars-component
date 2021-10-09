import { createApp } from 'vue'
import App from './App.vue'
import testPlugin from './test.plugin'
// 全部引入
import allPlugin from './index'
// 單一引入
// import { EText, AppHeader } from './index'

const app = createApp(App)

app.use(allPlugin)

// app.use(AppHeader as any)
// app.use(EText as any)

app.use(testPlugin).mount('#app')
