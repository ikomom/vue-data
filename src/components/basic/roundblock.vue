<template>
  <div :class="b()" :style="styleSizeName" >
    <div :style="itemStyle">
        <div :style="roundStyle"></div>
        <div :style="titleStyle">{{option.title}}</div>
    </div>
    <div :style="textStyle">{{dataChart.text}}</div>
  </div>
</template>
<script>
import create from "../../bigjs/core/echart/create";

export default create({
  name: 'iconblock',
  computed: {
    itemStyle () {
      return {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start'
      }
    },
    roundStyle () {
        return {
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: this.option.backgroundColor || "#409EF7",
            marginRight: this.setPx(this.option.roundRight || 8),
            marginTop: '3px'
        }
        
    },
    titleStyle () {
      return {
        fontSize: this.setPx(this.option.titleSize || 16),
        color: this.option.titleColor || "#797F86",
        height: '25px',
        lineHeight: '18px'
      }
    },
    textStyle () {
      return {
        fontFamily: 'HelveticaNeue',
        fontSize: this.setPx(this.option.textSize || 48),
        color: this.option.textColor || "#3C3F43",
        lineHeight: this.setPx(this.option.textSize || 48),
        // fontWeight: 'bold'
      }
    },
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
    handleClick () {
      this.clickFormatter({
        data: this.dataChart
      });
    }
  }
})
</script>
