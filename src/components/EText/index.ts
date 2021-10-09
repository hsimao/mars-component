import { App } from 'vue'
import EText from './EText.vue'

EText.install = (app: App) => {
  app.component(EText.name, EText)
}

export default EText
