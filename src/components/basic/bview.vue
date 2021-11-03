<template>
  <div class="build">
    <div class="content"
         :ref="'content'+configId">
      <div class="container"
           :style="styleName">
        <div v-for="item in list"
         :key="item.index"
         >
      <avue-draggable v-if="!item.children"
                      v-bind="item"
                      disabled
                      :width="item.component.width"
                      :height="item.component.height"
                      :scale="stepScale"
                      :step="stepScale"
                      :ref="common.DEAFNAME+item.index"
                      :id="common.DEAFNAME+item.index"
                      v-show="!item.display"
                      >
        <component :ref="common.NAME+item.index"
                   :id="common.NAME+item.index"
                   :is="common.COMPNAME+item.component.name"
                   v-bind="item"
                   :data-formatter="getFunction(item.dataFormatter)"
                   :width="item.component.width"
                   :height="item.component.height"
                   animation
                   disabled
                   :scale="stepScale"
                   :option="item.option"
                   :home-url="config.url"
                   :data-query="getJson(item.dataQuery)"
                   :click="handleClick" />
      </avue-draggable>
    </div>

      </div>
    </div>
  </div>
</template>

<script>
import { config } from '@/option/config'
import common from '@/config'
import { addUrlParam, debounce, merfeArray } from '@/utils/utils'
import { getObj } from '@/api/visual'
import { bAxios } from '@/utils/baxios'
export default {
  name: 'bview',
  props: {
    data: {
      type: [Object, String, Array]
    },
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data () {
    return {
      scale: 1,
      config: config,
      common: common,
      obj: {},
      configId: '',
      visual: {},
      list: [],
      tParams: {},
      allParams: {},
      tid: '',
      indexList: [],
      idList: ['1254962325949304833', '1255420260080996354', '1265191687889932289'],
      dataInit: false
    }
  },
  watch: {
    data: {
      handler(val) {
        //console.log(val)
        if(this.configId !== val.value && val.value.length > 0){
          this.dataInit = false;
          this.initData(val);
        }else {
          this.handleRefresh(val);
        }
      },
      deep: true,
      immediate: true
    },
  },
  computed: {
    stepScale () {
      let scale = Number(((1 / this.scale) * 100).toFixed(2));
      return scale
    },
    //计算中央可视化大屏比例
    styleName () {
      const scale = this.config.scale;
      return Object.assign({
        //transform: `scale(${scale / 100}, ${scale / 100})`,
        //width: this.setPx(this.config.width),
        width: '100%',
        height: '100%',
        // height: this.setPx(this.config.height),
        backgroundColor: this.config.backgroundColor
      }, (() => {
        if(this.config.backgroundColor){
          return
        }else if (this.config.backgroundImage) {
          return {
            background: `url(${this.config.backgroundImage}) 0% 0% / 100% 100%`,
          }
        }
        
        return
      })())
    },
  },
  mounted () {
    //this.initData();
  },
  methods: {
    //初始化数据
    initData (val) {
      //console.log(val)
      this.configId = val.value;
      //this.contentWidth = this.$refs[`content${this.configId}`].offsetWidth;
      const isBuild = this.$route.path == 'build';
      const width = isBuild ? this.contentWidth : document.body.clientWidth
      if (this.configId !== '') {
        const loading = this.$loading({
          lock: true,
          text: '正在加载中，请稍后',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0)'
        });
        getObj(this.configId).then(res => {
          const callback = () => {
            //赋值属性
            this.config = JSON.parse(config.detail) || {};
            let bviewData = JSON.parse(config.component.replace(/&gt;/g,'>').replace(/&amp;/g,'&')) || [];
            bviewData.forEach((item, index) => {
              if (!item.url) return;
              item.dataQuery = JSON.stringify(val.params);
              // if (item.url) {
              //   for (let i in val.params){
              //     item.url = addUrlParam(item.url, i, val.params[i]);
              //   }
              // }
            })
            this.list = bviewData;
            this.list.forEach((item) => {
              if(item.option && item.option.dialogShow){
                item.option.pas = JSON.stringify(val.params);
              }
            })
            //this.list = JSON.parse(config.component.replace(/&gt;/g,'>')) || [];
            this.calcData();
            this.setScale(width);
          }
          const data = res.data.data;
          this.obj = data;
          const config = data.config;
          this.visual = data.visual;
          
          //添加水印。只有查看页面生效
          if (!isBuild) {
            if (this.config.mark.show) {
              this.watermark(this.config.mark);
            }
            const password = this.visual.password
            if (!this.validatenull(password)) {
              this.$prompt('请输入密码', '提示', {
                confirmButtonText: '确定',
                showCancelButton: false,
                showClose: false,
                closeOnClickModal: false,
                inputPattern: new RegExp(password),
                inputErrorMessage: '密码不正确，请重新输入'
              }).then(() => {
                callback();
              })
            } else {
              callback();
            }

          } else {
            callback();
          }
          this.dataRefresh(val);
          loading.close();
          
        }).catch((err) => {
          console.log(err)
          loading.close();
        })
      } else {
        this.setScale(width);
      }
    },
    //适配尺寸
    setResize () {
      // this.$nextTick(() => {
      //   this.$refs[`content${this.configId}`].style.width = this.setPx((this.config.scale * this.config.width) / 100)
      //   this.$refs[`content${this.configId}`].style.height = this.setPx((this.config.scale * this.config.height) / 100)
      // })
    },
    //计算比例
    setScale (width) {
      this.$nextTick(() => {
        this.config.scale = (width / this.config.width) * 100
        this.scale = this.config.scale;
        this.setResize();
      })
    },
    
    calcData () {
      if (!this.config.mark) this.config.mark = {}
      if (!this.config.query) this.config.query = {}
      if (!this.config.interInfo) this.config.interInfo = []
      if (!this.config.interData) this.config.interData = []
    },
    

    getJson (str) {
      if (!this.validatenull(str)) return JSON.parse(str);

    },
    getFunction (fun) {
      if (!this.validatenull(fun)) return eval(fun);
    },
    findlist (index) {
      return this.list.find(ele => ele.index == index) || {}
    },
    /** 动态数据加载 */
    blistData (indexList) {
      indexList.forEach(index => {
        const item = this.findlist(index);
        
        if (item.name == 'bview') {
          item.data.value = this.tid;
          item.data.params = this.allParams;
        }else {
          if (!item.url) return;
          if(item.option.dialogShow){
            item.option.pas = JSON.stringify(this.allParams);
            // console.log(this.allParams)
          }
          item.dataQuery = JSON.stringify(this.allParams);
          this.$refs[this.common.NAME + index].forEach(ele => {
            ele.updateData();
          })
        }
      })
    },
    /** 赋值数据加载 */
    activeKeyData (params) {
      let config = this.config;
      if (config.interInfo.length > 0) {
        config.interInfo.forEach(ele => {
          bAxios(ele, params).then(res => {
            config.interData[ele.key] = res.data.data;
            this.list.forEach(item => {
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
    /** 防抖数据配置 */
    subFresh:debounce(function (blist, activeKey) {
      if(this.dataInit) {
        this.blistData(blist);
        this.activeKeyData(activeKey);
      }else {
        // this.activeKeyData(activeKey);
        this.dataInit = true;
      }
      
    }),
    handleClick ({ type, child, value }) {
      //console.log(type)
      this.indexList = merfeArray(this.indexList, child.index)
      let params = {}
      let aparams = {}; 
      let blist = {}; 
      let activeKey = {};
      if(type === 'cut') {
        params = value.params;
        this.tid = value.id || '';
        aparams = Object.assign(this.tParams, params);
        this.allParams = Object.assign({}, this.allParams, aparams, this.data.params, params);
        let indexList = child.index;
        
        indexList.forEach((index) => {
          const item = this.findlist(index);
          if(item.name === 'bview'){
            if(value.id){
              item.data.value = value.id;
            }
            item.data.params = this.allParams;
          }
        })
      }else if(type === 'tabs') {
        params = value.params;
        this.tid = value.id || '';
        aparams = Object.assign(this.tParams, params);
        this.allParams = Object.assign({}, this.allParams, aparams, this.data.params, params);
        if(child.paramName == 'cc'){
          let indexList = child.index;
          indexList.forEach((index) => {
            const item = this.findlist(index);
            if(item.name === 'bview'){
              if(value.id){
                item.data.value = value.id;
              }
              item.data.params = this.allParams;
            }
          })
        }
        
      }else if(type === 'times') {
        params['startTime'] = value[0];
        params['endTime'] = value[1];
        this.tParams = params;
        this.allParams = Object.assign({}, this.allParams, this.data.params, params);
      }else if(type === 'singletimes' || type === 'search') {
        params[child.paramName] = value;
        this.tParams = params;
        this.allParams = Object.assign({}, this.allParams, this.data.params, params);
      }else if(type === 'ztable' || type === 'newtable') {
        params[child.paramName] = value;
        params['size'] = 10;
        this.indexList = child.index;
        this.allParams = Object.assign({}, this.allParams, this.data.params, params);
      }else if(type === 'select') {
        params[child.paramName] = value;
        this.indexList = child.index;
        this.allParams = Object.assign({}, this.allParams, this.data.params, params);
      }
      if(!this.idList.includes(this.configId)){
        this.subFresh(this.indexList, this.allParams);
      }  
      
    },
    //刷新大屏数据
    dataRefresh (val) {
      //主屏数据加载
      if(this.config.interInfo.length > 0){
        this.config.interInfo.forEach(ele => {
          bAxios(ele, val.params).then(res => {
            this.config.interData[ele.key] = res.data.data;
            this.list.forEach((item) => {
              
              if(item.dataType === 2 && item.component.prop !== 'tabs'){
                let assign = this.config.interData;
                if(item.assignment){
                  item.assignment.forEach(res => {
                    if(assign[res]){
                      assign = assign[res]
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
    //刷新数据
    handleRefresh (val, tip = true) {
      
      if(this.config.interInfo.length > 0) {
        this.dataRefresh(val)
      }
      
      if(this.list.length > 0){
        this.list.forEach(item => {
          if(item.name === 'bview'){
            item.data.params = Object.assign({}, item.data.params, this.data.params, val.params);
          }else {
            if(item.dataType === 1){
              this.allParams = Object.assign({}, item.data.params, this.data.params, val.params)
              if (!item.url) return;
              
              item.dataQuery = JSON.stringify(this.allParams);
              this.$refs[this.common.NAME + item.index].forEach(ele => {
                ele.updateData();
              })
              // if (item.url) {
              //   for (let i in val.params){
              //     item.url = addUrlParam(item.url, i, val.params[i]);
              //   }
                
              //   this.$refs[this.common.NAME + item.index].forEach(ele => {
              //     ele.updateData();
              //   })
              // }
            }
          }
        })
       
      }
      // if (tip) {
      //   this.$message.success('刷新成功')
      // }
    },
    //获取对象
    handleGetObj (val) {
      return this.$refs[`${this.common.DEAFNAME}${val}`];
    },
    handleFocus ({ index }) {
      this.container.gradeFlag = true;
      if (this.contain.keys.ctrl) {
        if (!Array.isArray(this.contain.active)) {
          this.contain.handleInitActive();
        }
        this.contain.active.push(index);
      } else {
        if (!this.contain.active.includes(index)) {
          this.contain.active = [index];
        }
      }
    },
    handleBlur ({ left, top, width, height }) {
      this.container.gradeFlag = false;
      this.$set(this.contain.activeObj.component, 'width', width)
      this.$set(this.contain.activeObj.component, 'height', height)
      this.$set(this.contain.activeObj, 'left', left)
      this.$set(this.contain.activeObj, 'top', top)
    },
  }
}
</script>
<style lang="scss">
@import "@/styles/style.scss";
</style>