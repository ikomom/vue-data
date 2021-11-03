<template>
  <div :class="b()" :style="styleSizeName" >
    <el-popover
      placement="bottom"
      width="200"
      trigger="hover"
      v-if="option.dialogShow">
      <div class="dial-wrap">
        <h2>{{option.dialtitle}}</h2>
        <p><span :style="colorStyle"></span>{{option.title1}}：{{formatNum(dataChart.text)}}</p>
        <p><span></span>{{option.title2}}：{{dataChart.yoy}}</p>
        <p><span></span>{{option.title3}}：{{formatNum(dataChart.cumu)}}</p>
      </div>

      <div :style="iconStyle" slot="reference">
          <div :style="itemStyle">
              <img :style="[styleImgName]"
              :src="src"
              :class="b({'rotate': rotate})"
              draggable="false" />
          </div>
          <div>
              <div :style="titleStyle">{{option.title}}</div>
              <div :style="textStyle">{{formatNum(dataChart.text)}}</div>
          </div>
      </div>
    </el-popover>
    <div :style="iconStyle" v-else>
          <div :style="itemStyle">
              <img :style="[styleImgName]"
              :src="src"
              :class="b({'rotate': rotate})"
              draggable="false" />
          </div>
          <div>
              <div :style="titleStyle">{{option.title}}</div>
              <div :style="textStyle">{{formatNum(dataChart.text)}}</div>
          </div>
      </div>
  </div>
</template>
<script>
import create from "../../bigjs/core/echart/create";

export default create({
  name: 'iconblock',
  computed: {
    src () {
      return this.validatenull(this.option.image) ? "" : this.option.image;
    },
    iconStyle () {
      return {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start'
      }
    },
    itemStyle () {
      return {
        marginRight: this.setPx(this.option.itemMarginRight || 16)
      }
    },
    styleImgName () {
      return Object.assign(
        (() => {
          if (this.rotate) {
            return {
              animationDuration: this.duration / 1000 + "s"
            };
          }
          return {};
        })(),
        {
          width: this.setPx(this.option.imgWidth || 72),
          height: this.setPx(this.option.imgHeight || 72),
          opacity: this.option.opacity || 1
        }
      );
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
        lineHeight: this.setPx(this.option.textSize || 48)
      }
    },
    colorStyle () {
      return {
        backgroundColor: this.option.title1Color || '#1CCECD'
      }
    },
    duration () {
      return this.option.duration || 3000;
    },
    rotate () {
      return this.option.rotate;
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
    handleClick () {
      this.clickFormatter({
        data: this.dataChart
      });
    },
    formatNum (num) {
      if (num){
        return (num+'').replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (all, pre, groupOf3Digital) {
            return pre + groupOf3Digital.replace(/\d{3}/g, ',$&');
        })
      }else {
        return num
      }
        //return (num+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
    }
  }
})
</script>

<style lang="scss">
.dial-wrap{
  h2{
    font-size: 14px;
    font-weight: 600;
    color: #797F86;
  }
  p{
    font-size: 12px;
    font-weight: 400;
    color: #797F86;
    span{
      width: 8px;
      height: 8px;
      margin: 0 5px;
      display: inline-block;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
}
</style>
