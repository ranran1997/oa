var chart1 = echarts.init(document.getElementById('chart1'));
var option1 = {
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
            name: "",
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
chart1.setOption(option1); 
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
