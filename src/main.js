import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './components'
import './style/reset.css'
import './style/common.scss'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
