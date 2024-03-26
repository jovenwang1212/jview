import Button from './components/button'
import Input from './components/input'
import Message from './components/message'
// ... 更多组件的导入

// 假设有这样一个包含所有组件对象的集合
const components = [
  Button,
  Input,
  // ... 其他组件
]

// 定义一个 Vue 插件
const install = function (Vue) {
  // 遍历组件集合，将每个组件全局注册
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
  // 可能还有其他的全局注册操作，例如指令、过滤器等
}

window.Vue.use({install})

// 导出插件
export default {
  version: '1.0.0',
  ...components
}
