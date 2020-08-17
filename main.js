import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import request from './utils/request.js'
Vue.prototype.$H = request

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
