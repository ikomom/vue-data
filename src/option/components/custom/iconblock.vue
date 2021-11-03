<!-- 图标块配置 -->
<template>
  <div>
    <!-- 自定义项 -->
    <el-form-item label="开启旋转">
      <avue-switch v-model="main.activeOption.rotate"></avue-switch>
    </el-form-item>
    <el-form-item label="开启弹层">
      <avue-switch v-model="main.activeOption.dialogShow"></avue-switch>
    </el-form-item>
    <el-form-item label="弹层标题" v-show="main.activeOption.dialogShow">
      <avue-input v-model="main.activeOption.dialtitle"></avue-input>
    </el-form-item>
    <el-form-item label="弹层内容1" v-show="main.activeOption.dialogShow">
      <avue-input v-model="main.activeOption.title1"></avue-input>
    </el-form-item>
    <el-form-item label="弹层icon颜色">
      <avue-input-color v-model="main.activeOption.title1Color" :max="200"></avue-input-color>
    </el-form-item>
    <el-form-item label="弹层内容2" v-show="main.activeOption.dialogShow">
      <avue-input v-model="main.activeOption.title2"></avue-input>
    </el-form-item>
    <el-form-item label="弹层内容3" v-show="main.activeOption.dialogShow">
      <avue-input v-model="main.activeOption.title3"></avue-input>
    </el-form-item>
    <el-form-item label="透明度">
    <el-slider v-model="main.activeOption.opacity"
                :max="1"
                :step="0.1"></el-slider>
    </el-form-item>
    <template v-if="main.activeOption.rotate">
    <el-form-item label="旋转时间">
        <avue-input-number v-model="main.activeOption.duration"></avue-input-number>
    </el-form-item>
    </template>
    <el-form-item label="图片地址">
    <img v-if="main.activeOption.image"
            :src="main.activeOption.image"
            alt=""
            width="100%" />
    <el-input v-model="main.activeOption.image">
        <div @click="main.handleOpenImg('activeOption.image', 'icon')"
            slot="append">
        <i class="iconfont icon-img"></i>
        </div>
    </el-input>
    </el-form-item>
    <el-form-item label="图标宽">
      <avue-input-number v-model="main.activeOption.imgWidth"></avue-input-number>
    </el-form-item>
    <el-form-item label="图标高">
      <avue-input-number v-model="main.activeOption.imgHeight"></avue-input-number>
    </el-form-item>
    <el-form-item label="图文间距">
      <avue-input-number v-model="main.activeOption.itemMarginRight"></avue-input-number>
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