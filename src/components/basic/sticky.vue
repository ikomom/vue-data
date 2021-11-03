<template>
    <div :class="b()"
         :style="styleSizeName">
        <div :style="stickyStyle">
            <div :style="stickTitleStyle">{{option.title}}（{{dataChart.time}}）</div>
            <div :style="stickSubtitleStyle">{{option.subtitle}}</div>

            <div :style="stickyBoxstyle" v-if="mode">
                <div>
                    <div :style="stickTextStyle">{{formatNum(dataChart.number)}}</div>
                    <div :style="sticksubTextStyle">
                        <p :style="subTextItem">{{option.onedescName}}：{{formatNum(dataChart.onetext)}}</p>
                        <p>{{option.twodescName}}：{{formatNum(dataChart.twotext)}}</p>
                    </div>
                </div>
            </div>

            <div :style="stickyBoxstyle" v-else>
                <div>
                    <div :style="stickTextStyle">{{formatNum(dataChart.number)}}</div>
                    <div :style="sticksubTextStyle">
                        <p>{{option.descName}}：{{formatNum(dataChart.desctext)}}</p>
                    </div>
                </div>
                <div :class="b('progress')" v-if="option.showProgress">
                    <div :class="b('text','circle')">
                        <p :style="styleSuffixName" v-if="dataChart.precent >= 0">{{dataChart.precent.toFixed(1)}}%</p>
                        <p :style="styleName">{{option.progressName}}</p>
                    </div>
                    <avue-progress :color="color"
                                :width="progressWidth"
                                :showText="false"
                                :strokeWidth="strokeWidth"
                                :percentage="dataChart.precent > 100 ? 100 : dataChart.precent"
                                :type="type">
                    </avue-progress>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";
export default create({
    name: "sticky",
    computed: {
        mode () {
            if (this.option.mode) {
                this.option.showProgress = false;
                return true
            }else {
                //this.option.showProgress = true;
                return false
            }
        },
        stickyStyle () {
            return {
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                color: this.option.titleColor || "#fff",
                paddingTop: this.setPx(this.option.paddingTop || 20),
                paddingLeft: this.setPx(this.option.paddingLeft || 20),
                backgroundColor: this.option.backgroundColor || "#409ef7",
                borderRadius: (this.option.borderRadius || 4) + 'px',
                boxShadow: `0 8px 12px -4px ${this.option.shadowColor}`
            }
        },
        stickTitleStyle () {
            return {
                fontWeight: 500,
                fontSize: this.setPx(this.option.titleSize || 24),
                marginBottom: this.setPx(this.option.titleMarginBottom || 10)
            }
        },
        stickSubtitleStyle () {
            return {
                fontSize: this.setPx(this.option.subtitleSize || 12),
                marginBottom: this.setPx(this.option.subtitleMarginBottom || 20)
            }
        },
        stickyBoxstyle () {
            return {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
            }
        },
        stickTextStyle () {
            return {
                fontFamily: 'HelveticaNeue',
                fontSize: this.setPx(this.option.sticktextSize || 48),
                marginBottom: this.setPx(this.option.sticktextMarginBottom || 32)
            }
        },
        sticksubTextStyle () {
            return {
                display: 'flex',
                justifyContent: 'flex-start',
                fontSize: this.setPx(this.option.sticksubTextSize || 16)
            }
        },
        subTextItem () {
            return {
                marginRight: this.setPx(this.option.itemMarginRight || 40)
            }
        },
        styleSuffixName () {
            return {
                fontWeight: this.option.suffixFontWeight || "normal",
                fontSize: (this.option.suffixFontSize || 20) + "px",
                fontFamily: 'HelveticaNeue',
                color: this.option.suffixColor || "#fff",
                marginTop: this.setPx(this.option.descMarginTop || 8)
            };
        },
        styleName () {
            return {
                marginBottom: this.setPx(this.option.split || 9),
                fontWeight: this.option.fontWeight || "normal",
                fontSize: (this.option.fontSize || 12) + "px",
                color: this.option.color || "#fff"
            };
        },
        progressWidth () {
            return 110
        },
        type () {
            return this.option.type || "circle";
        },
        color () {
            return this.option.borderColor || "#fff";
        },
        strokeWidth () {
            return this.option.strokeWidth || 10;
        }
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
        formatNum (num) {
            if (num){
                return (num+'').replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (all, pre, groupOf3Digital) {
                    return pre + groupOf3Digital.replace(/\d{3}/g, ',$&');
                })
            }else {
                return num
            }
            
            //return (num+ '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
        }
    }
})
</script>

<style lang="scss" scoped>

</style>