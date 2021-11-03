<!-- 组合文本配置 -->
<template>
  <div>
    <!-- 自定义项 -->
    <el-form-item label="展示时间">
      <avue-switch v-model="main.activeOption.timeShow"></avue-switch>
    </el-form-item>
    <el-form-item label="文字活值">
      <avue-switch v-model="main.activeOption.valueShow"></avue-switch>
    </el-form-item>
    <el-form-item label="展示左边框">
      <avue-switch v-model="main.activeOption.borderLeft"></avue-switch>
    </el-form-item>
    <el-form-item label="时间内容" v-if="main.activeOption.timeShow">
      <avue-input v-model="main.activeObj.data.time"></avue-input>
    </el-form-item>
    <el-form-item label="标题内容" v-if="main.activeOption.valueShow">
      <avue-input v-model="main.activeObj.data.value"></avue-input>
    </el-form-item>
    <el-form-item label="标题" v-else>
      <avue-input v-model="main.activeOption.name"></avue-input>
    </el-form-item>
    <el-form-item label="标题大小">
      <avue-input-number v-model="main.activeOption.nameSize"
                        :max="200"></avue-input-number>
    </el-form-item>
    <el-form-item label="标题颜色">
      <avue-input-color v-model="main.activeOption.nameColor"></avue-input-color>
    </el-form-item>
    <el-form-item label="标题粗细">
      <avue-select v-model="main.activeOption.namefontWeight"
                    :dic="dicOption.fontWeight">
      </avue-select>
    </el-form-item>
    <el-form-item label="标题对齐">
      <avue-select v-model="main.activeOption.nametextAlign"
                    :dic="dicOption.textAlign">
      </avue-select>
    </el-form-item>
    <el-form-item label="副标题">
      <avue-input v-model="main.activeOption.desc"></avue-input>
    </el-form-item>
    <el-form-item label="副标题大小">
      <avue-input-number v-model="main.activeOption.descSize"
                        :max="200"></avue-input-number>
    </el-form-item>
    <el-form-item label="副标题颜色">
      <avue-input-color v-model="main.activeOption.descColor"></avue-input-color>
    </el-form-item>
    <el-form-item label="副标题粗细">
      <avue-select v-model="main.activeOption.descfontWeight"
                    :dic="dicOption.fontWeight">
      </avue-select>
    </el-form-item>
    <el-form-item label="副标题对齐">
      <avue-select v-model="main.activeOption.desctextAlign"
                    :dic="dicOption.textAlign">
      </avue-select>
    </el-form-item>
    <el-form-item label="距离标题">
      <avue-input-number v-model="main.activeOption.descMarginTop"
                        :max="200"></avue-input-number>
    </el-form-item>
    <!-- end -->
  </div>
</template>

<script>
import { dicOption } from '@/option/config'
export default {
  inject: ["main"],
  data () {
    return {
      dicOption: dicOption
    }
  },
}
</script>

<style>
</style>