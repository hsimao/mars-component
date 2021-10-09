import { App } from 'vue'
import AppHeader from './AppHeader.vue'

AppHeader.install = (app: App) => {
  app.component(AppHeader.name, AppHeader)
}

export default AppHeader
