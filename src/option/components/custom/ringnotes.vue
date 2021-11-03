<!-- 空便签块配置 -->
<template>
  <div>
    <!-- 自定义项 -->
    <el-form-item label="背景颜色">
      <avue-input-color v-model="main.activeOption.backgroundColor" :max="200"></avue-input-color>
    </el-form-item>
    <el-form-item label="阴影颜色">
      <avue-input-color v-model="main.activeOption.shadowColor" :max="200"></avue-input-color>
    </el-form-item>
    <el-form-item label="圆角度">
      <avue-input-number v-model="main.activeOption.borderRadius"></avue-input-number>
    </el-form-item>
    <el-form-item label="上边间距">
      <avue-input-number v-model="main.activeOption.paddingTop"></avue-input-number>
    </el-form-item>
    <el-form-item label="左边间距">
      <avue-input-number v-model="main.activeOption.paddingLeft"></avue-input-number>
    </el-form-item>
    <el-form-item label="标题颜色">
      <avue-input-color v-model="main.activeOption.titleColor" :max="200"></avue-input-color>
    </el-form-item>
    <el-form-item label="副标题颜色">
      <avue-input-color v-model="main.activeOption.subtitleColor" :max="200"></avue-input-color>
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