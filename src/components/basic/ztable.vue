<template>
    <div class="avue-echart" :style="styleSizeName">
        <el-table 
          :data="dataChart.tableData" 
          border
          :stripe="option.stripe" 
          :height="tableHeight"
          row-key="id" 
          :cell-style="cellStyle"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}" 
          style="width: 100%;"
          :header-cell-style="{background: '#f2f2f2',color: '#394046'}">
          <avue-echart-column 
            v-for="(item, index) in dataChart.tableConfig" 
            :key="index" 
            :col="item"></avue-echart-column>
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
  name: 'ztable',

  computed: {
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
    //行背景
    cellStyle({row, column, rowIndex, columnIndex}) {
      if(row.highlight){
        return "background: rgba(239,118,107,0.1);"
      }
    },
    handleClick (val) {
      
      this.click({
        type: 'ztable',
        child: this.child,
        value: val
      });
    }
  }
})
</script>
<style lang="scss">
.avue-echart{
  .el-table__header-wrapper{
    background-color: #f2f2f2 !important;
    color:#3C3F43 !important;
    font-family: 'RobotoMono';
  }
}
</style>