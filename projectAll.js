(function (){
    let option = null;
    let myChart = null;
    
    const codeLineData = {
        all: 117159,
        charts: {
            SaaS: 87907,
            CRM: 14084,
            KYG: 7425,
            ZTXK: 4726,
            WebComponents: 1413,
            ChartH5: 1066,
            MachineBind: 314,
            Others: 100,
        },
    };
    const downloadJson = {
        SaaS: 75.03,
        CRM: 12.02,
        KYG: 6.38,
        ZTXK: 4.03,
        WebComponents: 1.21,
        Others: 1.33
    };

    // const waterMarkText = 'ECHARTS';
    // const canvas = document.createElement('canvas');
    // let ctx = canvas.getContext('2d');
    // canvas.width = canvas.height = 100;
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';
    // ctx.globalAlpha = 0.08;
    // ctx.font = '20px Microsoft Yahei';
    // ctx.translate(50, 50);
    // ctx.rotate(-Math.PI / 4);
    // ctx.fillText(waterMarkText, 0, 0);
    option = {
        // backgroundColor: {
        //     type: 'pattern',
        //     image: canvas,
        //     repeat: 'repeat'
        // },
        tooltip: {},
        title: [
            {
                text: '代码行',
                subtext: '总计 ' + codeLineData.all,
                left: '25%',
                textAlign: 'center'
            },
            {
                text: '项目占比',
                subtext:
                    '总计 ' +
                    Object.keys(downloadJson).reduce(function (all, key) {
                    return all + downloadJson[key];
                    }, 0),
                left: '75%',
                textAlign: 'center'
            },
        ],
        grid: [
            {
                top: 50,
                width: '50%',
                bottom: 0,
                left: 10,
                containLabel: true
            },
        ],
        xAxis: [
            {
                type: 'value',
                max: codeLineData.all,
                splitLine: {
                    show: false
                }
            },
        ],
        yAxis: [
            {
                type: 'category',
                data: Object.keys(codeLineData.charts),
                axisLabel: {
                    interval: 0,
                    rotate: 30
                },
                splitLine: {
                    show: false
                }
            },
        ],
        series: [
            {
                type: 'bar',
                stack: 'chart',
                label: {
                    position: 'right',
                    show: true
                },
                data: Object.keys(codeLineData.charts).map(function (key) {
                    return codeLineData.charts[key];
                })
            },
            {
                type: 'bar',
                stack: 'chart',
                silent: true,
                itemStyle: {
                    color: '#eee'
                },
                data: Object.keys(codeLineData.charts).map(function (key) {
                    return codeLineData.all - codeLineData.charts[key];
                })
            },
            {
                type: 'pie',
                radius: [0, '70%'],
                center: ['75%', '60%'],
                tooltip: {
                    trigger: 'item',
                    formatter(params) {
                        return `${params.value}%`
                    }
                },
                itemStyle: {
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                data: Object.keys(downloadJson).map(function (key) {
                    return {
                        name: key,
                        value: downloadJson[key]
                    };
                })
            },
        ]
    };

    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById('projectAll'));

    myChart && myChart.setOption(option);

}());