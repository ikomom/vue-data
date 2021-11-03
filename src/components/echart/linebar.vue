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
                    data: (() => {
                        return (optionData.series || []).map((ele, index) => {
                            return {
                                name: ele.name,
                                textStyle: this.ishasprop(!this.switchTheme, {
                                    color: "#95989D"
                                    //color: this.getColor(index, true)
                                }, {})
                            };
                        });
                    })()
                },
                xAxis: [
                    {
                        type: 'category',
                        data: optionData.categories || [],
                        scale: true,
                        boundaryGap: true,
                        axisLine: {show: false},
                        splitLine: {show: false},
                        axisLabel: {show: false,},
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
                series: (() => {
                    const barColor = this.option.barColor || [];
                    const list = (optionData.series || []).map((ele, index) => {
                        return Object.assign(ele, {
                            type: ele.type,
                            stack: ele.type == 'bar' ? ele.stack : '',
                            xAxisIndex: ele.xaxisIndex,
                            yAxisIndex: ele.yaxisIndex,
                            //smooth: true,
                            showSymbol: false,
                            barWidth: this.option.barWidth || 16,
                            barMinHeight: this.option.barMinHeight || 0,
                            lineStyle: {
                                width: ele.type == 'line' ? this.option.lineWidth || 4 : ''
                            },
                            itemStyle: this.ishasprop(!this.switchTheme, {
                                color: this.getColor(index, true)
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
        }
    }
});
</script>