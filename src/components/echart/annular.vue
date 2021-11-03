<template>
    <div :class="b()"
         :style="styleSizeName">
        <div :class="b('title')"
             v-html="titleFormatter && titleFormatter(dataChart)"></div>
        <div :ref="id"
             :style="styleChartName"></div>
    </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";
export default create({
    name: "pie",
    computed: {
        labelShow () {
            return this.vaildData(this.option.labelShow, false);
        },
        x2 () {
            return this.option.gridX2 || 20;
        },
        fontSize () {
            return this.option.fontSize || 14;
        }
    },
    methods: {
        updateChart () {
            const optionData = this.deepClone(this.dataChart) || [];
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
                tooltip: (() => {
                    return Object.assign(
                        (() => {
                            if (this.formatter) {
                                return {
                                    formatter: name => {
                                        return this.formatter(name, this.dataChart);
                                    }
                                };
                            }
                            return {formatter: '{b}: {c}</br>占比：{d}%'};
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
                        return optionData.map((ele, index) => {
                        return {
                            name: ele.name,
                            textStyle: this.ishasprop(!this.switchTheme, {
                                color: "#95989D",
                                //color: this.getColor(index, true)
                            }, {})
                        }
                        });
                    })()
                },
                series: (() => {
                    const barColor = this.option.barColor || [];
                    const list = [
                        {
                            type: "pie",
                            roseType: this.option.roseType ? "radius" : "",
                            radius: this.option.radius ? ["50%", "70%"] : "50%",
                            center: ["50%", "50%"],
                            startAngle: this.option.startAngle ? 180 : "",
                            animationType: "scale",
                            animationEasing: "elasticOut",
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            },
                            label: {
                                show: this.labelShow,
                                fontSize: this.fontSize,
                            },
                            labelLine: {
                                length: 10,
                                length2: 2
                            },
                            data: (() => {
                                if(this.option.startAngle){
                                    let allData = 0;
                                    (optionData || []).map((ele, index) => {
                                        if(ele.value > 0){
                                            allData += parseFloat(ele.value)
                                        }
                                    })
                                    optionData.push({name: "", value: allData})
                                }
                                let list = optionData;
                                if (this.option.notCount) {
                                    list = list.filter(ele => {
                                        if (ele.value !== 0 && ele.value) {
                                            return true;
                                        }
                                    })
                                }
                                if (this.option.sort) {
                                    list.sort(function (a, b) {
                                        return a.value - b.value;
                                    });
                                }
                                return list;
                            })(),
                            itemStyle: this.ishasprop(!this.switchTheme, {
                                color: params => this.getColor(params.dataIndex)
                            }, {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: "rgba(0, 0, 0, 0.5)"
                                }
                            }),
                        }
                    ];
                    return list;
                })()
            };
            this.myChart.resize();
            this.myChart.setOption(option, true);
        }
    }
});
</script>