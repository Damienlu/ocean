import React from 'react';
import ReactECharts from 'echarts-for-react';
const DonutChart = () => {
  const options = {
    title: {
        text: '海廢前五大類型 (2017-2020年)',
        subtext: '資料來源：海洋委員會海洋保育署海洋保育網',
        left: 'center',
        textStyle: {
            fontSize: 20
          }
        
    },
     toolbox: {
        show: false,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {d}%'
    },
    legend: {
        bottom: '0',
        left: 'center',
        padding: 1,
        textStyle: {
            fontSize: 15
        }

    },
    series: [
        {
            name: '海廢前五大類型',
            type: 'pie',
            color: ['#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
            radius: ['30%', '60%'],
            avoidLabelOverlap: true,
            legendHoverLink: true ,
            top: 10,
            bottom: 30,
            itemStyle: {
                borderRadius: 5,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: true,
                textStyle: {
                    fontSize: 15,
                }
            },
            lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 0,
                }
            },
            data: [
                {value: 18.7, name: '寶特瓶'},
                {value: 11.8, name: '漁業廢棄物'},
                {value: 10.9, name: '塑膠瓶蓋'},
                {value: 7.5, name: '菸蒂'},
                {value: 7.1, name: '吸管'},
                {value: 44, name: '其他'}
            ]
        }
    ]
};
  return <ReactECharts option={options} />;
};
export default DonutChart;