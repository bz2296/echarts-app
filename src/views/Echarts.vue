<template>
    <div class="echarts-display-box">
        <h1>echarts</h1>
        <div class="echarts" ref="echartsBox" style="width: 600px; height: 300px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: 'Echarts',
    mounted() {
        this.drawTimeLine();
    },
    methods: {
        drawTimeLine() {
            const { echartsBox } = this.$refs;
            const echartsObj = echarts.init(echartsBox);

            const baseOption = {
                timeline: {
                    data: ['2017', '2018', '2019']
                },
                title: {
                    subtext: ''
                },
                grid: {},
                xAxis: [{
                    type: 'category',
                    data: ['A公司', 'B公司', 'C公司']
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [
                    {
                        type: 'line'
                    }
                ]
            };
            const options = [
                {
                    title: {
                        text: '2017年销量情况'
                    },
                    series: [
                        { data: [300, 500, 450] }
                    ]
                },
                {
                    title: {
                        text: '2018年销售情况'
                    },
                    series: [
                        { data: [500, 600, 1000] }
                    ]
                },
                {
                    title: {
                        text: '2019年销售情况'
                    },
                    series: [{
                        data: [650, 700, 950]
                    }]
                }
            ];

            const option = { baseOption, options };
            echartsObj.setOption(option);
        },
        drawEcharts() {
            const { echartsBox } = this.$refs;
            const echartsObj = echarts.init(echartsBox);
            echartsObj.setOption({
                title: {
                    text: 'Echarts 入门实例',
                    subtext: '副标题',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: { show: true, type: ['line', 'bar'] },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                legend: {
                    show: true,
                    left: 'left',
                    top: 'top',
                    orient: 'vertical',
                    data: ['销量', '进货量']
                },
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    },
                    {
                        name: '进货量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            });
        }
    }
};
</script>

<style scoped>

</style>
