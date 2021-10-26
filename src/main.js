import Vue from 'vue'
import App from './App'
import { Form } from 'vform'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vueHtmlEditor from 'vue-html-editor'

// Vue.use(router)

window.Form = Form
Vue.config.productionTip = false
Vue.component('vue-html-editor', vueHtmlEditor)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
