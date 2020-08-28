import Vue from 'vue'
import App from './App'
import animated from 'animate.css'
Vue.use(animated)

import prefix from "@/utils/config.js"
Vue.prototype.$img_url = prefix.img_url

Vue.config.productionTip = false

import request from './utils/request.js'
Vue.prototype.$H = request

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
