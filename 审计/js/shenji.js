var chart1 = echarts.init(document.getElementById('chart1'));
var option1 = {
    tooltip: {
        trigger: "axis"
    },
    calculable: true,
    grid:{
        x: 50,
        x2: 30,
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
            yAxisIndex: 0,
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
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        left: 'left',
        show:false,
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '60%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'项目1'},
                {value:310, name:'项目2'},
                {value:234, name:'项目3'},
                {value:135, name:'项目4'},
                {value:548, name:'项目5'}
            ],
            itemStyle: {
                normal: {
                    label: {
                        formatter: "{b}：\n{c} {d}%",
                        textStyle: {
                            color: "#666",
                            fontFamily:'PingFang SC',
                            fontSize: 14
                        }
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
    color: ['#2899E8','#FF8E2E','#906CCB','#3AAA40','#FF5050']
};
chart2.setOption(option2); 
