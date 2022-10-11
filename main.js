import App from './App'

import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import request from '@/utils/request.js'

Vue.use(uView)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})

// 注入 vue 实例，以获取 vuex 内数据
request(app)

app.$mount()
