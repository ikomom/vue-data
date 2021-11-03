<!-- 桑基图配置 -->
<template>
  <div>
    <!-- 自定义项 -->
    <el-form-item label="文字颜色">
      <avue-input-color v-model="main.activeOption.labelColor" :max="200"></avue-input-color>
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