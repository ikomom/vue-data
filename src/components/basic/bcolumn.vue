<template>
  <el-table-column :prop="col.prop"
    :label="col.label"
    :align="col.align"
    :width="col.width"
    >
    <template slot-scope="scope" >
      <el-popover
        placement="bottom"
        v-if="tip.includes(col.prop) && (''+scope.row[scope.column.property]).indexOf('%') == -1"
        trigger="click">
      <div v-if="gridData.tableData">
        <div class="gray-ttl" v-show="titleData">{{titleData}}</div>
        <el-table :data="gridData.tableData" >
          <el-table-column
            v-for="(item,index) in gridData.tableConfig"
            :key="index"
            :prop="item.prop"
            :label="item.label"
          ></el-table-column>
        </el-table>
      </div>  
      
      <div v-else style="text-align: center;">正在加载...</div>
      <span slot="reference" 
        @click="showDialog(scope, col.gray)" 
        :style="colorStyle(col.gray, scope.row.riseHighlightProps, scope.row.declineHighlightProps, col.prop)"
        >{{ scope.row[col.prop]}}</span>
      </el-popover>
      <span v-else 
        :style="colorStyle(col.gray, scope.row.riseHighlightProps, scope.row.declineHighlightProps, col.prop)"
        >{{ scope.row[col.prop]}}</span>
    </template>
    
      <template v-if="col.children && col.children.length > 0">
          <avue-echart-bcolumn v-for="(item, index) in col.children"
              :key="index"
              :col="item"
              :req="req"
              :meth="meth"
              :param-name="paramName"
              :pas="pas"
              :encryt-type="option.encrytType"
              :post-type="option.postType"
              :tip="tip"></avue-echart-bcolumn>
      </template>
  </el-table-column>
</template>
<script>
import create from "../../bigjs/core/echart/create";
import { getUrlParams } from '../../bigjs/utils/util';
import { bAxios } from '@/utils/baxios'
export default create({
  name: 'column',
  computed: {

  },
  data() {
    return {
      gridData: {},
      popShow: false,
      titleData: false,
      percent: 0
    }
  },
  props: {
    col: {
      type: Object
    },
    req: String,
    meth: String,
    paramName: String,
    pas: String,
    encrytType: {
      type: Number,
        default: () => {
            return 1;
        }
    },
    postType: Number,
    tip: Array
  },
  methods: {
    // labelHead: function(h, { column, $index }) {
    //   let l = column.label.length
    //   let f = 16
    //   column.minWidth = f * (l + 2)//加上一个文字长度
    //   return h('div', { class: 'table-head', style: { width: '100%' } }, [column.label])
    // },
    showDialog(scope, isShow){
      //this.col.tipshow = true;
      this.percent = (''+scope.row[scope.column.property]).indexOf('%')
      if(this.tip.includes(this.col.prop+'') && !isShow && this.percent == -1){
        let paa = new Object();
        paa['primaryName'] = this.paramName;
        paa['primaryValue'] = scope.row[this.paramName];
        paa['itemName'] = scope.column.property;
        paa['itemValue'] = scope.row[scope.column.property];
        let result = getUrlParams(this.req);
        let url = result.url;
        let upas = {};
        if(this.pas){
          upas = JSON.parse(this.pas)
        }
        let params = Object.assign(result.params, paa, upas);
        let eles = {
          url: url, 
          method: this.dataMethod,
          encrytType: this.encrytType,
          postType: this.postType
        }
        bAxios(eles, params).then(res => {
          //console.log(res.data.data)
          this.gridData = res.data.data.content;
          if(res.data.data.primaryValue === '电价版本'){
            this.titleData = res.data.data.itemValue;
          }
        })
        // let params = Object.assign(result.params, paa, upas);
        // this.$axios[this.meth](url, (() => {
        //   if (this.meth === 'get') {
        //     return {
        //         params: params
        //     };
        //   } else if (this.meth === 'post') {
        //     return params;
        //   }
        // })()).then(res => {
        //     this.gridData = res.data.data.content;
        //     if(res.data.data.primaryValue === '电价版本'){
        //       this.titleData = res.data.data.itemValue;
        //     }
            
        //     //this.col.tipshow = false
        // });
      }
      
    },
    colorStyle(gray, redData, greenData, item) {
      if(gray){
        return {
          color: '#CBCCCD'
        }
      }else if (redData && redData.length > 0 && redData.includes(item)){
        return {
          color: '#E65463'
        }
      }else if (greenData && greenData.length > 0 && greenData.includes(item)) {
        return {
          color: '#29D68B'
        }
      }else {
        return {
          color: '#3C3F43'
        }
      }
    }
  }
})
</script>
<style lang="scss">
.tablefont{
  font-family: 'RobotoMono';
}
.gray-ttl{
  padding-bottom: 16px;
  color: #394046;
  font-size: 12px;
}
</style>