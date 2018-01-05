// var chart1 = echarts.init(document.getElementById('chart1'));
var option1 = {  
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : false,
    },
    grid:{
        y: 50,
        y2: 50,
        x: 40,
        x2: 40
    },
    series : [
        {
            name:'内存使用率',
            type:'gauge',
            min:0,
            max:100,
            startAngle: 180,
            endAngle: 0,
            center: ['50%','50%'],
            radius : '100%',
            splitNumber: 10,       // 分割段数，默认为5
            data:[{value: 20, name: '内存使用率'}],
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.5, '#2296E7'],[0.8, '#FF9844'],[1, '#FF5959']], 
                    width: 12
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 10,   // 每份split细分多少段
                length :10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                show: true,        // 默认显示，属性show控制显示与否
                length: 10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer : {
                width : 3
            },
            title : {
                show : false,
                offsetCenter: [0, '80%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'normal',
                    fontSize: 14,
                    color: '#333'
                }
            },
            detail : {
                show : false,
                formatter:'{value}%',
                textStyle: {      
                    fontSize: 18,
                    color: '#666666',
                }
            }
        }
    ] 
};  
// chart1.setOption(option1); 
var chart2 = echarts.init(document.getElementById('chart2'));
var option2 = {
    tooltip: {
        trigger: "axis"
    },
    calculable: true,
    grid:{
        x: 50,
        x2: 50,
        y: 50,
        y2: 30,
    },
    legend: {
        data: ['投资额', '外资占比']
    },
    xAxis: [
        {
            type: "category",
            data: ["2015", "2016", "2017"],
            axisLabel: {
                interval:0,
                textStyle: {
                    color: "#333",
                    fontSize: 12
                },
                textStyle: {
                    color: "#a8a8a8",
                    fontSize: 12
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#eee",
                    width: 1
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            name: '单位：万元',
            nameTextStyle: {
                color:'#666'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#eee",
                    width: 1
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#666",
                    fontSize: 12
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#EEEEEE",
                    width: 1
                }
            },
            axisTick: {
                show: false
            }
        },
        {
            type: "value",
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#eee",
                    width: 1
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#666",
                    fontSize: 12
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#EEEEEE",
                    width: 1
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            name: "投资额",
            type: "bar",
            barWidth: 10,
            yAxisIndex:0,
            data:[12000,15000,20000],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{c}",
                        position: "top"
                    }
                }
            }
        },
        {
            name: "外资占比",
            type: "line",
            barWidth: 10,
            yAxisIndex: 1,
            data:[25,48,65],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{c}",
                        position: "top"
                    }
                }
            }
        }
    ],
    color: ['#2296E7','#f66']
} 
chart2.setOption(option2); 
