<template>
    <div class="avue-echart" :style="styleSizeName">
        <el-date-picker
          v-model="values"
          :type="timeType"
          :clearable="clearable"
          :placeholder="timeData.placeholder"
          :value-format="timeData.valueFormat"
          @change="handleClick"
          ></el-date-picker>
    </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";
import { dateFormat } from "../../utils/date"

export default create({
  name: 'singletimes',
  data () {
    return {
      values: ''
    };
  },
  // watch: {
  //   dataChart: {
  //     handler (val) {
  //       if (val.length !== 0) {
  //         this.values = val.value;
  //       }
  //     },
  //     immediate: true
  //   }
  // },
  mounted() {
    if(this.option.type){
      this.values = dateFormat(new Date(), 'yyyy-MM');
    }else {
      this.values = dateFormat(new Date());
    }
    this.handleClick(this.values)
  },
  computed: {
    timeData () {
      if(this.option.type){
        return {
          placeholder: "选择月份",
          valueFormat: "yyyy-MM",
          defaultTime: ""
        }
      }else {
        return {
          placeholder: "选择时间",
          valueFormat: "yyyy-MM-dd HH:mm:ss",
        }
      }
      
    },
    timeType () {
      if(this.option.type){
        return "month"
      }else {
        return "date"
      }
    },
    clearable () {
      return this.option.clearable || false;
    }
  },
  props: {
      option: {
      type: Object,
          default: () => {
              return {};
          }
      }
  },
  methods: {
    handleClick (val) {
      this.click({
        type: 'singletimes',
        child: this.child,
        value: val
      });
    }
  }
})
</script>

<style lang="scss">
.avue-echart{
    .el-input__inner {
        background-color: #fff !important;
        color:#859094 !important;
        border-color:#eee !important;
        border-radius: 2em;
        cursor: pointer;
    }
}
</style>