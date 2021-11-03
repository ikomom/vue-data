<template>
    <div :class="b()">
        <el-steps align-center :active="dataChart.active" finish-status="success" process-status="finish">
            <el-step v-for="(item, index) in dataChart.stepData" 
                    :key="index" 
                    :title="item.title" 
                    :description="item.description">
                </el-step>
        </el-steps>
    </div>
</template>

<script>
import create from "../../bigjs/core/echart/create";
export default create({
    name: 'steps',
    computed: {

    },
    methods: {
        
    }
})
</script>