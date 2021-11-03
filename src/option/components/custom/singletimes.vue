<!-- 单点时间选择器配置 -->
<template>
  <div>
    <!-- 自定义项 -->
    <el-form-item label="设为月选择">
      <avue-switch v-model="main.activeOption.type"></avue-switch>
    </el-form-item>
    <el-form-item label="删除功能">
      <avue-switch v-model="main.activeOption.clearable"></avue-switch>
    </el-form-item>
    <!-- end -->
  </div>
</template>

<script>
export default {
  inject: ["main"]
}
</script>

<style>
</style>