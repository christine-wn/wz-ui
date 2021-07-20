import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Switch from './switch'
import './fonts/iconfont.css'

const components = [
    Button,
    Dialog,
    Input,
    Switch
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