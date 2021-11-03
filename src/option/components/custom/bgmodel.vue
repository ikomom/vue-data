<!-- 背景块配置 -->
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
      <avue-slider v-model="main.activeOption.borderRadius"></avue-slider>
    </el-form-item>
    <el-form-item label="边框颜色">
      <avue-input-color v-model="main.activeOption.borderColor" :max="200"></avue-input-color>
    </el-form-item>
    <el-form-item label="边框粗细">
      <avue-input-number v-model="main.activeOption.borderWidth"></avue-input-number>
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