<!-- 便签块配置 -->
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
    <el-form-item label="模式切换">
      <avue-switch v-model="main.activeOption.mode"></avue-switch>
    </el-form-item>
    <el-form-item label="展示进度条" v-if="main.activeOption.mode === false">
      <avue-switch v-model="main.activeOption.showProgress"></avue-switch>
    </el-form-item>
    <el-form-item label="进度条小文" v-if="main.activeOption.showProgress">
      <avue-input v-model="main.activeOption.progressName"></avue-input>
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