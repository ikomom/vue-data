<template>
    <div :class="b()"
         :style="styleSizeName">
        <div :style="stickyStyle">
            <div :style="stickTitleStyle">{{option.title}}（{{dataChart.time}}）</div>
            <div :style="stickSubtitleStyle">{{option.subtitle}}</div>

            
        </div>
    </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";
export default create({
    name: "ringnotes",
    computed: {
        stickyStyle () {
            return {
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                paddingTop: this.setPx(this.option.paddingTop || 20),
                paddingLeft: this.setPx(this.option.paddingLeft || 20),
                backgroundColor: this.option.backgroundColor || "#409ef7",
                borderRadius: (this.option.borderRadius || 4) + 'px',
                boxShadow: `0 8px 12px -4px ${this.option.shadowColor}`
            }
        },
        stickTitleStyle () {
            return {
                fontWeight: 600,
                color: this.option.titleColor || '#fff',
                fontSize: this.setPx(this.option.titleSize || 24),
                marginBottom: this.setPx(this.option.titleMarginBottom || 10)
            }
        },
        stickSubtitleStyle () {
            return {
                color: this.option.subtitleColor || '#fff',
                fontSize: this.setPx(this.option.subtitleSize || 12),
                marginBottom: this.setPx(this.option.subtitleMarginBottom || 20)
            }
        },
        
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
        
    }
})
</script>

<style lang="scss" scoped>

</style>