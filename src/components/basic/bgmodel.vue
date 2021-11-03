<template>
    <div :class="b()"
         :style="styleSizeName">
        <div :style="stylebgSizeName"></div>
    </div>
</template>
<script>
import create from "../../bigjs/core/echart/create";

export default create({
  name: 'bgmodel',
  computed: {
    stylebgSizeName () {
      return {
            width: '100%',
            height: '100%',
            backgroundColor: this.option.backgroundColor || "#fff",
            borderRadius:  this.setPx(this.option.borderRadius || 4),
            borderColor: this.option.borderColor || "#fff",
            borderWidth: this.setPx(this.option.borderWidth || 0),
            borderStyle: "solid",
            boxShadow: `0 12px 20px -6px ${this.option.shadowColor || 'rgba(0,0,0,0.06)'}`
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
    
  }
})
</script>