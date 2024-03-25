<!-- MyButton.vue -->
<template>
  <button :class="buttonClasses" @click="onClick">
    <!-- 插槽用于显示按钮内容 -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'JButton',
  props: {
    // 定义 type 属性，限定可接受的值
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['success', 'primary'].includes(value);
      }
    }
  },
  methods: {
    onClick(event) {
      // 触发点击事件，可以在此处添加自定义逻辑
      this.$emit('click', event);
    }
  },
  computed: {
    // 根据 type 属性计算按钮的类名
    buttonClasses() {
      return [
        'my-button', // 基本样式类名
        `my-button--${this.type}` // 动态添加样式类名
      ];
    }
  }
};
</script>

<style scoped>
/* 样式部分，这里只是示例，请根据实际需求定义样式 */
.my-button {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.my-button--success {
  background-color: #52c41a;
  color: white;
}

.my-button--primary {
  background-color: #1890ff;
  color: white;
}

/* 添加鼠标悬停、点击等状态的样式 */
.my-button:hover {
  opacity: 0.8;
}
</style>