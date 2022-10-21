(function (){
    let option = null;
    let myChart = null;
    option = {
        title: {
            // text: "参与项目",
            left: "center",
        },
        tooltip: {
          trigger: 'item',
          formatter(params) {
            return `${params.value}%`
          }
        },
        legend: {
          top: '2%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 75.03, name: 'SaaS' },
                { value: 12.02, name: 'CRM' },
                { value: 6.38, name: 'KYG' },
                { value: 4.03, name: 'ZTXK' },
                { value: 1.21, name: 'Web-Components' },
                { value: 1.33, name: 'Others' }
            ]
          }
        ]
    };

    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById('projectChart'));

    myChart && myChart.setOption(option);

}());