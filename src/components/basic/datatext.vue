<template>
    <div :class="b()"
         :style="styleSizeName">
        <div :class="b('box')">
            <div :style="styleNameSize">{{option.name}}</div>
            <div :style="styleDescSize">{{dataChart.value}}</div>
        </div>
    </div>
</template>
<script>
import create from "../../bigjs/core/echart/create";

export default create({
  name: 'text',
  computed: {
    styleNameSize () {
      return {
            width: '100%',
            color: this.option.nameColor || '#333',
            fontSize: this.setPx(this.option.nameSize || 12),
            textAlign: this.option.nametextAlign,
            fontWeight: this.option.namefontWeight || "normal",
        }
    },
    styleDescSize () {
        return {
            width: '100%',
            color: this.option.descColor || '#333',
            fontSize: this.setPx(this.option.descSize || 24),
            fontFamily: 'HelveticaNeue',
            textAlign: this.option.desctextAlign,
            // fontWeight: this.option.descfontWeight || "normal",
            marginTop: this.setPx(this.option.descMarginTop || 10)
        }
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
    }
  }
})
</script>