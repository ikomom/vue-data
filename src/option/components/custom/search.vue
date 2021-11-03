<!-- 自定义配置 -->
<template>
  <div>
    <el-form-item label="占位字符">
      <avue-input v-model="main.activeOption.placeholder"></avue-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  inject: ["main"]
}
</script>

<style>
</style>