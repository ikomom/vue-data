<template>
  <div :class="b()"
       :style="styleSizeName"
       ref="main">
    <div v-if="isShow" :style="styleChartName" @click="handleClick(dataChart[1].value, isShow)"></div>
    <div v-else :style="styleTableName" @click="handleClick(dataChart[0].value, isShow)"></div>
  </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";
export default create({
  name: "tabs",
  data () {
    return {
      active: "",
      isShow: true
    };
  },
  watch: {
    active (val) {
      if (!val) return;
      this.handleClick(val);
    },
    dataChart: {
      handler (val) {
        if (val.length !== 0) {
          this.active = val[0].value;
        }
      },
      immediate: true
    }
  },
  computed: {
    type () {
      return this.option.type;
    },
    styleChartName () {
      return Object.assign(
        {
          backgroundImage: `url(${this.option.chartImage || '/img/cut/cut1.png'})`,
          backgroundSize: "100% 100%"
        },
        this.styleSizeName
      );
    },
    styleTableName () {
      return Object.assign(
        {
            backgroundImage: `url(${this.option.tableImage || '/img/cut/cut2.png'})`,
            backgroundSize: "100% 100%"
        },
        this.styleSizeName
      );
    },
    
  },
  created () { },
  mounted () { },
  methods: {
    handleClick (val, show) {
      //this.active = val;
      if(show){
          this.isShow = false
      }else {
          this.isShow = true
      }
      this.click({
        type: this.type,
        child: this.child,
        value: val
      });
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
});
</script>

<style lang="scss">

</style>