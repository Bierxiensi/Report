(function (){
    let option = null;
    let myChart = null;
    
    option = {
        title: {
            text: '代码行'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['Others', 'Machine-bind', 'Chart-h5', 'Web-Components', 'ZTXK', 'KYG', 'CRM', 'SaaS']
        },
        series: [
            {
                name: 'code lines',
                type: 'bar',
                data: [100, 314, 1066, 1413, 4726, 7425, 14084, 87907]
            }
        ]
    };

    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById('projectBar'));

    myChart && myChart.setOption(option);

}());