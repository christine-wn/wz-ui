import Button from './button'
import Dialog from './dialog'

const components = [
    Button,
    Dialog
  ]
const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
      })
    
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }

export default {
    install
}