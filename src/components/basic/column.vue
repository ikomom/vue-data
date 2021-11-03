<template>
  <el-table-column :prop="col.prop"
    :label="col.label"
    :align="col.align"
    :width="col.width"
    
    >
    <template slot-scope="scope">
      <span class="tablefont" 
            :style="colorStyle(col.gray, scope.row.riseHighlightProps, scope.row.declineHighlightProps, col.prop)"
            >{{ scope.row[col.prop]}}</span>
    </template>
      <template v-if="col.children && col.children.length > 0">
          <avue-echart-column v-for="(item, index) in col.children"
              :key="index"
              :col="item"></avue-echart-column>
      </template>
  </el-table-column>
</template>
<script>
import create from "../../bigjs/core/echart/create";

export default create({
  name: 'column',
  computed: {

  },
  data() {
    return {

    }
  },
  props: {
    col: {
      type: Object
    },
  },
  methods: {
    // labelHead: function(h, { column, $index }) {
    //   let l = column.label.length
    //   let f = 16
    //   column.minWidth = f * (l + 2)//加上一个文字长度
    //   return h('div', { class: 'table-head', style: { width: '100%' } }, [column.label])
    // },
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
</style>