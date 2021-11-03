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
            const seriesData = optionData.series;
            const option = {
                title: this.ishasprop(this.option.titleShow, {
                    text: this.option.title,
                    subtext: this.option.subtext || '',
                    textStyle: {
                        color: this.option.titleColor || '#333',
                        fontSize: this.option.titleFontSize || 16
                    },
                    left: this.option.titlePosition || 'auto',
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
                axisPointer: {
                    link: {xAxisIndex: 'all'},
                    label: {
                        backgroundColor: '#777'
                    }
                },
                grid: [
                    {
                        left: this.option.gridX || 50,
                        right: this.x2,
                        height: '36%'
                    },
                    {
                        left: this.option.gridX || 50,
                        top: this.option.gridY || 400,
                        right: this.x2,
                        bottom: this.option.gridY2 || 60,
                        height: '16%'
                    }
                ],
                legend: {
                    show: this.vaildData(this.option.legend, false),
                    orient: this.option.legendOrient || "horizontal",
                    x: this.option.legendPostion || "right",
                    top: 0,
                    right: this.x2,
                    textStyle: {
                        color: "#95989D",
                        fontSize: this.option.legendFontSize || 12,
                        padding: [1,0,0,0]
                    },
                    // icon: 'circle',
                    itemGap: 24,
                    data: [seriesData.barValue.name, seriesData.lineValue.name],
                    // data: (() => {
                    //     return (optionData.series || []).map((ele, index) => {
                    //         return {
                    //             name: ele.name,
                    //             textStyle: this.ishasprop(!this.switchTheme, {
                    //                 color: this.getColor(index, true)
                    //             }, {})
                    //         };
                    //     });
                    // })()
                },
                xAxis: [
                    {
                        type: 'category',
                        data: optionData.categories || [],
                        scale: true,
                        boundaryGap: true,
                        axisLine: {show: false},
                        splitLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitNumber: 10,
                        min: 'dataMin',
                        max: 'dataMax',
                        axisPointer: {
                            z: 100
                        }
                    },
                    {
                        type: 'category',
                        gridIndex: 1,
                        data: optionData.categories || [],
                        offset: this.option.xOffset || 16,
                        scale: true,
                        boundaryGap: true,
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: this.option.nameColor || "#333"
                            }
                        },
                        splitNumber: 20,
                        min: 'dataMin',
                        max: 'dataMax'
                    }
                ],
                yAxis: [
                    {
                        scale: false,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: this.option.nameColor || "#333"
                            }
                        },
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
                        splitArea: {
                            show: false
                        }
                    },
                    {
                        scale: false,
                        gridIndex: 1,
                        splitNumber: 2,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: this.option.nameColor || "#333"
                            }
                        },
                        axisLine: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false}
                    }
                ],
                dataZoom: [
                    {
                        show: true,
                        xAxisIndex: [0, 1],
                        start: 0,
                        end: 100,
                        bottom: 10
                    },
                    // {
                    //     show: true,
                    //     xAxisIndex: [0, 1],
                    //     type: 'slider',
                    //     top: '85%',
                    //     start: 98,
                    //     end: 100
                    // }
                ],
                // brush: {
                //     xAxisIndex: "all",
                //     toolbox: [""],
                //     brushStyle: { borderWidth: 0, color: "none", borderColor: "none" },
                //     outOfBrush: {
                //         colorAlpha: 0.1
                //     }
                // },
                series: [
                    {
                        name: seriesData.lineValue.name,
                        type: seriesData.lineValue.type,
                        data: seriesData.lineValue.data,
                        symbol: 'circle',
                        symbolSize: 12,
                        //smooth: true,
                        lineStyle: {
                            opacity: 0.8,
                            width: this.option.lineWidth || 4
                        },
                        
                        itemStyle: this.ishasprop(!this.switchTheme, {
                            color: this.getColor(0, true)
                        }, {}),
                    },
                    {
                        name: seriesData.maxValue.name,
                        type: seriesData.maxValue.type,
                        stack: seriesData.maxValue.stack,
                        data: seriesData.maxValue.data,
                        barWidth: seriesData.maxValue.type == 'bar' ? 4 : 0,
                        symbol: 'none',
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        }
                    },
                    {
                        name: seriesData.minValue.name,
                        type: seriesData.minValue.type,
                        stack: seriesData.minValue.stack,
                        data: seriesData.minValue.data,
                        barWidth: seriesData.minValue.type == 'bar' ? 4 : 0,
                        symbol: 'none',
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        }
                    },
                    {
                        name: seriesData.differenceValue.name,
                        type: seriesData.differenceValue.type,
                        stack: seriesData.differenceValue.stack,
                        data: seriesData.differenceValue.data,
                        barWidth: seriesData.differenceValue.type == 'bar' ? 4 : 0,
                        itemStyle: this.ishasprop(!this.switchTheme, {
                            color: this.getColor(1, true)
                        }, { barBorderRadius: this.option.barRadius || 0 }),
                        tooltip: {
                            show: false
                        }
                    },
                    {
                        name: seriesData.barValue.name,
                        type: seriesData.barValue.type,
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        barWidth: 14,
                        data: seriesData.barValue.data,
                        itemStyle: this.ishasprop(!this.switchTheme, {
                            color: this.getColor(2)
                        }, {})
                        
                    }
                ]
            };
            this.myChart.resize();
            this.myChart.setOption(option, true);
        }
    }
});
</script>