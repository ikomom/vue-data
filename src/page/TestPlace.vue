<template>
  <div class="place-container">
    <div class="left">left</div>
    <div class="center" ref="center">
<!--      <SketchRule-->
<!--        :thick="thick"-->
<!--        :scale="scale"-->
<!--        :width="width"-->
<!--        :height="height"-->
<!--        :startX="startX"-->
<!--        :startY="startY"-->
<!--        :isShowReferLine="isShowReferLine"-->
<!--        :shadow="shadow"-->
<!--        :horLineArr="lines.h"-->
<!--        :verLineArr="lines.v"-->
<!--      />-->
<!--      <div-->
<!--        class="screen"-->
<!--        ref='screensRef'-->
<!--        @scroll="handleScroll"-->
<!--        @wheel="handleWheel"-->
<!--      >-->
<!--        &lt;!&ndash;          @handleLine="handleLine"-->
<!--                  @onCornerClick="handleCornerClick"&ndash;&gt;-->
<!--        <div class="screen-container" ref="containerRef">-->
<!--          <div-->
<!--            class="canvas"-->
<!--            ref="canvas"-->
<!--            :style="canvasStyle"-->
<!--          ></div>-->
<!--        </div>-->
<!--      </div>-->
      <sketch-rule-wrap/>
    </div>
    <div class="right">right</div>
  </div>
</template>

<script>
import SketchRule from "vue-sketch-ruler";
import SketchRuleWrap from "@/components/ruler/SketchRuleWrap";

export default {
  name: "TestPlace",
  data() {
    return {
      scale: 2, //初始化标尺的缩放
      startX: 0, //x轴标尺开始的坐标数值
      startY: 0,
      lines: {   //初始化水平标尺上的参考线
        h: [],
        v: []
      },
      rendIndex: 0,//重新渲染组件
      shadow: {x: 0, y: 0}, // 阴影大小
      thick: 20,  //标尺的厚度
      width: 0,  // 标尺宽,后面会初始化
      height: 0,// 标尺高,后面会初始化
      isShowReferLine: true, // 显示参考线
    }
  },
  components: {
    SketchRuleWrap,
    SketchRule
  },
  computed: {
    /* 标尺用的 */
    palette() {
      return {
        // bgColor: '#181b24', // ruler bg color
        // longfgColor: '#BABBBC', // ruler longer mark color
        // shortfgColor: '#9C9C9C', // ruler shorter mark color
        // fontColor: '#DEDEDE', // ruler font color
        // shadowColor: '#525252', // ruler shadow color
        // lineColor: '#EB5648',
        // borderColor: '#B5B5B5',
        // cornerActiveColor: '#fff',
      }
    },
    // 画布大小,一定要是computer里面,否则缩放页面会失效
    canvasStyle() {
      return {
        width: window.innerWidth - 530 + 'px',
        transform: `scale(${this.scale})`
      }
    }
  },
  created() {
    this.iniresize()
  },
  mounted() {
    this.initSize()
  },
  methods: {
    initSize() {
      const domW = this.$refs.center
      let width = window.innerWidth - 530
      let height = window.innerHeight
      domW.style.width = width + 'px'
      domW.style.height = height + 'px'
      this.width = width - this.thick;
      this.height = height - this.thick;
      // 画布阴影部分
      this.shadow = {x: 0, y: 0, width, height}
      // 滚动居中
      // let dom = this.$refs.containerRef.getBoundingClientRect()
      // this.$refs.screensRef.scrollLeft = dom.width / 2 - this.thick;
      // this.$refs.screensRef.scrollTop = dom.height / 2 - this.thick;
    },
    // resize
    iniresize () {
      window.addEventListener('resize', () => {
        let width = this.width
        let height = this.height
        this.initSize();
        let rate = Math.min(this.width / width, this.height / height)
        this.scale = rate > 1 ? rate * 0.5 : rate
        this.rendIndex++
      })
    },
    // 控制缩放值
    handleWheel(e) {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        this.scale = parseFloat(
          Math.max(0.2, this.scale - e.deltaY / 500).toFixed(2)
        );
      }
      this.$nextTick(() => {
        this.handleScroll();
      });
    },
    handleScroll() {
      const screensRect = this.$refs.screensRef.getBoundingClientRect();
      const canvasRect = this.$refs.canvas.getBoundingClientRect();
      // 标尺开始的刻度
      const startX = (screensRect.left + this.thick - canvasRect.left) / this.scale;
      const startY = (screensRect.top + this.thick - canvasRect.top) / this.scale;
      this.startX = startX >> 0;
      this.startY = startY >> 0;
    }
  }
}
</script>

<style scoped lang="scss">
::-webkit-scrollbar {
  width: unset;
  height: unset;
}

.place-container {
  background: #fff;
  width: 100%;
  height: calc(100%);
  display: flex;
  box-sizing: border-box;

  .left, .right {
    width: 180px;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    background: #00baff;
  }

  .center {
    flex: 1;
    position: relative;
    overflow: hidden;

    .screen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;

      .screen-container {
        position: relative;
        width: 5000px;
        height: 3000px;
        //background: #00a680;
        //background: url(https://img.alicdn.com/tfs/TB184VLcPfguuRjSspkXXXchpXa-14-14.png) repeat;
      }
    }
  }

}
</style>
