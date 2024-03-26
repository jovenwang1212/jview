// examples/main.js
import Vue from 'vue'
import App from './App.vue' // 你的示例App组件

// 添加全局变量Vue，给AndyView使用
window.Vue = Vue

new Vue({
  render: h => h(App)
}).$mount('#app')
