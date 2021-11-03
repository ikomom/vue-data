<template>
  <div :class="b()"
       :style="styleSizeName">
    <div :ref="id"
         :style="styleChartName"></div>
  </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";

export default create({
  name: "bar",
  computed: {
    x2 () {
      return this.option.gridX2 || 20;
    }
  },

  methods: {
    updateChart () {
      const optionData = this.deepClone(this.dataChart);
      const option = {
        title: this.ishasprop(this.option.titleShow, {
          text: this.option.title,
          subtext: this.option.subtext || '',
          textStyle: {
            color: this.option.titleColor || '#333',
            fontSize: this.option.titleFontSize || 16
          },
          left: this.option.titlePostion || 'auto',
          subtextStyle: {
            color: this.option.subTitleColor || '#aaa',
            fontSize: this.option.subTitleFontSize || 14
          }
        }, {}),
        tooltip: this.ishasprop(this.formatter, {
          formatter: name => { return this.formatter(name, this.dataChart) }
        }, {
          trigger: 'axis',
          axisPointer: {
              type: 'cross'
          },
          backgroundColor: '#ffffff',
          borderColor: '#f2f2f2',
          borderWidth: 1,
          textStyle: {
            fontSize: this.option.tipFontSize,
            color: this.option.tipColor || "#797F86"
          }
        }),
        grid: {
          left: this.option.gridX || 20,
          top: this.option.gridY || 60,
          right: this.x2,
          bottom: this.option.gridY2 || 60
        },
        legend: {
          show: this.vaildData(this.option.legend, false),
          orient: this.option.legendOrient || "horizontal",
          x: this.option.legendPostion || "left",
          top: 0,
          right: this.x2,
          textStyle: {
              color: "#95989D",
              fontSize: this.option.legendFontSize || 12,
              padding: [1,0,0,0]
          },
          // icon: 'circle',
          itemGap: 24,
          data: (() => {
            return (optionData.categories || []).map((ele, index) => {
              return {
                name: ele,
                textStyle: this.ishasprop(!this.switchTheme, {
                  //color: "#95989D"
                  color: this.getColor(index)
                }, {})
              };
            });
          })()
        },
        xAxis: {
          type: this.option.category ? "value" : "category",
          name: this.option.xAxisName,
          offset: this.option.xOffset || 16,
          axisTick:{
		        show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              //color: this.option.lineColor || "#333"
              color: "#333"
            }
          },
          data: optionData.categories || [],
          inverse: this.vaildData(this.option.xAxisInverse, false),
          show: this.vaildData(this.option.xAxisShow, true),
          splitLine: {
            show: this.vaildData(this.option.xAxisSplitLineShow, false)
          },
          axisLabel: {
            interval: this.option.xAxisinterval || 'auto',
            rotate: this.option.xAxisRotate || 0,
            textStyle: {
              color: this.option.nameColor || "#333",
              fontSize: this.option.xNameFontSize || 14
            }
          },
        },
        yAxis: {
          type: this.option.category ? "category" : "value",
          name: this.option.yAxisName,
          data: optionData.categories || [],
          axisLabel: {
            textStyle: {
              color: this.option.nameColor || "#333",
              fontSize: this.option.yNameFontSize || 14
            }
          },
          axisTick:{
		        show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              //color: this.option.lineColor || "#333"
              color: "#333"
            }
          },
          inverse: this.vaildData(this.option.yAxisInverse, false),
          show: this.vaildData(this.option.yAxisShow, true),
          splitLine: {
            show: this.vaildData(this.option.yAxisSplitLineShow, true)
          }
        },
        series: (() => {
          const barColor = this.option.barColor || [];
          const list = (optionData.series || []).map((ele, index) => {
            return Object.assign(ele, {
              type: "bar",
              stack: ele.stack,
              barWidth: this.option.barWidth || 16,
              barMinHeight: 0,
              //barMinHeight: this.option.barMinHeight || 0,
              itemStyle: this.ishasprop(!this.switchTheme, {
                color: params => this.getColor(params.dataIndex)
              }, { barBorderRadius: this.option.barRadius || 0 }),
              label: {
                show: this.vaildData(this.option.labelShow, false), //开启显示
                position: "top", //在上方显示,
                formatter: name => this.getLabelFormatter(name),
                textStyle: {
                  //数值样式
                  fontSize: this.option.labelShowFontSize || 14,
                  color: this.option.labelShowColor || "#333",
                  fontWeight: this.option.labelShowFontWeight || 500
                }
              }
            });
          });
          return list;
        })()
      };
      this.myChart.resize();
      this.myChart.setOption(option, true);
      if(optionData.coordRange && optionData.coordRange.length > 0){
        this.myChart.dispatchAction({
            type: "brush",
            areas: [
                {
                    brushType: this.option.category ? "lineY" : "lineX",
                    coordRange: optionData.coordRange,
                    xAxisIndex: 0
                }
            ]
        });
      }
    }
  }
});

</script>
