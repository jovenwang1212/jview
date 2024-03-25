// examples/main.js
import Vue from 'vue'
import App from './App.vue' // 你的示例App组件
import jview from 'jview' // 引入组件库入口文件

// 全局注册组件库中的所有组件
Vue.use(jview)

new Vue({
  render: h => h(App)
}).$mount('#app')
