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
  name: "pictorialbar",
  methods: {
    setSubstr (value){
      if(typeof value === 'string'){
        if(value.includes('%')){
          return value.substr(0, value.length-1)
        }
      }
    },
    updateChart () {
      const optionData = [];
      optionData.push(this.deepClone(this.dataChart))
      // const optionData = this.deepClone(this.dataChart);
      
      const symbol = this.validatenull(this.option.symbol)
        ? ""
        : "image://" + this.option.symbol;
      const color = this.option.color || "#fff";
      const fontSize = this.option.fontSize || 20;
      var maxData = 100;
      const option = {
        color: ['#000', '#ccc'],
        tooltip: (() => {
          return Object.assign(
            (() => {
              if (this.formatter) {
                console.log(1)
                return {
                  formatter: name => { return this.formatter(name, this.dataChart) }
                };
              }
              return {};
            })(),
            {
              backgroundColor: '#ffffff',
              borderColor: '#f2f2f2',
              borderWidth: 1,
              textStyle: {
                fontSize: this.option.tipFontSize,
                color: this.option.tipColor || "#797F86"
              }
            }
          );
        })(),
        xAxis: {
          show: this.vaildData(this.option.xAxisShow, true),
          data: (() => {
            //return optionData.name
            return optionData.map(ele => {
              return ele.name;
            });
          })(),
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: this.option.nameColor || "#333",
              fontSize: this.option.xNameFontSize || 14
            }
          }
        },
        yAxis: {
          max: maxData,
          show: this.vaildData(this.option.yAxisShow, true),
          inverse: false,
          offset: 10,
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            margin: 0,
            textStyle: {
              color: this.option.nameColor || "#333",
              fontSize: this.option.yNameFontSize || 14
            }
          }
        },
        grid: {
          top: "center",
          height: Number(this.option.split) * 10,
          left: this.option.gridX || 70,
          right: this.option.gridX2 || 100
        },
        series: [
          {
            name: '占比',
            //name: optionData[0].name,
            type: "pictorialBar",
            //symbol: symbol,
            //symbolRepeat: false,
            //symbolMargin: "0%",
            symbolClip: true,
            symbolSize: [this.option.symbolWidthSize || 30, this.option.symbolHeightSize || 30],
            symbolBoundingData: maxData,
            data: [{value: this.setSubstr(optionData[0].ratio), symbol: symbol}],
            //data: [{value: optionData.value, symbol: symbol}],
            z: 10
            // data: (() => {
            //   return optionData.map(ele => {
            //     return {value: ele.value, symbol: symbol};
            //   });
            // })()
          },
          {
            name: '售电量',
            type: "pictorialBar",
            itemStyle: {
              normal: {
                opacity: 0.5
              }
            },
            // label: {
            //   normal: {
            //     show: false,
            //     position: "outside",
            //     offset: [10, 0],
            //     textStyle: {
            //       color: color,
            //       fontSize: fontSize
            //     }
            //   }
            // },
            animationDuration: 0,
            //symbol: symbol,
            //symbolRepeat: false,
            //symbolMargin: "5%",
            symbolSize: [this.option.symbolWidthSize || 30, this.option.symbolHeightSize || 30],
            symbolBoundingData: maxData,
            data: [{value: optionData[0].value, symbol: symbol}]
            // data: (() => {
            //   return optionData.map(ele => {
            //     return {value: ele.value, symbol: symbol};
            //   });
            // })()
          }
        ]
      };

      this.myChart.resize();
      this.myChart.setOption(option, true);
    }
  }
});
</script>

