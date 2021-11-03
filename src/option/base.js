
//基础公共url
var baseUrl = '.'
//基础组件库
export default [{
  "label": '自定义图表',
  "icon": 'icon-bar',
  "children": [{
    "label": '环形图',
    "option": {
      "name": "环形图",
      "title": "",
      "icon": 'icon-bar',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "data": [
        {
          "name": "43%",
          "value": 43,
        }, {
          "name": "66%",
          "value": 66,
        }, {
          "name": "25%",
          "value": 25,
        }, {
          "name": "10%",
          "value": 10,
        }
      ],
      "dataFormatter": "",
      "url": baseUrl + "/bar",
      "time": 0,
      "resize": false,
      "component": {
        "width": 400,
        "height": 300,
        "name": "annular",
        "prop": "pie"
      },
      "option": {
        "legend": false,
        "labelShow": true,
        "radius": true,
        "startAngle": true,
        "barColor": [
          {
            "color1": "#409EF7"
          },
          {
            "color1": "#9A5EED"
          },
          {
            "color1": "#E963A8"
          },
          {
            "color1": "#F0A356"
          },
          {
            "color1": "transparent"
          }
        ]
      }
    }
  }, {
    "label": '象形图',
    "option": {
      "name": "象形图",
      "title": "",
      "icon": "icon-pictorialBar",
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "data": {
        "name": "五省区",
        "value": "1212",
        "ratio": "60%",
      },
      "dataQuery": {},
      "time": 0,
      "url": baseUrl + "/picBar",
      "dataFormatter": "",
      "component": {
        "width": 400,
        "height": 300,
        "name": "picbar",
        "prop": "pictorialbar",
      },
      "option": {
        "symbol": '/img/map/wusheng.png',
        "symbolWidthSize": 302,
        "symbolHeightSize": 182,
        "split": 20,
        "fontSize": '24',
        "xAxisShow": false,
        "yAxisShow": false,
        "color": '#4dffff',
        "nameColor": '#564AA3',
        "xNameFontSize": '24',
        "yNameFontSize": '24',
      }
    }
  }, {
    "label": '桑基图',
    "option": {
      "name": "桑基图",
      "title": "",
      "img": require('@/assets/text5.png'),
      "icon": 'icon-pie',
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "time": 0,
      "url": baseUrl + "/bsankey",
      "data": {
        "categories": [
          { name: '云南送出' },
          { name: '贵州送出' },
          { name: '天厂(天一、天二)送出' },
          { name: '龙滩送出' },
          { name: '三峡送出' },
          { name: '国网送出' },
          { name: '桥口鲤鱼江送出' },
          { name: '广西送出' },
          { name: '广东' },
          { name: '广西' },
          { name: '海南' }
        ],
        "series": [
          { source: '云南送出', target: '广东', value: 3 },
          { source: '云南送出', target: '广西', value: 2 },
          { source: '云南送出', target: '海南', value: 2 },
          { source: '贵州送出', target: '广东', value: 2 },
          { source: '贵州送出', target: '广西', value: 2 },
          { source: '天厂(天一、天二)送出', target: '广东', value: 2 },
          { source: '天厂(天一、天二)送出', target: '海南', value: 2 },
          { source: '龙滩送出', target: '广西', value: 2 },
          { source: '龙滩送出', target: '海南', value: 2 },
          { source: '三峡送出', target: '广东', value: 2 },
          { source: '三峡送出', target: '海南', value: 2 },
          { source: '国网送出', target: '广东', value: 1 },
          { source: '国网送出', target: '广西', value: 2 },
          { source: '国网送出', target: '海南', value: 1 },
          { source: '桥口鲤鱼江送出', target: '广西', value: 1 },
          { source: '桥口鲤鱼江送出', target: '海南', value: 1 },
          { source: '广西送出', target: '广东', value: 1 }
        ]
      },
      "resize": false,
      "component": {
        "width": 900,
        "height": 340,
        "name": "bsankey",
        "prop": "sankey", 
      },
      "option": {
        "labelColor": '#797F86',
        "barColor": [
          { "color1": "#616DFA" },
          { "color1": "#C75ADD" },
          { "color1": "#EF766B" },
          { "color1": "#F0A356" },
          { "color1": "#2ADF83" },
          { "color1": "#1CCECD" },
          { "color1": "#24C4F9" },
          { "color1": "#409EF7" },
          { "color1": "#955EED" },
          { "color1": "#8BDC38" },
        ]
      }
    }
  }, {
    "label": '堆叠柱形图',
    "option": {
      "name": "堆叠柱状图",
      "title": "",
      "icon": 'icon-bar',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "data": {
        "categories": [
          "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
        ],
        "coordRange": ["1月", "7月"],
        "series": [{
          "name": "年度计划",
          "stack": "计划电量",
          "data": [
            320, 132, 332, 332, 332, 332, 332, 332, 332, 332, 332, 332
          ]
        }, {
          "name": "月增量",
          "stack": "计划电量",
          "data": [
            320, 332, 232, 332, 132, 332, 332, 232, 332, 132, 332, 332
          ]
        }, {
          "name": "周增量",
          "stack": "计划电量",
          "data": [
            320, 332, 132, 332, 332, 332, 132, 332, 332, 332, 232, 332
          ]
        }, {
          "name": "日增量",
          "stack": "计划电量",
          "data": [
            120, 332, 332, 332, 332, 332, 332, 332, 332, 332, 332, 132
          ]
        }]
      },
      "dataFormatter": "",
      "url": baseUrl + "/cumulate",
      "time": 0,
      "component": {
        "width": 900,
        "height": 600,
        "name": "cumulate",
        "prop": "bar",
      },
      "option": {
        "gridX": 90,
        "gridY": 0,
        "gridX2": 0,
        "gridY2": 0,
        "legend": true,
        "xOffset": 16,
        "nameColor": "#95989D",
        "lineColor": "#333",
        "xNameFontSize": 16,
        "yNameFontSize": 16,
        "labelShow": false,
        "labelShowFontSize": 14,
        "labelShowFontWeight": 300,
        "yAxisInverse": false,
        "xAxisInverse": false,
        "xAxisShow": true,
        "yAxisShow": true,
        "xAxisSplitLineShow": false,
        "yAxisSplitLineShow": false,
        "barWidth": 30,
        "barRadius": 0,
        "barColor": [{
          "color1": "#1CCECD",
          "postion": 90,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#955EED",
          "postion": 90,
          "$index": 1,
          "_show": true
        }, {
          "color1": "#E963A8",
          "postion": 90,
          "$index": 2,
          "_show": true
        }, {
          "color1": "#F0A356",
          "postion": 90,
          "$index": 3,
          "_show": true
        }],
        "barMinHeight": 2
      }
    }
  }, {
    "label": '渐变柱形图',
    "option": {
      "name": "渐变柱状图",
      "title": "",
      "icon": 'icon-bar',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "data": {
        "categories": [
          "年交易",
          "月交易",
          "周交易",
          "日交易",
        ],
        "series": [{
          "name": "交易情况",
          "data": [
            210,
            400,
            280,
            180
          ]
        }]
      },
      "dataFormatter": "",
      "url": baseUrl + "/gradual",
      "time": 0,
      "component": {
        "width": 900,
        "height": 600,
        "name": "gradual",
        "prop": "bar",
      },
      "option": {
        "gridX": 90,
        "gridY": 0,
        "gridX2": 0,
        "gridY2": 0,
        "legend": true,
        "xOffset": 16,
        "nameColor": "#95989D",
        "lineColor": "#333",
        "xNameFontSize": 16,
        "yNameFontSize": 16,
        "labelShow": false,
        "labelShowFontSize": 14,
        "labelShowFontWeight": 300,
        "yAxisInverse": false,
        "xAxisInverse": false,
        "xAxisShow": true,
        "yAxisShow": true,
        "xAxisSplitLineShow": false,
        "yAxisSplitLineShow": false,
        "barWidth": 30,
        "barRadius": 0,
        "barColor": [{
          "color1": "#10BEF9",
          "color2": "#85F0FA",
          "postion": 100,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#8A52E5",
          "color2": "#C9A8F5",
          "postion": 100,
          "$index": 1,
          "_show": true
        }, {
          "color1": "#E5529E",
          "color2": "#F5A8DE",
          "postion": 100,
          "$index": 2,
          "_show": true
        }, {
          "color1": "#F19C46",
          "color2": "#FACF9E",
          "postion": 100,
          "$index": 3,
          "_show": true
        }],
        "barMinHeight": 2
      }
    }
  }, {
    "label": '堆叠柱折图',
    "option": {
      "name": "堆叠柱折图",
      "title": "",
      "icon": 'icon-bar',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/ploygonal",
      "data": {
        "categories": [
          "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
        ],
        "series": [{
            name: '水电',
            type: 'bar',
            stack: '电量',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },{
            name: '风电',
            type: 'bar',
            stack: '电量',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          }, {
            name: '光状',
            type: 'bar',
            stack: '电量',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },{
            name: '核电',
            type: 'bar',
            stack: '电量',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },{
            name: '水电',
            type: 'line',
            stack: '',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }, {
            name: '风电',
            type: 'line',
            stack: '',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }, {
            name: '光状',
            type: 'line',
            stack: '',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }, {
            name: '核电',
            type: 'line',
            stack: '',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 1472,
        "height": 600,
        "name": "ploygonal",
        "prop": "bar",
      },
      "option": {
        "gridX": 90,
        "gridY": 0,
        "gridX2": 0,
        "gridY2": 0,
        "cateShow": false,
        "xOffset": 16,
        "nameColor": "#95989D",
        "lineColor": "#eee",
        "xNameFontSize": 16,
        "yNameFontSize": 16,
        "labelShow": false,
        "labelShowFontSize": 14,
        "labelShowFontWeight": 300,
        "yAxisInverse": false,
        "xAxisInverse": false,
        "xAxisShow": true,
        "yAxisShow": true,
        "xAxisSplitLineShow": false,
        "yAxisSplitLineShow": false,
        "barWidth": 30,
        "barRadius": 0,
        "barColor": [{
          "color1": "#409EF7",
          "color2": "",
          "postion": 100,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#955EED",
          "color2": "",
          "postion": 100,
          "$index": 1,
          "_show": true
        }, {
          "color1": "#E963A8",
          "color2": "",
          "postion": 100,
          "$index": 2,
          "_show": true
        }, {
          "color1": "#F0A356",
          "color2": "",
          "postion": 100,
          "$index": 3,
          "_show": true
        },{
          "color1": "#409EF7",
          "color2": "",
          "postion": 100,
          "$index": 4,
          "_show": true
        }, {
          "color1": "#955EED",
          "color2": "",
          "postion": 100,
          "$index": 5,
          "_show": true
        }, {
          "color1": "#E963A8",
          "color2": "",
          "postion": 100,
          "$index": 6,
          "_show": true
        }, {
          "color1": "#F0A356",
          "color2": "",
          "postion": 100,
          "$index": 7,
          "_show": true
        }],
        "barMinHeight": 2
      }
    }
  }, {
    "label": '渐变柱折图',
    "option": {
      "name": "渐变柱折图",
      "title": "",
      "icon": 'icon-bar',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/gploygonal",
      "data": {
        "categories": [
          "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
        ],
        "series": [{
          name: '次数',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6 ]
        }, {
          name: '及时率',
          type: 'line',
          data: [10.0, 20.2, 30.3, 4.5, 6.3, 10.2, 26.8]
        }
        ]
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 1472,
        "height": 600,
        "name": "gploygonal",
        "prop": "bar",
      },
      "option": {
        "gridX": 90,
        "gridY": 0,
        "gridX2": 0,
        "gridY2": 0,
        "xOffset": 16,
        "nameColor": "#95989D",
        "lineColor": "#eee",
        "xNameFontSize": 16,
        "yNameFontSize": 16,
        "labelShow": false,
        "labelShowFontSize": 14,
        "labelShowFontWeight": 300,
        "yAxisInverse": false,
        "xAxisInverse": false,
        "xAxisShow": true,
        "yAxisShow": true,
        "xAxisSplitLineShow": false,
        "yAxisSplitLineShow": false,
        "barWidth": 30,
        "barRadius": 0,
        "barColor": [{
          "color1": "#1E8DF6",
          "color2": "#7ED8FB",
          "postion": 90,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#1CCECD",
          "color2": "#1CCECD",
          "postion": 50,
          "$index": 1,
          "_show": true
        }],
        "barMinHeight": 2
      }
    }
  }, {
    "label": '柱折分离图1',
    "option": {
      "name": "柱折分离图1",
      "title": "",
      "icon": 'icon-bar',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/barline",
      "data": {
        "categories": [
          "2004-01-02", "2004-01-05", "2004-01-06", "2004-01-07", "2004-01-08",
          "2004-01-09", "2004-01-10", "2004-01-11", "2004-01-12", "2004-01-13",
          "2004-01-14", "2004-01-15", "2004-01-16", "2004-01-17", "2004-01-18"
        ],
        "series": {
          "lineValue": { name: '成交价', type: 'line', stack: '', data: [-38.96, -35.07, -39.49, -42.67, -42.42, -33.38, -44.03, -31.21, -35.5, -38.6, -39.25, -40.95, -35.38, -40.23, -36.09, -42.34, -43.98, -40.09, -42.56, -41.34, -39.93, -39.98, -38.16, -42.07, -35.16, -40.74, -38.86, -37.67, -42, -37.34] },
          "barValue": { name: '结算电量', type: 'bar', stack: '', data: [114.65, 116.34, 113.12, 123.03, 107.79, 115.08, 107.67, 123.97, 109.18, 112.66, 127.33, 121.06, 107.43, 117.33, 117.09, 112.32, 128.59, 121.76, 120.07, 112.47, 114.82, 106.82, 115.57, 128.51, 114.74, 117.88, 114.44, 113.66, 125.21, 114.19] },
          "maxValue": { name: '最高价', type: 'bar', stack: '1', data: [-8.8, -7.17, -6.83, -11.88, -8.63, -12.22, -9.8, -8.87, -8.78, -11.98, -5.43, -13.37, -8.16, -14.59, -9.89, -12.7, -8.53, -5.81, -17.01, -10.52, -11.43, -5.7, -9.76, -12.05, -6.87, -8.64, -10.25, -6.94, -7.67, -5.36] },
          "minValue": { name: '最低价', type: 'line', stack: '', data: [-73.85, -72.38, -70.5, -70.2, -70.33, -68.71, -70.44, -69.94, -72.71, -69.42, -73.93, -74.03, -66.77, -72.56, -69.98, -71.72, -71.4, -72.02, -70.72, -72.99, -70.18, -73.58, -71.55, -70.7, -68.17, -70.26, -73.16, -73.45, -74.2, -69.11] },
          "differenceValue": { name: '价差', type: 'bar', stack: '1', data: [-73.85, -72.38, -70.5, -70.2, -70.33, -68.71, -70.44, -69.94, -72.71, -69.42, -73.93, -74.03, -66.77, -72.56, -69.98, -71.72, -71.4, -72.02, -70.72, -72.99, -70.18, -73.58, -71.55, -70.7, -68.17, -70.26, -73.16, -73.45, -74.2, -69.11]},
        }
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 1472,
        "height": 600,
        "name": "barline",
        "prop": "barline",
      },
      "option": {
        "gridX": 50,
        "gridY": 400,
        "gridX2": 20,
        "gridY2": 60,
        "xOffset": 16,
        "barRadius": 6,
        "legend": false,
        "barColor": [{
          "color1": "#E963A8",
          "postion": 100,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#E3E4E6",
          "postion": 100,
          "$index": 1,
          "_show": true
        }, {
          "color1": "#10BEF9",
          "color2": "#85F0FA",
          "postion": 100,
          "$index": 2,
          "_show": true
        }],
      }
    }
  }, {
    "label": '柱折分离图2',
    "option": {
      "name": "柱折分离图2",
      "title": "",
      "icon": 'icon-bar',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/linebar",
      "data": {
        "categories": [
          "2020-06-02 14", "2020-06-02 15", "2020-06-02 16", "2020-06-02 17", "2020-06-02 18",
          "2020-06-02 19", "2020-06-02 20", "2020-06-02 21", "2020-06-02 22", "2020-06-02 23",
          "2020-06-03 00", "2020-06-03 01", "2020-06-03 02", "2020-06-03 03", "2020-06-03 04"
        ],
        "series": [
          { name: '电量', type: 'line', stack: '', xaxisIndex: 0, yaxisIndex: 0, data: [100,110,150,130,140,170,110,120,180,100,160,120,170,160,110] },
          { name: '成交价', type: 'line', stack: '', xaxisIndex: 0, yaxisIndex: 0, data: [120,130,170,150,160,190,130,140,200,120,180,140,190,180,130] },
          { name: '电量', type: 'bar', stack: '1', xaxisIndex: 1, yaxisIndex: 1, data: [80,90,130,110,120,150,90,100,160,120,140,100,150,140,90] },
          { name: '成交价', type: 'bar', stack: '1', xaxisIndex: 1, yaxisIndex: 1, data: [40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
        ]
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 1472,
        "height": 600,
        "name": "linebar",
        "prop": "linebar",
      },
      "option": {
        "gridX": 50,
        "gridY": 400,
        "gridX2": 20,
        "gridY2": 60,
        "xOffset": 16,
        "legend": false,
        "barColor": [{
          "color1": "#24C4F9",
          "postion": 100,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#955EED",
          "postion": 100,
          "$index": 1,
          "_show": true
        },{
          "color1": "#24C4F9",
          "postion": 100,
          "$index": 2,
          "_show": true
        }, {
          "color1": "#955EED",
          "postion": 100,
          "$index": 3,
          "_show": true
        }],
        "barMinHeight": 2
      }
    }
  }, {
    "label": '折线图',
    "option": {
      "name": "折线图",
      "title": "",
      "icon": 'icon-line',
      "img": require('@/assets/text5.png'),
      "dataType": 1,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "data": {"categories": [
        "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
      ],
      "coordRange": ["1月", "7月"],
      "series": [{
        "name": "例1",
        "stack": "例",
        "data": [
          320, 132, 332, 332, 332, 332, 332, 332, 332, 332, 332, 332
        ]
      }, {
        "name": "例1",
        "stack": "例",
        "data": [
          320, 332, 232, 332, 132, 332, 332, 232, 332, 132, 332, 332
        ]
      }, {
        "name": "例1",
        "stack": "例",
        "data": [
          320, 332, 132, 332, 332, 332, 132, 332, 332, 332, 232, 332
        ]
      }, {
        "name": "例1",
        "stack": "例",
        "data": [
          120, 332, 332, 332, 332, 332, 332, 332, 332, 332, 332, 132
        ]
      }]},
      "dataFormatter": "",
      "url": baseUrl + "/cumulate",
      "time": 0,
      "component": {
        "width": 1472,
        "height": 600,
        "name": "bline",
        "prop": "line",
      },
      "option": {
        "gridX": 90,
        "gridY": 0,
        "gridX2": 0,
        "gridY2": 0,
        "xOffset": 16,
        "nameColor": "#eee",
        "lineColor": "#eee",
        "lineWidth": 5,
        "xNameFontSize": 16,
        "yNameFontSize": 16,
        "labelShow": false,
        "labelShowFontSize": 14,
        "labelShowFontWeight": 300,
        "yAxisInverse": false,
        "xAxisInverse": false,
        "xAxisShow": true,
        "yAxisShow": true,
        "xAxisSplitLineShow": false,
        "yAxisSplitLineShow": false,
        "barWidth": 30,
        "barRadius": 8,
        "barColor": [{
          "color1": "#409EF7",
        }, {
          "color1": "#955EED",
        }, {
          "color1": "#E963A8",
        }, {
          "color1": "#F0A356",
        }, {
          "color1": "#1CCECD",
        }, {
          "color1": "#C75ADD",
        }],
        "barMinHeight": 2
      }
    }
  }]
}, {
  "label": '基础',
  "icon": 'icon-flop',
  "children": [{
    "label": '步骤条',
    "option": {
      "title": "",
      "name": "步骤条",
      "icon": 'icon-img',
      "img": require('@/assets/text5.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/steps",
      "data": { 
        active: 2,
        stepData: [
          { title: '计量数据采集', description: '12工作日' },
          { title: '电量分割计算', description: '8工作日' },
          { title: '发布结算依据初稿', description: '进行中' },
          { title: '市场主体确认', description: '待开始' },
          { title: '发布结算依据', description: '待开始' }
        ]
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 640,
        "height": 180,
        "name": "steps",
        "prop": "steps",
      },
      "option": {
          
      }
    }
  }, {
    label: '选项卡',
    option: {
      "title": "",
      "name": "选项卡",
      "icon": "icon-tabs",
      "img": require('@/assets/text5.png'),
      "child": {
        "index": [],
        "paramName": "",
        "allFresh": false
      },
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/btabs",
      "data": [
        {
          "label": "选项卡1",
          "value":  {
              "id": "",
              "params": {
                  "type": 1
              }
          }
        },
        {
          "label": "选项卡2",
          "value": {
              "id": "",
              "params": {
                  "type": 2
              }
          }
        }
      ],
      "dataFormatter": "",
      "component": {
        "width": 360,
        "height": 34,
        "name": "btabs",
        "prop": "tabs"
      },
      "option": {
        "type": 'tabs',
        "color": "#3C3F43",
        "empColor": "#FFF",
        "fontSize": 14,
        "split": 4,
        "backgroundColor": "#E3E4E6",
        "empBackgroundColor": "#3C90FB",
        "selectBackground": "#f2f2f2",
        "borderRadius": 32
      },
      "index": 36,
      "zIndex": 1
    }
  }, {
    label: '切换卡',
    option: {
      "title": "",
      "name": "切换卡",
      "icon": "icon-tabs",
      "img": require('@/assets/text5.png'),
      "child": {
        "index": [],
        "paramName": "",
        "allFresh": false
      },
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/btabs",
      "data": [
        {
          "label": "选项卡1",
          "value":  {
              "id": "",
              "params": {
                  "type": 1
              }
          }
        },
        {
          "label": "选项卡2",
          "value": {
              "id": "",
              "params": {
                  "type": 2
              }
          }
        }
      ],
      "dataFormatter": "",
      "component": {
        "width": 16,
        "height": 16,
        "name": "bshow",
        "prop": "bshow"
      },
      "option": {
        "type": "cut",
        "chartImage": "",
        "tableImage": "",
      },
      "index": 37,
      "zIndex": 1
    }
  }, {
    "label": '环形进度条',
    "option": {
      "title": "",
      "name": "环形进度条",
      "icon": 'icon-circle',
      "img": require('@/assets/text5.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/bprogress",
      "data": {
        "label": "交易电量",
        "value": 319,
        "data": 15
      },
      "dataFormatter": "",
      "component": {
        "width": 300,
        "height": 300,
        "name": "bprogress",
        "prop": "progress"
      },
      "option": {
        "type": "circle",
        "strokeWidth": 25,
        "color": "#3C3F43",
        "fontSize": 48,
        "fontWeight": "normal",
        "suffixColor": "#797F86",
        "suffixFontSize": 12,
        "suffixFontWeight": "normal",
        "borderColor": "#409EF7",
        "split": 20,
        "descShow": true,
        "descColor": "#3C3F43",
        "descFontSize": 16,
        "descFontWeight": "normal",
        "width": 400,
        "height": 80
      },
    }
  }, {
    "label": '时间选择器',
    "option": {
      "title": "",
      "name": "时间选择器",
      "icon": 'icon-datetime',
      "img": require('@/assets/text5.png'),
      "child": {
        "index": [],
        "paramName": ""
      },
      "top": 78,
      "left": 1604,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/times",
      "data": {
        value: ''
      },
      "dataFormatter": "",
      "time": 0,
      "zIndex": 31,
      "component": {
        "width": 370,
        "height": 60,
        "name": "times",
        "prop": "times",
      },
      "option": {
        "type": false,
        "clearable": false,
        "hour": false,
        "crossYear": false
      }
    }
  }, {
    "label": '单点时间器',
    "option": {
      "title": "",
      "name": "单点时间器",
      "icon": 'icon-datetime',
      "img": require('@/assets/text5.png'),
      "child": {
        "index": [],
        "paramName": ""
      },
      "top": 78,
      "left": 1604,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/times",
      "data": {
        value: ''
      },
      "dataFormatter": "",
      "time": 0,
      "zIndex": 31,
      "component": {
        "width": 370,
        "height": 60,
        "name": "singletimes",
        "prop": "singletimes",
      },
      "option": {
        "type": false,
        "clearable": false,
        "crossYear": false
      }
    }
  }, {
    "label": '复杂表格',
    "option": {
      "title": "",
      "name": "复杂表格",
      "icon": 'icon-table',
      "img": require('@/assets/text5.png'),
      "child": {
        "index": [],
        "paramName": ""
      },
      "top": 0,
      "left": 0,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/ztable",
      "data": {
        current: 1,
        size: 10,
        total: 30,
        tableConfig: [
          { id: 100, label: '序号', prop: 'order', width: '200', align: 'right', gray: false },
          { id: 200, label: '1月', prop: 'type', width: '200', align: 'right', gray: false },
          { id: 200, label: '1月', prop: 'january', width: '200', align: 'right', gray: false },
          { id: 300, label: '2月', prop: 'february', width: '200', align: 'right', gray: false },
          { id: 300, label: '3月', prop: 'march', width: '200', align: 'right', gray: false },
          { id: 300, label: '4月', prop: 'april', width: '200', align: 'right', gray: false },
          { id: 300, label: '5月', prop: 'may', width: '200', align: 'right', gray: false },
          { id: 300, label: '6月', prop: 'june', width: '200', align: 'right', gray: false },
          { id: 300, label: '7月', prop: 'july', width: '200', align: 'right', gray: false },
          { id: 300, label: '8月', prop: 'august', width: '200', align: 'right', gray: false },
          { id: 300, label: '9月', prop: 'september', width: '200', align: 'right', gray: false },
          { id: 300, label: '10月', prop: 'october', width: '200', align: 'right', gray: false },
          { id: 300, label: '11月', prop: 'november', width: '200', align: 'right', gray: false },
          { id: 300, label: '12月', prop: 'december', width: '200', align: 'right', gray: true },
          { id: 300, label: '合计', prop: 'total', width: '200', align: 'right', gray: false },
        ],
        tableData: [
          { id: 1, order: '西电送广东（受端）', type: '电力', january: '1674', february: '1445',
          march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
          september: '3854', october: '3543', november: '2436', december: '2156', total: '', 
          highlight: true, riseHighlightProps: ['may', 'june'], declineHighlightProps: []
          },
          { id: 2, order: '', type: '电量', january: '1674', february: '1445',
          march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
          september: '3854', october: '3543', november: '2436', december: '2156', total: '1907.4',
          highlight: false, riseHighlightProps: [], declineHighlightProps: [],
            children: [
              { id: 11, order: '西电送广东（受端）', type: '电力', january: '1674', february: '1445',
              march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
              september: '3854', october: '3543', november: '2436', december: '2156', total: '',
              highlight: false, riseHighlightProps: [], declineHighlightProps: []},
              { id: 12, order: '', type: '电量', january: '1674', february: '1445',
              march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
              september: '3854', october: '3543', november: '2436', december: '2156', total: '1907.4',
              highlight: false, riseHighlightProps: [], declineHighlightProps: []}
            ]
          },
          { id: 3, order: '西电送广东（受端）', type: '电力', january: '1674', february: '1445',
          march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
          september: '3854', october: '3543', november: '2436', december: '2156', total: '',
          highlight: false, riseHighlightProps: [], declineHighlightProps: ['july']
          },
          { id: 4, order: '', type: '电量', january: '1674', february: '1445',
          march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
          september: '3854', october: '3543', november: '2436', december: '2156', total: '1907.4',
          highlight: false, riseHighlightProps: [], declineHighlightProps: []
          }
        ]
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 1472,
        "height": 400,
        "name": "ztable",
        "prop": "ztable",
      },
      "option": {
        "pageSize": 10,
        "pageShow": false,
        "marginTop": 10,
        "height": 50,
        "stripe": true
      }
    }
  }, {
    "label": '新表格',
    "option": {
      "title": "",
      "name": "新表格",
      "icon": 'icon-table',
      "img": require('@/assets/text5.png'),
      "child": {
        "index": [],
        "paramName": ""
      },
      "top": 0,
      "left": 0,
      "dataType": 1,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/cctable",
      "tdata": {
        tableConfig: []
      },
      "data": {
        current: 1,
        size: 10,
        total: 30,
        tableConfig: [
          {"id": 100,"label": "","prop": "no","width": "","align": "left","children": [],"gray": false},
          {"id": 101,"label": "","prop": "subjectName","width": "","align": "left","children": [],"gray": false},
          {"id": 102,"label": "7月","prop": "july","width": "","align": "left","children": [],"gray": true},
          {"id": 103,"label": "10月","prop": "october","width": "","align": "left","children": [],"gray": true},
          {"id": 104,"label": "2月","prop": "february","width": "","align": "left","children": [],"gray": false},
          {"id": 105,"label": "4月","prop": "april","width": "","align": "left","children": [],"gray": false},
          {"id": 106,"label": "6月","prop": "june","width": "","align": "left","children": [],"gray": true},
          {"id": 107,"label": "8月","prop": "august","width": "","align": "left","children": [],"gray": true},
          {"id": 108,"label": "12月","prop": "december","width": "","align": "left","children": [],"gray": true},
          {"id": 109,"label": "5月","prop": "may","width": "","align": "left","children": [],"gray": false},
          {"id": 110,"label": "11月","prop": "november","width": "","align": "left","children": [],"gray": true},
          {"id": 111,"label": "1月","prop": "january","width": "","align": "left","children": [],"gray": false},
          {"id": 112,"label": "3月","prop": "march","width": "","align": "left","children": [],"gray": false},
          {"id": 113,"label": "9月","prop": "september","width": "","align": "left","children": [],"gray": true},
          {"id": 114,"label": "合计","prop": "total","width": "","align": "left","children": [],"gray": false}
        ],
        tableData: [
          { id: 1, order: '西电送广东（受端）', type: '电力', january: '1674', february: '1445',
          march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
          september: '3854', october: '3543', november: '2436', december: '2156', total: '', 
          highlight: true, riseHighlightProps: ['may', 'june'], declineHighlightProps: []
          },
          { id: 2, order: '', type: '电量', january: '1674', february: '1445',
          march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
          september: '3854', october: '3543', november: '2436', december: '2156', total: '1907.4',
          highlight: false, riseHighlightProps: [], declineHighlightProps: [],
            children: [
              { id: 11, order: '西电送广东（受端）', type: '电力', january: '1674', february: '1445',
              march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
              september: '3854', october: '3543', november: '2436', december: '2156', total: '',
              highlight: false, riseHighlightProps: [], declineHighlightProps: []},
              { id: 12, order: '', type: '电量', january: '1674', february: '1445',
              march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
              september: '3854', october: '3543', november: '2436', december: '2156', total: '1907.4',
              highlight: false, riseHighlightProps: [], declineHighlightProps: []}
            ]
          },
          { id: 3, order: '西电送广东（受端）', type: '电力', january: '1674', february: '1445',
          march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
          september: '3854', october: '3543', november: '2436', december: '2156', total: '',
          highlight: false, riseHighlightProps: [], declineHighlightProps: ['july']
          },
          { id: 4, order: '', type: '电量', january: '1674', february: '1445',
          march: '1925', april: '2255', may: '2834', june: '3461', july: '3616', august: '3630',
          september: '3854', october: '3543', november: '2436', december: '2156', total: '1907.4',
          highlight: false, riseHighlightProps: [], declineHighlightProps: []
          }
        ]
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 1472,
        "height": 400,
        "name": "newtable",
        "prop": "ztable",
      },
      "option": {
        "pageSize": 10,
        "pageShow": false,
        "marginTop": 10,
        "height": 50,
        "stripe": true,
        "dialogShow": false,
        "requestUrl": '',
        "dataMethod": 'get',
        'encrytType': 0,
        'postType': 0,
        "paramName": '',
        "pas": '',
        "tipsData": [] 
      }
    }
  }, {
    "label": 'bview',
    "option": {
      "title": "",
      "name": "bview",
      "icon": 'icon-iframe',
      "img": require('@/assets/text5.png'),
      "top": 0,
      "left": 0,
      "component": {
        "width": 1920,
        "height": 1080,
        "option": {},
        "name": "bview",
        "prop": "bview"
      },
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/",
      "data": {
        "value": '',
        "params": {}
      },
      "dataFormatter": "",
    }
  }, {
    "label": '背景块',
    "option": {
      "title": "",
      "name": "背景块",
      "icon": 'icon-table',
      "img": require('@/assets/text5.png'),
      "top": 0,
      "left": 0,
      "component": {
        "width": 1600,
        "height": 400,
        "name": "bgmodel",
        "prop": "bgmodel",
      },
      "option": {
        "backgroundColor": "#fff",
        "borderRadius": 4,
        "borderColor": "#fff",
        "borderWidth": 0,
        "shadowColor": "rgba(0,0,0,0.06)"
      }
    }
  }]
}, {
  "label": '文本',
  "icon": 'icon-text',
  "children": [{
    "label": '便签块',
    "option": {
      "title": "",
      "name": "便签块",
      "icon": 'icon-progress',
      "img": require('@/assets/text5.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/sticky",
      "data": {
        time: '截止昨日',
        number: '2131',
        precent: 102,
        desctext: '102%',
        onetext: '+34',
        twotext: '-2'
      },
      "dataFormatter": "",
      "component": {
        "width": 517,
        "height": 240,
        "name": "sticky",
        "prop": "sticky",
      },
      "option": {
        "title": "西电东送累计电量",
        "subtitle": "单位：亿千瓦时",
        "descName": "年度计划总量",
        "onedescName": "同比",
        "twodescName": "环比",
        "progressName": "完成率",
        "paddingTop": 20,
        "paddingLeft": 20,
        "backgroundColor": "#409ef7",
        "borderRadius": 4,
        "shadowColor": "#409ef7",
        "mode": false,
        "showProgress": true,
        "titleSize": 24,
        "titleMarginBottom": 10,
        "subtitleSize": 12,
        "subtitleMarginBottom": 20,
        "sticktextSize": 48,
        "sticktextMarginBottom": 32,
        "sticksubTextSize": 16
      },
    }
  }, {
    "label": '空便签',
    "option": {
      "title": "",
      "name": "空便签",
      "icon": 'icon-progress',
      "img": require('@/assets/text5.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/sticky",
      "data": {
        time: '截止昨日',
        number: '2131',
        precent: 102,
        desctext: '102%',
        onetext: '+34',
        twotext: '-2'
      },
      "dataFormatter": "",
      "component": {
        "width": 517,
        "height": 240,
        "name": "ringnotes",
        "prop": "ringnotes",
      },
      "option": {
        "title": "西电东送累计电量",
        "titleColor": "#3C3F43",
        "subtitle": "单位：亿千瓦时",
        "subtitleColor": "#797F86",
        "descName": "年度计划总量",
        "paddingTop": 20,
        "paddingLeft": 20,
        "backgroundColor": "#409ef7",
        "borderRadius": 4,
        "shadowColor": "#409ef7",
        "titleSize": 24,
        "titleMarginBottom": 10,
        "subtitleSize": 12,
        "subtitleMarginBottom": 20,
      },
    }
  },{
    "label": '搜索框',
    "option": {
      "title": "",
      "name": "搜索框",
      "icon": 'icon-text',
      "img": require('@/assets/text5.png'),
      "child": {
        "index": [],
        "paramName": ""
      },
      "top": 78,
      "left": 1604,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/times",
      "data": {
        value: ''
      },
      "dataFormatter": "",
      "time": 0,
      "zIndex": 31,
      "component": {
        "width": 370,
        "height": 60,
        "name": "search",
        "prop": "search",
      },
      "option": {
        "placeholder": "请输入内容"
      }
    }
  }, {
    "label": '组合文本',
    "option": {
      "title": "",
      "name": "组合文本",
      "icon": 'icon-text',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/ztext",
      "data": {
        time: '截至昨日',
        value: '广州交易中心'
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 300,
        "height": 60,
        "name": "ztext",
        "prop": "ztext"
      },
      "option": {
        "timeShow": false,
        "valueShow": false,
        "name": "标题内容",
        "desc": "副标题内容",
        "nameColor": "#3C3F43",
        "nameSize": 24,
        "nametextAlign": "left",
        "namefontWeight": "bold",
        "descColor": "#797F86",
        "descSize": 12,
        "desctextAlign": "left",
        "descfontWeight": "normal",
        "descMarginTop": 10
      },
    },
  }, {
    "label": '得值文本',
    "option": {
      "title": "",
      "name": "得值文本",
      "icon": 'icon-text',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataFormatter": "",
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/datatext",
      "data": {
        value: '3,804'
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 300,
        "height": 60,
        "name": "datatext",
        "prop": "ztext"
      },
      "option": {
        "timeShow": false,
        "name": "标题内容",
        "nameColor": "#797F86",
        "nameSize": 12,
        "nametextAlign": "left",
        "namefontWeight": "normal",
        "descColor": "#3C3F43",
        "descSize": 24,
        "desctextAlign": "left",
        "descfontWeight": "bold",
        "descMarginTop": 10
      },
    },
  }, {
    "label": '文本框',
    "option": {
      "title": "",
      "name": "文本框",
      "icon": 'icon-text',
      "img": require('@/assets/text5.png'),
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataFormatter": "",
      "data": {
        value: '文本框'
      },
      "component": {
        "width": 100,
        "height": 40,
        "name": "btext",
        "prop": "text"
      },
      "option": {
        "textAlign": "center",
        "fontSize": 26,
        "fontWeight": "normal",
        "color": "#fff"
      },
    },
  },{
    "label": '图标块',
    "option": {
      "title": "",
      "name": "图标块",
      "icon": 'icon-img',
      "img": require('@/assets/text5.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/iconblock",
      "data": {
        text: '副标题',
        yoy: '',
        cumu: ''
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 250,
        "height": 80,
        "name": "iconblock",
        "prop": "iconblock",
      },
      "option": {
        "itemMarginRight": 16,
        "title": "标题",
        "duration": '1000',
        "imgWidth": 72,
        "imgHeight": 72,
        "titleSize": 16,
        "titleColor": "#797F86",
        "textSize": 48,
        "textColor": "#3C3F43",
        "image": "",
        "dialogShow": false,
        "dialtitle": "副标题",
        "title1": '减少量',
        "title1Color": '#fff',
        "title2": '同比',
        "title3": '当年累计节约',
      }
    }
  }, {
    "label": '圆点块',
    "option": {
      "title": "",
      "name": "圆点块",
      "icon": 'icon-img',
      "img": require('@/assets/text5.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/iconblock",
      "data": {
        text: '副标题',
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 250,
        "height": 80,
        "name": "roundblock",
        "prop": "roundblock",
      },
      "option": {
        "roundRight": 8,
        "title": "标题",
        "titleSize": 16,
        "titleColor": "#797F86",
        "textSize": 48,
        "textColor": "#3C3F43",
        "backgroundColor": "#409EF7"
      }
    }
  }, {
    "label": '动态圆点块',
    "option": {
      "title": "",
      "name": "动态圆点块",
      "icon": 'icon-img',
      "img": require('@/assets/text5.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "encrytType": 0,
      "postType": 0,
      "dataMethod": 'get',
      "dataQuery": {},
      "url": baseUrl + "/iconblock",
      "data": {
        title: '标题',
        text: '副标题',
      },
      "dataFormatter": "",
      "time": 0,
      "component": {
        "width": 250,
        "height": 80,
        "name": "roundtext",
        "prop": "roundblock",
      },
      "option": {
        "roundRight": 8,
        "title": "标题",
        "titleSize": 16,
        "titleColor": "#797F86",
        "textSize": 48,
        "textColor": "#3C3F43",
        "backgroundColor": "#409EF7"
      }
    }
  }]
},{
  "label": '图表',
  "icon": 'icon-bar',
  "children": [{
    "label": '通用型',
    "option": {
      "name": "通用型",
      "title": "通用型",
      "icon": 'icon-bar',
      "img": require('@/assets/text5.png'),
      "dataType": 1,
      "dataMethod": 'get',
      "data": {
        "categories": [
          "苹果",
          "三星",
          "小米",
          "oppo",
          "vivo"
        ],
        "series": [{
          "name": "手机品牌",
          "data": [
            1000879,
            3400879,
            2300879,
            5400879,
            3400879
          ]
        }]
      },
      "echartFormatter": "(data)=>{\nconsole.log(data);\nreturn {\n            title: {\n\t\t\t\t textStyle: {\n\t\t\t\t\tfontWeight: 'normal',      \n\t\t\t\t\tcolor: '#fff'\n\t\t\t\t},\n                text: 'ECharts 入门示例'\n            },\n            tooltip: {},\n            legend: {\n                data:['销量'],\n\t\t\t\ttextStyle: {\n\t\t\t\t\tfontWeight: 'normal',      \n\t\t\t\t\tcolor: '#fff'\n\t\t\t\t},\n            },\n            xAxis: {\n                data: [\"衬衫\",\"羊毛衫\",\"雪纺衫\",\"裤子\",\"高跟鞋\",\"袜子\"]\n            },\n            yAxis: {},\n            series: [{\n                name: '销量',\n                type: 'bar',\n                data: [5, 20, 36, 10, 10, 20]\n            }]\n        };\n}",
      "url": baseUrl + "/bar",
      "time": 5000,
      "component": {
        "width": 600,
        "height": 300,
        "name": "common",
        "prop": "common",
      },
    }
  }, {
    label: '自定义',
    option: {
      "name": "自定义",
      "title": "自定义",
      "icon": 'icon-bar',
      "img": require('@/assets/text4.png'),
      "data": [],
      "dataFormatter": "",
      "component": {
        "width": 800,
        "height": 500,
        "name": "test",
        "prop": "test",
      },
      "option": {
        "fontSize": 20,
      }
    }
  }, {
    "label": 'datav',
    "option": {
      "name": "datav",
      "title": "datav",
      "icon": 'icon-bar',
      "img": require('@/assets/text6.png'),
      "dataType": 1,
      "dataMethod": 'get',
      "data": {
        "categories": [
          "苹果",
          "三星",
          "小米",
          "oppo",
          "vivo"
        ],
        "series": [{
          "name": "手机品牌",
          "data": [
            1000879,
            3400879,
            2300879,
            5400879,
            3400879
          ]
        }]
      },
      "echartFormatter": "(data)=>{\n  console.log(data);\n  return {\n    config:{\n\t  data: [66] \n\t}\n  }\n}",
      "url": baseUrl + "/bar",
      "time": 5000,
      "component": {
        "width": 150,
        "height": 200,
        "name": "datav",
        "prop": "datav",
      },
      "option": {
        "is": 'dv-water-level-pond'
      }
    }
  }, {
    "label": '柱形图',
    "option": {
      "name": "柱状图",
      "title": "柱状图",
      "icon": 'icon-bar',
      "img": require('@/assets/bar.png'),
      "dataType": 1,
      "dataMethod": 'get',
      "data": {
        "categories": [
          "苹果",
          "三星",
          "小米",
          "oppo",
          "vivo"
        ],
        "series": [{
          "name": "手机品牌",
          "data": [
            1000879,
            3400879,
            2300879,
            5400879,
            3400879
          ]
        }]
      },
      "dataFormatter": "",
      "url": baseUrl + "/bar",
      "time": 5000,
      "component": {
        "width": 600,
        "height": 300,
        "name": "bar",
        "prop": "bar",
      },
      "option": {
        "gridX": 90,
        "gridY": 0,
        "gridX2": 0,
        "gridY2": 0,
        "legend": true,
        "nameColor": "#eee",
        "lineColor": "#eee",
        "xNameFontSize": 16,
        "yNameFontSize": 16,
        "labelShow": true,
        "labelShowColor": '#fff',
        "labelShowFontSize": 14,
        "labelShowFontWeight": 300,
        "yAxisInverse": false,
        "xAxisInverse": false,
        "xAxisShow": true,
        "yAxisShow": true,
        "xAxisSplitLineShow": false,
        "yAxisSplitLineShow": false,
        "barWidth": 30,
        "barRadius": 8,
        "barColor": [{
          "color1": "#83bff6",
          "color2": "#188df0",
          "postion": 90,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#23B7E5",
          "color2": "#564AA3",
          "postion": 50,
          "$index": 1,
          "_show": true
        }],
        "barMinHeight": 2
      }
    }
  }, {
    "label": '折线图',
    "option": {
      "name": "折线图",
      "title": "折线图",
      "icon": 'icon-line',
      "img": require('@/assets/line.png'),
      "dataType": 1,
      "dataMethod": 'get',
      "data": {
        "categories": [
          "苹果",
          "三星",
          "小米",
          "oppo",
          "vivo"
        ],
        "series": [{
          "name": "手机品牌",
          "data": [
            1000879,
            3400879,
            2300879,
            5400879,
            3400879
          ]
        }]
      },
      "dataFormatter": "",
      "url": baseUrl + "/bar",
      "time": 5000,
      "component": {
        "width": 600,
        "height": 300,
        "name": "line",
        "prop": "line",
      },
      "option": {
        "gridX": 90,
        "gridY": 0,
        "gridX2": 0,
        "gridY2": 0,
        "nameColor": "#eee",
        "lineColor": "#eee",
        "lineWidth": 5,
        "xNameFontSize": 16,
        "yNameFontSize": 16,
        "labelShow": false,
        "labelShowFontSize": 14,
        "labelShowFontWeight": 300,
        "yAxisInverse": false,
        "xAxisInverse": false,
        "xAxisShow": true,
        "yAxisShow": true,
        "xAxisSplitLineShow": false,
        "yAxisSplitLineShow": false,
        "barWidth": 30,
        "barRadius": 8,
        "barColor": [{
          "color1": "#83bff6",
          "color2": "#188df0",
          "postion": 90,
          "$index": 0,
          "_show": true
        }, {
          "color1": "#23B7E5",
          "color2": "#564AA3",
          "postion": 50,
          "$index": 1,
          "_show": true
        }],
        "symbolSize": 6,
        "smooth": true,
        "barMinHeight": 2
      }
    }
  }, {
    label: '饼图',
    option: {
      "name": "饼图",
      "title": "饼图",
      "icon": 'icon-pie',
      "img": require('@/assets/pie.png'),
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/pie",
      "data": [{
        "name": "苹果",
        "value": 1000879,
        "url": "http://www.baidu.com"
      }, {
        "name": "三星",
        "value": 3400879,
        "url": "http://www.baidu.com"
      }, {
        "name": "小米",
        "value": 2300879,
        "url": "http://www.baidu.com"
      }, {
        "name": "oppo",
        "value": 5400879,
        "url": "http://www.baidu.com"
      }, {
        "name": "大疆",
        "value": 3000,
        "url": "http://www.baidu.com"
      }, {
        "name": "抖音",
        "value": 2000,
        "url": "http://www.baidu.com"
      }],
      "dataFormatter": "",
      "resize": false,
      "component": {
        "width": 600,
        "height": 300,
        "name": "pie",
        "prop": "pie",
      },
      "option": {
        "legend": true,
        "labelShow": true,
        "barColor": [
          {
            "color1": "#83bff6"
          },
          {
            "color1": "#23B7E5"
          },
          {
            "color1": "rgba(154, 168, 212, 1)"
          },
          {
            "color1": "#188df0"
          },
          {
            "color1": "#564AA3"
          }
        ]
      }
    }
  }, {
    label: '象形图',
    option: {
      "title": "象形图",
      "name": "象形图",
      "icon": "icon-pictorialBar",
      "img": require('@/assets/bar2.png'),
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/pie",
      "data": [{
        "name": "苹果",
        "value": 1000879,
      }, {
        "name": "三星",
        "value": 3400879,
      }, {
        "name": "小米",
        "value": 2300879,
      }, {
        "name": "oppo",
        "value": 5400879,
      }, {
        "name": "大疆",
        "value": 3000,
      }, {
        "name": "抖音",
        "value": 2000,
      }],
      "dataFormatter": "",
      "component": {
        "width": 600,
        "height": 300,
        "name": "pictorialbar",
        "prop": "pictorialbar",
      },
      "option": {
        symbolSize: 30,
        split: 30,
        symbol: '/img/source/source256.png',
        fontSize: '24',
        xAxisShow: false,
        yAxisShow: true,
        color: '#4dffff',
        nameColor: '#564AA3',
        xNameFontSize: '24',
        yNameFontSize: '24',
      }
    }
  }, {
    label: '雷达图',
    option: {
      "title": "雷达图",
      "name": "雷达图",
      "icon": "icon-radar",
      "img": require('@/assets/radar.png'),
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/radar",
      "data": {
        indicator: [{
          name: '销售',
          max: 6500
        },
        {
          name: '管理',
          max: 16000
        },
        {
          name: '信息技术',
          max: 30000
        },
        {
          name: '客服',
          max: 38000
        },
        {
          name: '研发',
          max: 52000
        },
        {
          name: '市场',
          max: 25000
        }
        ],
        series: [{
          data: [{
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '预算分配（Allocated Budget）'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '实际开销（Actual Spending）'
          }
          ]
        }]
      },
      "dataFormatter": "",
      "component": {
        "width": 970,
        "height": 400,
        "name": "radar",
        "prop": "radar",
      },
      "option": {
        width: '100%',
        height: 600,
        titleShow: true,
        title: '各部门开销',
        subtext: '最近一个月',
        titleColor: '#666',
        tipBackgroundColor: 'rgba(50,50,50,0.7)',
        tipColor: "#fff",
        shape: 'polygon',
        radius: "75%",
        splitNumber: 4,
        radarNameColor: '#fff',
        radarNameSize: 18,
        titleFontSize: 18,
        areaOpacity: 0.3,
        legend: true,
        // labelShow: true,
        "barColor": [{
          "color1": "#564AA3",
        },
        {
          "color1": "#188df0",
        }
        ]
      },
    }
  }, {
    label: '散点图',
    option: {
      "title": "散点图",
      "name": "散点图",
      "icon": "icon-scatter",
      "img": require('@/assets/scatter.png'),
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/scatter",
      "data": [{
        "data": [
          [1, 8.04],
          [2, 6.95]
        ]
      },
      {
        "data": [
          [1, 4.04],
          [2, 3.95]
        ]
      }],
      "dataFormatter": "",
      "component": {
        "width": 600,
        "height": 300,
        "name": "scatter",
        "prop": "scatter",
      },
      "option": {
        lineSize: 25,
        barColor: [{
          postion: 0.2,
          color1: '#91c7ae'
        },
        {
          postion: 0.8,
          color1: '#63869e'
        },
        {
          postion: 1,
          color1: '#c23531'
        }]
      }
    }
  }, {
    label: '漏斗图',
    option: {
      "title": "漏斗图",
      "name": "漏斗图",
      "icon": "icon-funnel",
      "img": require('@/assets/funnel.png'),
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/funnel",
      "data": [{
        value: 335,
        name: '直接访问'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 234,
        name: '联盟广告'
      }],
      "dataFormatter": "",
      "component": {
        "width": 400,
        "height": 300,
        "name": "funnel",
        "prop": "funnel",
      },
      "option": {
        radius: true,
        "barColor": [{
          "color1": "#83bff6",
        },
        {
          "color1": "#23B7E5",
        },
        {
          "color1": "rgba(154, 168, 212, 1)",
        },
        {
          "color1": "#188df0",
        },
        {
          "color1": "#564AA3",
        }
        ]
      }
    }
  }, {
    label: '地图',
    option: {
      "name": "地图",
      "title": "地图",
      "icon": "icon-map",
      "img": require('@/assets/map.png'),
      "data": [],
      "dataFormatter": "",
      "component": {
        "width": 800,
        "height": 500,
        "name": "map",
        "prop": "map",
      },
      "option": {
        "borderWidth": 1,
        "scale": 87,
        "type": 0,
        "borderColor": "#0dffff",
        "areaColor": "#061d33",
        "banner": true,
        "bannerTime": 3000,
        "fontSize": 14,
        "zoom": 0.5,
        "empAreaColor": "rgba(35, 183, 229, 0.42)",
        "empColor": "#fff",
        "index": "894edc1d-d2f0-4616-962c-8e61083ada71",
        "mapData": "https://data.bladex.vip/blade-visual/map/data?id=1235103352843448322",
        "color": "rgba(13, 255, 255, 1)",
      }
    },
  }]
}, {
  "label": '文字',
  "icon": 'icon-text',
  "children": [{
    "label": '文本框',
    "option": {
      "title": "文本框",
      "name": "文本框",
      "icon": 'icon-text',
      "img": require('@/assets/text.png'),
      "dataType": 0,
      "dataFormatter": "",
      "data": {
        value: '文本框'
      },
      "component": {
        "width": 100,
        "height": 40,
        "name": "text",
        "prop": "text"
      },
      "option": {
        "textAlign": "center",
        "fontSize": 26,
        "fontWeight": "normal",
        "color": "#fff"
      },
    },
  }, {
    "label": '跑马灯',
    "option": {
      "title": "跑马灯",
      "name": "跑马灯",
      "icon": 'icon-scroll',
      "img": require('@/assets/text2.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        value: "跑马灯"
      },
      "dataFormatter": "",
      "component": {
        "width": 100,
        "height": 50,
        "name": "text",
        "prop": "text"
      },
      "option": {
        scroll: true,
        speed: 70,
        "textAlign": "center",
        "fontSize": 26,
        "fontWeight": "normal",
        "color": "#fff"
      },
    },
  }, {
    "label": '超链接',
    "option": {
      "title": "超链接",
      "name": "超链接",
      "icon": 'icon-link',
      "img": require('@/assets/text3.png'),
      "top": 0,
      "left": 0,
      "data": {
        "value": "超链接"
      },
      "dataFormatter": "",
      "component": {
        "width": 100,
        "height": 50,
        "name": "text",
        "prop": "text"
      },
      "option": {
        link: true,
        linkHref: 'http://avue.top',
        linkTarget: '_self',
        "textAlign": "center",
        "fontSize": 26,
        "fontWeight": "normal",
        "color": "#fff"
      },
    },
  }, {
    "label": '实时时间',
    "option": {
      "name": "实时时间",
      "title": "实时时间",
      "icon": 'icon-datetime',
      "img": require('@/assets/datetime.png'),
      "top": 78,
      "left": 1604,
      "component": {
        "width": 250,
        "height": 50,
        "name": "datetime",
        "prop": "datetime",
      },
      "option": {
        "format": 'yyyy-MM-dd hh:mm:ss',
        "color": "#fff",
        'textAlign': 'left',
        "fontSize": 24,
        "fontWeight": "normal"
      }
    },
  }]
}, {
  "label": '媒体',
  "icon": 'icon-img',
  "children": [{
    "label": '图片',
    "option": {
      "title": "图片",
      "name": "图片",
      "icon": 'icon-img',
      "img": require('@/assets/img.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        value: ''
      },
      "dataFormatter": "",
      "component": {
        "width": 140,
        "height": 140,
        "name": "img",
        "prop": "img",
      },
      "option": {
        duration: '1000',
      }
    }
  }, {
    "label": '图片框',
    "option": {
      "title": "图片框",
      "name": "图片框",
      "icon": 'icon-img',
      "img": require('@/assets/imgborder.png'),
      "top": 0,
      "left": 0,
      "component": {
        "width": 140,
        "height": 140,
        "name": "imgborder",
        "prop": "imgborder",
      },
      "option": {
        backgroundColor: 'rgba(180, 181, 198, 0.1)',
      }
    }
  }, {
    label: '轮播图',
    option: {
      "title": "轮播图",
      "name": "轮播图",
      "icon": 'icon-banner',
      "img": require('@/assets/swiper.png'),
      "top": 0,
      "left": 0,
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/swiper",
      "data": [
        {
          value: 'https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg',
        }, {
          value: 'https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg',
        }],
      "dataFormatter": "",
      "component": {
        "width": 670,
        "height": 370,
        "name": "swiper",
        "prop": "swiper"
      },
      "option": {
        type: '',
        interval: 5000,
        opacity: 100,
        indicator: 'none'
      },
    }
  }, {
    label: 'iframe',
    option: {
      "title": "iframe",
      "name": "iframe",
      "icon": 'icon-iframe',
      "img": require('@/assets/iframe.png'),
      "top": 0,
      "left": 0,
      "component": {
        "width": 670,
        "height": 370,
        "option": {},
        "name": "iframe",
        "prop": "iframe"
      },
      "option": {},
      "dataType": 0,
      "data": {
        value: 'https://avuejs.com'
      },
      "dataFormatter": ""
    }
  }, {
    label: 'video',
    option: {
      "title": "video",
      "name": "video",
      "icon": 'icon-video',
      "img": require('@/assets/video.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        value: 'http://www.w3school.com.cn/i/movie.ogg'
      },
      "option": {},
      "dataFormatter": "",
      "component": {
        "width": 670,
        "height": 370,
        "option": {},
        "name": "video",
        "prop": "video"
      },
    }
  }]
}, {
  "label": '指标',
  "icon": 'icon-flop',
  "children": [{
    "label": '翻牌器',
    "option": {
      "title": "翻牌器",
      "name": "翻牌器",
      "icon": 'icon-flop',
      "img": require('@/assets/flop.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        value: '12345'
      },
      "dataFormatter": "",
      "component": {
        "width": 300,
        "height": 100,
        "name": "flop",
        "prop": "flop",
      },
      "option": {
        "type": "img",
        "suffixText": "",
        "suffixTextAlign": "",
        "suffixSplit": '',
        "suffixColor": "",
        "suffixFontSize": '',
        "borderColor": "#fff",
        "borderWidth": 3,
        "backgroundBorder": "/img/border/border1.png",
        "fontSize": 32,
        "fontWeight": "normal",
        "splitx": 0,
        "splity": 0,
        "backgroundColor": "",
        "color": "#fff"
      },
    }
  }, {
    "label": '颜色块',
    "option": {
      "title": "颜色块",
      "name": "颜色块",
      "icon": 'icon-flop',
      "img": require('@/assets/flop2.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": [{
        "backgroundColor": '#67C23A',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": '#409EFF',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": '#E6A23C',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": '#F56C6C',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": '#7232dd',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }, {
        "backgroundColor": 'blue',
        "prefixText": "某某某总人数",
        "value": '12345',
        "suffixText": '人',
      }],
      "dataFormatter": "",
      "component": {
        "width": 888,
        "height": 203,
        "name": "flop",
        "prop": "flop",
      },
      "option": {
        "span": 3,
        "decimals": 2,
        "whole": true,
        "padding": 12,
        "textAlign": 'left',
        "splity": 23,
        "splitx": 17,
        "fontSize": 28,
        "prefixSplity": 4,
        "prefixFontSize": 13,
        "backgroundColor": "#F56C6C",
        "suffixText": '人',
        "suffixInline": true,
        "suffixSplitx": 10,
        "suffixFontSize": 18,
      },
    }
  }, {
    "label": '环形图',
    "option": {
      "title": "环形图",
      "name": "环形图",
      "icon": 'icon-circle',
      "img": require('@/assets/progress.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": {
        "label": "人数增涨",
        "value": 40,
        "data": 80
      },
      "dataFormatter": "",
      "component": {
        "width": 300,
        "height": 300,
        "name": "progress",
        "prop": "progress"
      },
      "option": {
        "type": "circle",
        "strokeWidth": 25,
        "color": "rgba(154, 168, 212, 1)",
        "fontSize": 40,
        "fontWeight": "normal",
        "suffixColor": "rgba(154, 168, 212, 1)",
        "suffixFontSize": 40,
        "suffixFontWeight": "normal",
        "borderColor": "#564AA3",
        "split": 20,
        "width": 400,
        "height": 80
      },
    }
  }, {
    "label": '进度条',
    "option": {
      "title": "进度条",
      "name": "进度条",
      "icon": 'icon-progress',
      "img": require('@/assets/progress2.png'),
      "top": 0,
      "left": 0,
      "data": {
        "label": "人数增涨",
        "value": 40,
        "data": 80
      },
      "dataFormatter": "",
      "component": {
        "width": 400,
        "height": 100,
        "name": "progress",
        "prop": "progress"
      },
      "option": {
        "type": "line",
        "color": "#fff",
        "fontSize": 24,
        "suffixColor": "#fff",
        "strokeWidth": 13,
        "fontWeight": "normal",
        "borderColor": "#564AA3"
      },
    }
  }, {
    label: '仪表盘',
    option: {
      "title": "仪表盘",
      "icon": 'icon-gauge',
      "img": require('@/assets/gauge.png'),
      "name": "仪表盘",
      "dataType": 1,
      "dataMethod": 'get',
      "time": 5000,
      "url": baseUrl + "/gauge",
      "data": {
        min: 1,
        max: 10,
        label: '名称',
        value: 4,
        unit: '%'
      },
      "dataFormatter": "",
      "component": {
        "width": 390,
        "height": 314,
        "name": "gauge",
        "prop": "gauge"
      },
      "option": {
        "lineSize": 15,
        "axisLabelShow": false,
        "axisLabelFontSize": 25,
        "nameFontSize": 20,
        "valueFontSize": 30,
        "nameColor": "",
        "lineColor": "#eee",
        "barColor": [
          {
            "color1": "rgba(154, 168, 212, 1)",
            "postion": "0.2",
          },
          {
            "color1": "#23B7E5",
            "postion": "0.8",
          },
          {
            "color1": "#564AA3",
            "postion": "1",
          }
        ]
      },
    },
  }, {
    label: '字符云',
    option: {
      "title": "字符云",
      "name": "字符云",
      "icon": "icon-wordCloud",
      "img": require('@/assets/wordcloud.png'),
      "top": 725,
      "left": 3780,
      "dataType": 1,
      "dataMethod": 'get',
      "data": [{
        name: '三星',
        value: '1234'
      }, {
        name: '小米',
        value: '1234'
      }, {
        name: '华为',
        value: '1234'
      }, {
        name: 'oppo',
        value: '1234'
      }, {
        name: '抖音',
        value: '1234'
      }, {
        name: '快手',
        value: '1234'
      }, {
        name: '淘宝',
        value: '1234'
      }, {
        name: '百度',
        value: '1234'
      }, {
        name: '京东',
        value: '1234'
      }, {
        name: '天猫',
        value: '1234'
      }, {
        name: '字符1',
        value: '1234'
      }, {
        name: '字符1',
        value: '1234'
      }],
      "dataFormatter": "",
      "url": baseUrl + "/wordCloud",
      "time": 5000,
      "component": {
        "name": "wordcloud",
        "prop": "wordcloud",
        "width": 600,
        "height": 300,
      },
      option: {
        minFontSize: 30,
        maxFontSize: 80,
        split: 30,
        rotate: true,
      }
    }
  }]
}, {
  "label": '表格',
  "icon": 'icon-table',
  "children": [{
    "label": '表格',
    "option": {
      "title": "表格",
      "name": "表格",
      "icon": 'icon-table',
      "img": require('@/assets/table.png'),
      "top": 0,
      "left": 0,
      "dataType": 0,
      "data": [{
        "type1": '数据1',
        "type2": '数据2'
      }, {
        "type1": '数据1',
        "type2": '数据2'
      }],
      "dataFormatter": "",
      "component": {
        "width": 500,
        "height": 200,
        "name": "table",
        "prop": "table",
      },
      "option": {
        headerBackground: 'rgba(0, 0, 0, 0.01)',
        headerColor: 'rgba(154, 168, 212, 1)',
        headerTextAlign: 'center',
        bodyBackground: 'rgba(0, 0, 0, 0.01)',
        bodyColor: 'rgba(154, 168, 212, 1)',
        borderColor: 'rgba(51, 65, 107, 1)',
        bodyTextAlign: 'center',
        "column": [
          {
            "label": "类型1",
            "prop": "type1"
          },
          {
            "label": "类型2",
            "prop": "type2"
          },
        ]
      }
    }
  }, {
    label: '选项卡',
    option: {
      "title": "选项卡",
      "name": "选项卡",
      "icon": "icon-tabs",
      "img": require('@/assets/tabs.png'),
      "child": {
        "index": [],
        "paramName": ""
      },
      "dataFormatter": "",
      "dataType": 0,
      "data": [
        {
          "label": "选项卡1",
          "value": "1"
        },
        {
          "label": "选项卡2",
          "value": "2"
        }
      ],
      "component": {
        "width": 356.9128919860628,
        "height": 46.209059233449096,
        "name": "tabs",
        "prop": "tabs"
      },
      "option": {
        "type": 'tabs',
        "color": "#eee",
        "empColor": "#4dffff",
        "fontSize": 20,
        "split": 8,
        "empBackgroundImage": "/img/banner/banner5.png",
        "backgroundImage": "/img/banner/banner4.png"
      },
    },
  }]
}]