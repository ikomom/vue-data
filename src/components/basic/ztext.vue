<template>
    <div :class="b()"
         :style="styleSizeName">
        <div :class="b('box')">
            <div v-if="option.valueShow" :style="styleNameSize">
                {{dataChart.value}}
                <span v-show="option.timeShow">({{dataChart.time}})</span>    
            </div>
            <div v-else :style="styleNameSize">
                {{option.name}}
                <span v-show="option.timeShow">({{dataChart.time}})</span>
            </div>
            
            <div :style="styleDescSize">{{option.desc}}</div>
            
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
            fontFamily: 'RobotoMono',
            color: this.option.nameColor || '#333',
            fontSize: this.setPx(this.option.nameSize || 24),
            textAlign: this.option.nametextAlign,
            fontWeight: this.option.namefontWeight || "normal",
            borderLeft: this.option.borderLeft ? '8px solid #3c90fb' : '',
            paddingLeft: this.option.borderLeft ? '10px' : ''
        }
    },
    styleDescSize () {
        return {
            width: '100%',
            color: this.option.descColor || '#333',
            fontSize: this.setPx(this.option.descSize || 12),
            textAlign: this.option.desctextAlign,
            fontWeight: this.option.descfontWeight || "normal",
            borderLeft: this.option.borderLeft ? '8px solid transparent' : '',
            paddingLeft: this.option.borderLeft ? '10px' : '',
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
    
  }
})
</script>