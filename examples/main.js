import Vue from 'vue'
import App from './App.vue'
import WzUI from '../packages'

Vue.config.productionTip = false
Vue.use (WzUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
