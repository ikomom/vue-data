<template>
    <div :class="b()" :style="styleSizeName">
        <el-table 
          :data="datas"
          border
          :stripe="option.stripe" 
          :height="tableHeight"
          row-key="id" 
          :cell-style="cellStyle"
          lazy
          :load="load"
          :header-cell-style="{background:'#eee'}"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}" 
          style="width: 100%;"
          v-if="option.dialogShow"
          >
          <avue-echart-bcolumn 
            v-for="(item, index) in configsData" 
            :key="index" 
            :col="item"
            :req="option.requestUrl"
            :meth="option.dataMethod"
            :param-name="option.paramName"
            :pas="option.pas"
            :encryt-type="option.encrytType"
            :post-type="option.postType"
            :tip="option.tipsData"
            ></avue-echart-bcolumn>
          
        </el-table>
        <el-table 
          :data="datas"
          border
          :stripe="option.stripe" 
          :height="tableHeight"
          row-key="id" 
          :cell-style="cellStyle"
          lazy
          :load="load"
          :header-cell-style="{background:'#eee'}"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}" 
          style="width: 100%;"
          v-else
          >
          <avue-echart-column 
            v-for="(item, index) in dataChart.tableConfig" 
            :key="index" 
            :col="item"
            ></avue-echart-column>
        </el-table>

        <div :style="stylePagination" v-if="option.pageShow">
          <el-pagination
            @current-change="handleClick"
            @prev-click="handleClick"
            @next-click="handleClick"
            :current-page="dataChart.current"
            :page-size="dataChart.size"
            layout="prev, pager, next"
            :total="dataChart.total">
          </el-pagination>
        </div>
    </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";

export default create({
  name: 'newtable',
  data () {
    return{
      mapData: {},
    }
  },
  computed: {
    requs () {
      return this.option.requestUrl
    },
    meth () {
      return this.option.method
    },
    configsData(){
      const cigData = this.deepClone(this.dataChart.tableConfig) || [];
      cigData.forEach(ele => {
        ele.tipshow = true;
      })
      return cigData
    },
    datas(){
      const optionData = this.deepClone(this.dataChart.tableData) || [];
      this.setMapData(optionData)
      optionData.forEach(ele => {
        if(ele.children && ele.children.length > 0){
          ele.hasChildren = true;
          ele.children = [];
        }
      })
      return optionData
    },
    stylePagination () {
      return {
          marginTop: this.setPx(this.option.marginTop || 10),
          marginRight: this.setPx(this.option.marginRight || 20),
          height: this.setPx(this.option.height || 50),
          textAlign: 'right'
        }
    },
    tableHeight () {
      if(this.option.pageShow){
        return this.height - this.option.marginTop - this.option.height;
      }else {
        return this.height;
      }
    }
  },
  methods: {
    eachData(data){
      
        data.forEach(ele => {
            if(ele.children && ele.children.length > 0){
                ele.hasChildren = true;
                ele.children = [];
            }
        })
        return data
    },
    setMapData(data){
      data.forEach(ele => {
        let objectData = {};
        objectData[ele.id] = ele.children;
        Object.assign(this.mapData, objectData)
        if(ele.children && ele.children.length > 0){
          this.setMapData(ele.children)
        }
      })
     
    },
    //行背景
    cellStyle({row, column, rowIndex, columnIndex}) {
      if(row.highlight){
        return "background: rgba(239,118,107,0.1);"
      }
    },
    load(tree, treeNode, resolve){
      let resData = this.eachData(this.mapData[tree.id]);
      setTimeout(() => {
          resolve(resData)
      }, 500)
    },
    handleClick (val) {
      
      this.click({
        type: 'newtable',
        child: this.child,
        value: val
      });
    }
  }
})
</script>

<style lang="scss">
.newtable{
  .el-table__header-wrapper{
    background-color: #f2f2f2 !important;
    color:#3C3F43 !important;
    font-family: 'RobotoMono';
  }

}
</style>