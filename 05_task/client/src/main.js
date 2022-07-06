import Vue from 'vue'

//Demos_06
import App from './App-06.vue'
import store from './store/06_mutations'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
