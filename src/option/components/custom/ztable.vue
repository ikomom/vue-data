<!-- 新表格、复杂表格配置 -->
<template>
  <div>
    <!-- 自定义项 -->
    <el-form-item label="展示分页">
      <avue-switch v-model="main.activeOption.pageShow"></avue-switch>
    </el-form-item>
    <el-form-item label="每页条数">
      <avue-input-number v-model="main.activeOption.pageSize"
                        :max="200"></avue-input-number>
    </el-form-item>
    <el-form-item label="斑马纹">
      <avue-switch v-model="main.activeOption.stripe"></avue-switch>
    </el-form-item>
    <el-form-item label="展示弹层">
      <avue-switch v-model="main.activeOption.dialogShow"></avue-switch>
    </el-form-item>
    <el-form-item label="可弹列" v-if="main.activeOption.dialogShow">
      <avue-select multiple
        v-model="main.activeOption.tipsData"
        :dic="tableList"
        :props="tipProps">
      </avue-select>
    </el-form-item>
    <el-form-item label="接口地址" v-if="main.activeOption.dialogShow">
      <avue-input type="textarea"
                :min-rows="6"
                v-model="main.activeOption.requestUrl"></avue-input>
    </el-form-item>
    <el-form-item label="行参数名" v-if="main.activeOption.dialogShow">
      <avue-input v-model="main.activeOption.paramName"></avue-input>
    </el-form-item>
    <el-form-item label="接口方式"
                v-if="main.activeOption.dialogShow">
      <avue-radio v-model="main.activeOption.dataMethod"
                :dic="dicOption.dataMethod"></avue-radio>
    </el-form-item>
    <el-form-item label="加密类型" v-if="main.activeOption.dialogShow">
      <avue-radio v-model="main.activeOption.encrytType"
                  :dic="dicOption.encrytType"></avue-radio>
    </el-form-item>
    <el-form-item label="传参类型" v-if="main.activeOption.dataMethod==='post'">
      <avue-radio v-model="main.activeOption.postType"
                  :dic="dicOption.postType"></avue-radio>
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
      dicOption: dicOption,
      tipProps: {
        label: 'label',
        value: 'prop'
      },
      tbList: []
    }
  },
  computed: {
    
    //表格弹层
    tableList () {
      this.tbList = [];
      let result = [];
      let tbData = {};
      if(this.main.activeObj.dataType === 1){
        tbData = this.main.activeObj.tdata;
      }else {
        tbData = this.main.activeObj.data;
      }
      result.push(this.getTbdata(tbData.tableConfig))
      return result[0];
    },
  },
  methods: {
    getTbdata(data) {
      Object.values(data).forEach((item, index) => {
        if(item.children && item.children.length > 0) {
          this.getTbdata(item.children)
        }else {
          this.tbList.push(item)
        }
      })
      return this.tbList
    },
  }
}
</script>

<style>
</style>