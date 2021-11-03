<template>
  <div>
    <div v-for="item in nav"
         :key="item.index"
         @contextmenu.prevent="contain.handleContextMenu && contain.handleContextMenu($event,item)">
      <avue-draggable v-if="!item.children"
                      v-bind="item"
                      :scale="container.stepScale"
                      :disabled="!contain.menuFlag"
                      :step="container.stepScale"
                      :width="item.component.width"
                      :height="item.component.height"
                      :ref="common.DEAFNAME+item.index"
                      :id="common.DEAFNAME+item.index"
                      :active-flag="contain.active.includes(item.index)"
                      v-show="!item.display"
                      @over="handleOver"
                      @focus="handleFocus"
                      @blur="handleBlur">
        <component :ref="common.NAME+item.index"
                   :id="common.NAME+item.index"
                   :is="common.COMPNAME+item.component.name"
                   v-bind="item"
                   :data-formatter="getFunction(item.dataFormatter)"
                   :click-formatter="getFunction(item.clickFormatter,true)"
                   :echart-formatter="getFunction(item.echartFormatter)"
                   :label-formatter="getFunction(item.labelFormatter)"
                   :formatter="getFunction(item.formatter)"
                   :width="item.component.width"
                   :data-query="getJson(item.dataQuery)"
                   :height="item.component.height"
                   :animation="!contain.menuFlag"
                   :theme="(item.option || {}).theme"
                   :disabled="!contain.menuFlag"
                   :scale="container.stepScale"
                   :option="item.option"
                   :home-url="contain.config.url"
                   title=""
                   :click="handleClick" />
      </avue-draggable>
      <subgroup :nav="item.children"></subgroup>
    </div>
  </div>
</template>

