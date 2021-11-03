<template>
    <div class="avue-echart" :style="styleSizeName">
        <el-input
          v-model="dataChart.value"
          :placeholder="option.placeholder"
          @change="handleClick(dataChart.value)"
          ></el-input>
    </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";

export default create({
  name: 'search',
  computed: {
    
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
        type: 'search',
        child: this.child,
        value: val
      });
    }
  }
})
</script>

<style lang="scss">

</style>