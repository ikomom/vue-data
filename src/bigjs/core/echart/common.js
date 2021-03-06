import { setPx, getUrlParams } from '../../utils/util';
import config from './config';
import packages from '../../core/packages';
import { bAxios } from '@/utils/baxios'
export default (() => {
  return {
    props: {
      click: Function,
      dataFormatter: Function,
      titleFormatter: Function,
      labelFormatter: Function,
      clickFormatter: Function,
      formatter: Function,
      echartFormatter: Function,
      width: {
        type: [Number, String],
        default: 600
      },
      height: {
        type: [Number, String],
        default: 600
      },
      theme: {
        type: String
      },
      animation: {
        type: Boolean,
        default: true
      },
      child: {
        type: Object,
        default: () => {
          return {};
        }
      },
      time: {
        type: Number,
        default: 0
      },
      url: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: true
      },
      dataType: {
        type: Number,
        default: 0
      },
      encrytType: {
        type: Number,
        default: 0
      },
      postType: {
        type: Number,
        default: 0
      },
      dataQuery: {
        type: Object,
        default: () => {
          return {};
        }
      },
      homeUrl: {
        type: String
      },
      dataAppend: {
        type: Boolean,
        default: false
      },
      dataMethod: {
        type: String,
        default: 'get'
      },
      id: {
        type: String,
        default: 'main_' + new Date().getTime()
      },
      data: {
        type: [Object, String, Array]
      },
      tdata: {
        type: [Object, String, Array]
      },
      component: {
        type: Object,
        default: () => {
          return {};
        }
      },
      option: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    data() {
      return {
        propQuery: {},
        dataCount: 0,
        headerHeight: '',
        checkChart: '',
        myChart: '',
        dataChart: [],
        dataUrl: '',
        key: false,
        isChart: true
      };
    },
    watch: {
      echartFormatter() {
        this.updateChart();
      },
      styleChartName() {
        this.$nextTick(() => {
          this.myChart && this.myChart.resize();
        });
      },
      url: {
        handler(val) {
          this.dataUrl = val || '';
        },
        deep: true,
        immediate: true
      },
      data: {
        handler() {
          this.updateData();
        },
        deep: true,
        immediate: true
      },
      width() {
        this.updateData();
      },
      height() {
        this.updateData();
      },
      theme() {
        // ???????????????????????????
        this.myChart.dispose();
        this.init();
        this.updateData();
      },
      option: {
        handler() {
          if (this.myChart && this.isChart) {
            this.updateData();
          }
        },
        deep: true,
        immediate: true
      }
    },
    computed: {
      dataChartLen() {
        return (this.dataChart || []).length;
      },
      switchTheme() {
        return this.vaildData(this.option.switchTheme, false);
      },
      name() {
        const result = this.$el.className.replace(config.name, '');
        return result;
      },
      minWidth() {
        const val = this.option.minWidth;
        if (val > this.width) return val;

      },
      isApi() {
        return this.dataType === 1;
      },
      style() {
        return this.component.style || {};
      },
      styleChartName() {
        const obj = {
          width: setPx(this.minWidth || this.width),
          height: setPx(this.height)
        };
        return obj;
      },
      styleSizeName() {
        return Object.assign({
          width: setPx((this.width)),
          height: setPx((this.height))
        }, (() => {
          if (this.minWidth) {
            return {
              overflowX: 'auto',
              overflowY: 'hidden'
            };
          }
          return {};
        })());
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // ??????????????????echart???
        if (!window.echarts) {
          packages.logs('echarts');
          return;
        }
        const main = this.$refs[this.id];
        if (main) {
          // ??????????????????????????????
          this.isChart = config.echart.includes(this.name);
          if (this.isChart) this.myChart = window.echarts.init(main, this.theme);
        }
      },
      updateUrl(url) {
        this.dataUrl = url;
        this.updateData();
      },
      // ????????????????????????
      updateData() {
        this.resetData && this.resetData();
        if (this.key) return;
        this.key = true;
        const callback = () => {
          this.key = false;
          // ????????????
          if (this.isApi) {
            let dataUrl = this.dataUrl.replace(config.homeurl, this.homeUrl);
            const detail = (res) => {
              // ?????????????????????
              //console.log(res)
              const result = (() => {
                if (typeof this.dataFormatter === 'function') {
                  return this.dataFormatter(res.data.data);
                }
                if(this.dataUrl.includes('.')){
                  return res.data || {};
                }else {
                  return res.data.data || {};
                }
              })();
              // ??????????????????????????????
              if (this.dataAppend) {
                result.forEach(ele => {
                  this.dataCount++;
                  setTimeout(() => {
                    this.dataChart.unshift(ele);
                  }, this.dataCount * 1500);
                });
              } else {
                this.dataChart = result;
                if(this.name == 'newtable' && this.tdata){
                  this.tdata.tableConfig = result.tableConfig
                }
                
              }
              if (this.isChart && this.myChart) {
                this.myChart.clear();
                this.updateChart();
                this.bindClick();
              }
            };
            let result = getUrlParams(dataUrl);
            let url = result.url;
            let params = Object.assign(result.params, this.dataQuery, this.propQuery);
            // console.log(params)
            let eles = {
              url: url, 
              method: this.dataMethod,
              encrytType: this.encrytType,
              postType: this.postType
            }
            bAxios(eles, params).then(res => {
              detail(res);
            })
            
          } else {
            // ????????????
            if (typeof this.dataFormatter === 'function') {
              this.dataChart = this.dataFormatter(this.data);
            } else {
              this.dataChart = this.data;
            }
            if (this.isChart && this.myChart) {
              this.myChart.clear();
              this.updateChart();
              this.bindClick();
            }
          }
        };
        this.$nextTick(() => {
          callback();
          clearInterval(this.checkChart);
          if (this.time !== 0 && this.disabled) {
            this.checkChart = setInterval(() => {
              callback();
            }, this.time);
          }
        });
      },
      getLabelFormatter(name) {
        if (this.labelFormatter) {
          return this.labelFormatter(name, this.dataChart);
        }
        return name.value; 
      },
      // ??????????????????
      bindClick() {
        this.myChart.on('click', e => {
          if (e.marker) {
            if (this.clickFormatter) {
              this.clickFormatter({
                type: this.name,
                name: e.name,
                value: e.value[2] || e.value,
                data: this.dataChart
              });
            }
          }
        });
      },
      // ???????????????chart??????????????????,?????????????????????
      getColor(index, first) {
        const barColor = this.option.barColor || [];
        if (barColor[index]) {
          const color1 = barColor[index].color1;
          const color2 = barColor[index].color2;
          const postion = (barColor[index].postion || 0.9) * 0.01;
          if (first) return color1;
          if (color2) {
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: color1 // 0% ????????????
              }, {
                offset: postion,
                color: color2 // 100% ????????????
              }],
              global: false // ????????? false
            };
          }
          return color1;
        }
      },
      ishasprop(condition, isprop, alwaysObj) {
        return Object.assign((() => {
          return condition ? isprop : {};
        })(), alwaysObj);
      }
    }
  };
})();