<script>
import { addUrlParam, debounce, merfeArray } from '@/utils/utils'
import common from '@/config'
import { bAxios } from '@/utils/baxios'
export default {
  name: 'subgroup',
  inject: ["contain", 'container'],
  provide () {
    return {
      contain: this.contain,
      container: this.container
    };
  },
  props: {
    nav: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      common: common,
      /* 新添项 */
      tParams: {},
      allParams: {},
      tid: '',
      indexList: [],
      idList: ['1254962325949304833', '1255420260080996354', '1265191687889932289'],
      /* 新添项end */
    }
  },
  methods: {
    getFunction (fun, def) {
      if (!this.validatenull(fun)) {
        try {
          return eval(fun);
        } catch {
          return () => { }
        }
      }
      if (def) return () => { }
    },
    getJson (str) {
      if (this.validatenull(str)) return {};
      if (typeof str == "string") {
        try {
          return JSON.parse(str);
        } catch {
          return {}
        }
      }
      return str;
    },
    /** 动态数据加载新添项 */
    blistData (indexList) {
      indexList.forEach(index => {
        const item = this.contain.findlist(index);
        if (item.name == 'bview') {
          item.data.value = this.tid;
          item.data.params = this.allParams;
        }else {
          if (!item.url) return;
          if(item.option.dialogShow){
            item.option.pas = JSON.stringify(this.allParams);
          }
          item.dataQuery = JSON.stringify(this.allParams);
          this.$refs[this.common.NAME + index].forEach(ele => {
            ele.updateData();
          })
        }
      })
    },
    /** 赋值数据加载新添项 */
    activeKeyData (params) {
      let config = this.contain.config;
      if (config.interInfo.length > 0) {
        config.interInfo.forEach(ele => {
          bAxios(ele, params).then(res => {
            config.interData[ele.key] = res.data.data;
            this.contain.list.forEach(item => {
              if (item.dataType === 2 && item.component.prop !== 'tabs') {
                let assign = config.interData;
                if (item.assignment) {
                  item.assignment.forEach(re => {
                    if (assign[re]){
                      assign = assign[re]
                    }
                  })
                  item.data = assign;
                }
                this.$refs[this.common.NAME + item.index].forEach(ele => {
                  ele.updateData();
                })
              }
            })
          })
        })
      }
    },
    /** 防抖数据配置新添项 */
    subFresh:debounce(function (blist, activeKey) {
      this.blistData(blist);
      this.activeKeyData(activeKey);
    }),
    /** 点击事件交互新添项  */
    handleClick ({ type, child, value }) {
      this.indexList = merfeArray(this.indexList, child.index)
      let params = {}
      let aparams = {}; 
      let blist = {}; 
      let activeKey = {};
      if(type === 'cut') {
        let indexList = child.index;
        indexList.forEach((index) => {
          const item = this.contain.findlist(index);
          if(item.name === 'bview'){
            if(value.id){
              item.data.value = value.id;
            }
          }
        })
      }else if(type === 'tabs' || type === 'cut') {
        if(child.paramName == 'cc'){
          let indexList = child.index;
          indexList.forEach((index) => {
            const item = this.contain.findlist(index);
            if(item.name === 'bview'){
              if(value.id){
                item.data.value = value.id;
              }
              item.data.params = Object.assign(value.params, {});
            }
          })
        }
        params = value.params;
        this.tid = value.id || '';
        aparams = Object.assign(this.tParams, params);
        this.allParams = Object.assign({}, this.allParams, aparams, params);
      }else if(type === 'times') {
        params['startTime'] = value[0];
        params['endTime'] = value[1];
        this.tParams = params;
        this.allParams = Object.assign({}, this.allParams, params);
      }else if(type === 'singletimes' || type === 'search') {
        params[child.paramName] = value;
        this.tParams = params;
        this.allParams = Object.assign({}, this.allParams, params);
      }else if(type === 'ztable' || type === 'newtable') {
        params[child.paramName] = value;
        params['size'] = 10;
        this.indexList = child.index;
        this.allParams = Object.assign({}, this.allParams, params);
      }else if(type === 'select') {
        params[child.paramName] = value;
        this.indexList = child.index;
        this.allParams = Object.assign({}, this.allParams, params);
      }

      if(!this.idList.includes(this.contain.id)){
        this.subFresh(this.indexList, this.allParams);
      }  
    },
    //点击事件交互
    // handleClick ({ type, child, value }) {
    //   if (type === 'tabs') {
    //     const indexList = child.index;
    //     indexList.forEach((index) => {
    //       const paramName = child.paramName;
    //       const item = this.contain.findlist(index);
    //       if (!item.url) return
    //       let params = {};
    //       if (item.dataQuery) {
    //         params = this.getJson(item.dataQuery)
    //       } else {
    //         params = {}
    //       }
    //       params[paramName] = value;
    //       item.dataQuery = JSON.stringify(params);
    //       this.$refs[this.common.NAME + index].forEach(ele => {
    //         ele.updateData();
    //       })
    //     })
    //   }
    // },
    /** 刷新数据新添项 */
    handleRefresh (tip = true) {
      if(JSON.stringify(this.contain.activeObj)==="{}"){
        this.contain.activeKey.forEach(ele => {
          bAxios(ele, {}).then(res => {
            this.contain.config.interData[ele.key] = res.data.data;
            this.contain.list.forEach((item) => {
              if(item.dataType === 2){
                let assign = this.contain.config.interData;
                if(item.assignment){
                  item.assignment.forEach(res => {
                    if(assign[res]){
                      assign = assign[res]
                    }
                  })
                  item.data = assign;
                }
              }
            })
          })
        })
      }else {
        this.$refs[this.common.NAME + this.contain.activeObj.index][0].updateData();
      }
      if (tip) {
        this.$message.success('刷新成功')
      }
    },
    //刷新数据
    // handleRefresh (tip = true) {
    //   console.log(this.common.NAME)
    //   console.log(this.$refs[this.common.NAME + this.contain.activeObj.index][0])
    //   this.$refs[this.common.NAME + this.contain.activeObj.index][0].updateData();
    //   if (tip) {
    //     this.$message.success('刷新成功')
    //   }
    // },
    //获取对象
    handleGetObj (val) {
      return this.$refs[`${this.common.DEAFNAME}${val}`];
    },
    handleOver ({ index }) {
      this.contain.overactive = index;
    },
    handleFocus ({ index }) {
      this.container.gradeFlag = true;
      if (this.contain.keys.ctrl) {
        if (!Array.isArray(this.contain.active)) {
          this.contain.handleInitActive();
        }
        this.contain.active.push(index);
      } else if (!this.contain.active.includes(index)) {
        this.contain.active = [index];
      }
    },
    handleBlur ({ left, top, width, height }) {
      if (Array.isArray(this.contain.activeObj)) return
      this.container.gradeFlag = false;
      this.$set(this.contain.activeObj.component, 'width', width)
      this.$set(this.contain.activeObj.component, 'height', height)
      this.$set(this.contain.activeObj, 'left', left)
      this.$set(this.contain.activeObj, 'top', top)
    },
  }
}
</script>

<style>
</style>