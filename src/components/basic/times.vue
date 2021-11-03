<template>
    <div class="avue-echart" :style="styleSizeName">
        <el-date-picker
          v-model="values"
          :type="timeType"
          :clearable="clearable"
          :start-placeholder="timeData.startPlaceholder"
          :end-placeholder="timeData.endPlaceholder"
          :value-format="timeData.valueFormat"
          :picker-options="pickerYear"
          @change="handleClick"
          :default-time="timeData.defaultTime"></el-date-picker>
    </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";
import { 
getMonthStartDate, 
getMonthEndDate, 
getFirstDayYear, 
gethoursDate,
dateFormat } from "../../utils/date"

export default create({
  name: 'times',
  data() {
    return{
      values: [],
      selectDate: null,
      pickerOptions: {
        disabledDate: time => {
          if (this.selectDate == null) {
            return false
          } else {
            return (this.selectDate.getFullYear() != time.getFullYear())
          }
        },
        onPick: date => {
          if (date.minDate && !date.maxDate) {
            this.selectDate = date.minDate
          } else {
            this.selectDate = null
          }
        }
      }
    }
  },
  mounted() {
    if(this.option.type){
      let startDate = getFirstDayYear(new Date(), 'yyyy-MM');
      let endDate = getMonthEndDate(new Date(), 'yyyy-MM');
      this.values = [startDate, endDate]
    }else {
      if(this.option.hour){
        let startDate = gethoursDate(new Date());
        let endDate = dateFormat(new Date());
        this.values = [startDate,endDate]
      }else {
        let startDate = getMonthStartDate(new Date());
        let endDate = dateFormat(new Date());
        this.values = [startDate,endDate]
      }
      
    }
    this.handleClick(this.values)
  },
  computed: {
    pickerYear () {
      if(this.option.crossYear){
        return this.pickerOptions
      } else {
        return ''
      }
    },
    timeData () {
      if(this.option.type){
        return {
          startPlaceholder: "开始月份",
          endPlaceholder: "结束月份",
          valueFormat: "yyyy-MM",
          defaultTime: ""
        }
      }else {
        return {
          startPlaceholder: "开始时间",
          endPlaceholder: "结束时间",
          valueFormat: "yyyy-MM-dd HH:mm:ss",
          defaultTime: ['00:00:00', '23:59:59']
        }
      }
      
    },
    timeType () {
      if(this.option.type){
        return "monthrange"
      }else {
        return "daterange"
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
      if(this.option.type){
        val = this.setMonth(val)
      }else {
        val = this.setDate(val)
      }
      this.click({
        type: 'times',
        child: this.child,
        value: val
      });
    },
    setDate(val){
      let start = val[0];
      let end = this.getCurrentDate(val[1]) + ' 23:59:59';
      return [start, end]
    },
    setMonth(val){
      let start = val[0]+ '-01 00:00:00';
      let end = this.getCurrentMonthLast(val[1]) + ' 23:59:59';
      return [start, end]
    },
    getCurrentDate (date) {
      let dateTime = new Date(date.replace(/\-/g, "/"));
      return dateFormat(dateTime, 'yyyy-MM-dd')
    },
    getCurrentMonthLast (date) {
      let endDate = new Date(date); //date 是需要传递的时间如：2018-08
      let month=endDate.getMonth();
      let nextMonth=++month;
      let nextMonthFirstDay=new Date(endDate.getFullYear(),nextMonth,1);
      let oneDay=1000*60*60*24;
      let dateString=new Date(nextMonthFirstDay-oneDay);
      let end = dateString.toLocaleDateString(); //toLocaleDateString() 返回 如：2018/8/31
      return end.replace(new RegExp('/','g'),"-"); //返回2018-8-31
    }
  }
})
</script>

<style lang="scss" >
.el-date-editor .el-range-input {
  background-color: #fff !important;
  color:#859094 !important;
  border-color: #eee !important;
  cursor: pointer;
}

</style>