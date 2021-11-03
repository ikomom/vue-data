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
    name: "bsankey",
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
                    backgroundColor: '#ffffff',
                    borderColor: '#f2f2f2',
                    borderWidth: 1,
                    textStyle: {
                        fontSize: this.option.tipFontSize,
                        color: this.option.tipColor || "#797F86"
                    }
                }),
                grid: {
                    // left: this.option.gridX || 20,
                    // top: this.option.gridY || 60,
                    // right: this.x2,
                    // bottom: this.option.gridY2 || 60
                },
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
                                    color: this.getColor(index, true)
                                }, {})
                            };
                        });
                    })()
                },
                series: (() => {
                    const barColor = this.option.barColor || [];
                    const list = [
                        {
                            type: 'sankey',
                            lineStyle: {
                                color: 'source',
                                curveness: 0.3
                            },
                            data: (() => {
                                const itemList = (optionData.categories || []).map((ele, index) => {
                                    return Object.assign(ele, {
                                        name: ele.name,
                                        label:{
                                            color: this.option.labelColor || "#797F86"
                                        },
                                        itemStyle: this.ishasprop(!this.switchTheme, {
                                            color: this.getColor(index)
                                            },{ 
                                            barBorderRadius: this.option.barRadius || 0,
                                            borderWidth: 0,
                                        }),
                                    })
                                })
                                return itemList;
                            })(),
                            links: optionData.series
                        }
                        ]
                    return list;
                })()
            };
            this.myChart.resize();
            this.myChart.setOption(option, true);
        }
    }
});
</script>