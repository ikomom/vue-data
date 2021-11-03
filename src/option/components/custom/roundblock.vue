<!-- 圆点块配置 -->
<template>
  <div>
    <!-- 自定义项 -->
    <el-form-item label="圆点颜色">
      <avue-input-color v-model="main.activeOption.backgroundColor" :max="200"></avue-input-color>
    </el-form-item>
    <el-form-item label="圆点右间距">
      <avue-input-number v-model="main.activeOption.roundRight"></avue-input-number>
    </el-form-item>
    <el-form-item label="标题">
      <avue-input v-model="main.activeOption.title"></avue-input>
    </el-form-item>
    <el-form-item label="标题大小">
      <avue-input-number v-model="main.activeOption.titleSize"></avue-input-number>
    </el-form-item>
    <el-form-item label="标题颜色">
      <avue-input-color v-model="main.activeOption.titleColor" :max="200"></avue-input-color>
    </el-form-item>
    <el-form-item label="副标题大小">
      <avue-input-number v-model="main.activeOption.textSize"></avue-input-number>
    </el-form-item>
    <el-form-item label="副标题颜色">
      <avue-input-color v-model="main.activeOption.textColor" :max="200"></avue-input-color>
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