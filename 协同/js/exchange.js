if (document.getElementById('chart1')) {
  var chart1 = echarts.init(document.getElementById('chart1'));
  var option1 = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: [],
      textStyle: {
        color: "rgb(88, 88, 88)"
      }
    },
    calculable: true,
    grid: {
      x: 35,
      x2: 10,
      y2: 30,
      y: 20
    },
    xAxis: [{
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eee",
          width: 1
        }
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "#333",
          fontSize: 12
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }],
    yAxis: [{
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
      },
      name: "",
      nameTextStyle: {
        color: "#666",
        fontSize: 12
      }
    }],
    series: [{
      type: "line",
      smooth: true,
      name: "占比",
      data: [150, 270, 350, 345, 312, 415, 318, 410, 310, 415, 412, 415],
      yAxisIndex: 0,
    }],
    color: ["#2296E7"]
  }
  chart1.setOption(option1);
}

if (document.getElementById('chart2')) {
  var chart2 = echarts.init(document.getElementById('chart2'));
  var option2 = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: [],
      textStyle: {
        color: "rgb(88, 88, 88)"
      }
    },
    calculable: true,
    grid: {
      x: 35,
      x2: 10,
      y2: 30,
      y: 20
    },
    xAxis: [{
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eee",
          width: 1
        }
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "#333",
          fontSize: 12
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }],
    yAxis: [{
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
      },
      name: "",
      nameTextStyle: {
        color: "#666",
        fontSize: 12
      }
    }],
    series: [{
      type: "line",
      smooth: true,
      name: "占比",
      data: [150, 270, 350, 345, 312, 415, 318, 410, 310, 415, 412, 415],
      yAxisIndex: 0,
    }],
    color: ["#FF5959"]
  }
  chart2.setOption(option2);
}

if (document.getElementById('chart3')) {
  var chart3 = echarts.init(document.getElementById('chart3'));
  var option3 = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: [],
      textStyle: {
        color: "rgb(88, 88, 88)"
      }
    },
    calculable: true,
    grid: {
      x: 35,
      x2: 10,
      y2: 30,
      y: 20
    },
    xAxis: [{
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#eee",
          width: 1
        }
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "#333",
          fontSize: 12
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }],
    yAxis: [{
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
      },
      name: "",
      nameTextStyle: {
        color: "#666",
        fontSize: 12
      }
    }],
    series: [{
      type: "line",
      smooth: true,
      name: "占比",
      data: [150, 270, 350, 345, 312, 415, 318, 410, 310, 415, 412, 415],
      yAxisIndex: 0,
    }],
    color: ["#FBCB0E"]
  }
  chart3.setOption(option3);
}