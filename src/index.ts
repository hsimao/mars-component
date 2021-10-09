import EText from './components/EText'
import AppHeader from './components/AppHeader'

const components = [EText, AppHeader]

const install = (app: any) => {
  components.map(component => app.use(component))
}

export { install, EText, AppHeader }

export default {
  install
}
