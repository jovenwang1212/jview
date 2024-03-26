<template>
  <div>
    <h1>这里是示例</h1>
    <j-button type="success" @click="handleClick">andyView按钮</j-button>
    <button type="success" @click="handleClick">普通按钮</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$message.success('搞错了，再来')
    }
  }
}
</script>

<style></style>
