import Mock from 'mockjs'
import { getResult } from './utils.js'

//环形图
Mock.mock(/\/annular/, 'get', () => {
  const data = [{
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
  }]
  return getResult(data)
})

//象型图
Mock.mock(/\/picBar/, 'get', () => {
  const data = {
    "name": "五省区",
    "value": "1212",
    "ratio": "60%",
  }
  return getResult(data)
})

//桑基图
Mock.mock(/\/bsankey/, 'get', (res) => {
  const data = {
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
  }
  return getResult(data)
})

//堆叠柱状图
Mock.mock(/\/cumulate/, 'get', (res) => {
  const data = {
    "categories": [
      "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
    ],
    "coordRange": ["1月", "7月"],
    "series": [{
      "name": "年度计划",
      "stack": "计划电量",
      "data": [
        0.0, 132, 332, 332, 332, 332, 332, 332, 332, 332, 332, 332
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
  }
  return getResult(data)
})

//渐变柱状图
Mock.mock(/\/gradual/, 'get', (res) => {
  const data = {
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
  }
  return getResult(data)
})

//堆叠柱折图
Mock.mock(/\/ploygonal/, 'get', (res) => {
  const data = {
    "categories": [
      "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
    ],
    "series": [{
        name: '双边协商',
        type: 'bar',
        stack: '电量',
        group: '电量',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      }, {
        name: '双边协商',
        type: 'line',
        stack: '',
        group: '价格',
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }, {
        name: '挂牌交易',
        type: 'bar',
        stack: '电量',
        group: '电量',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      }, {
        name: '挂牌交易',
        type: 'line',
        stack: '',
        group: '价格',
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }, {
        name: '协商交易',
        type: 'bar',
        stack: '电量',
        group: '电量',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      }, {
        name: '协商交易',
        type: 'line',
        stack: '',
        group: '价格',
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }, {
        name: '保底消纳',
        type: 'bar',
        stack: '电量',
        group: '电量',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      }, {
        name: '保底消纳',
        type: 'line',
        stack: '',
        group: '价格',
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  }
  return getResult(data)
})

//渐变柱折图
Mock.mock(/\/gploygonal/, 'get', (res) => {
  const data = {
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
  }
  return getResult(data)
})

//柱折分离图1
Mock.mock(/\/barline/, 'get', (res) => {
  const data = {
    "categories": [
      "2004-01-02", "2004-01-05", "2004-01-06", "2004-01-07", "2004-01-08",
      "2004-01-09", "2004-01-10", "2004-01-11", "2004-01-12", "2004-01-13",
      "2004-01-14", "2004-01-15", "2004-01-16", "2004-01-17", "2004-01-18"
    ],
    "series": {
      "lineValue": { name: '成交价', type: 'line', stack: '', data: [100,110,150,130,140,170,110,120,180,100,160,120,170,160,110] },
      "barValue": { name: '结算电量', type: 'bar', stack: '', data: [12,11,15,13,14,17,11,12,18,10,16,12,17,16,11] },
      "maxValue": { name: '最高价', type: 'line', stack: '', data: [120,130,170,150,160,190,130,140,200,120,180,140,190,180,130] },
      "minValue": { name: '最低价', type: 'bar', stack: '1', data: [80,90,130,110,120,150,90,100,160,120,140,100,150,140,90] },
      "differenceValue": { name: '价差', type: 'bar', stack: '1', data: [40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    }
  }
  return getResult(data)
})

//柱折分离图2
Mock.mock(/\/linebar/, 'get', (res) => {
  const data = {
    "categories": [
      "2004-01-02", "2004-01-05", "2004-01-06", "2004-01-07", "2004-01-08",
      "2004-01-09", "2004-01-10", "2004-01-11", "2004-01-12", "2004-01-13",
      "2004-01-14", "2004-01-15", "2004-01-16", "2004-01-17", "2004-01-18"
    ],
    "series": [
      { name: '电量', type: 'line', stack: '', xaxisIndex: 0, yaxisIndex: 0, data: [100,110,150,130,140,170,110,120,180,100,160,120,170,160,110] },
      { name: '成交价', type: 'line', stack: '', xaxisIndex: 0, yaxisIndex: 0, data: [120,130,170,150,160,190,130,140,200,120,180,140,190,180,130] },
      { name: '电量', type: 'bar', stack: '1', xaxisIndex: 1, yaxisIndex: 1, data: [80,90,130,110,120,150,90,100,160,120,140,100,150,140,90] },
      { name: '成交价', type: 'bar', stack: '1', xaxisIndex: 1, yaxisIndex: 1, data: [40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]},
    ]
  }
  return getResult(data)
})

//便签块
Mock.mock(/\/sticky/, 'get', (res) => {
  const data = {
    time: '截止昨日',
    number: '2131',
    precent: 102,
    desctext: '102%',
    onetext: '+34',
    twotext: '-2'
  }
  return getResult(data)
})

//步骤条
Mock.mock(/\/steps/, 'get', () => {
  const data = { 
    active: 2,
    stepData: [
      { title: '计量数据采集', description: '12工作日' },
      { title: '电量分割计算', description: '8工作日' },
      { title: '发布结算依据初稿', description: '进行中' },
      { title: '市场主体确认', description: '待开始' },
      { title: '发布结算依据', description: '待开始' }
    ]
  }
  return getResult(data)
})

//选项卡
Mock.mock(/\/btabs/, 'get', () => {
  const data = [
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
  ]
  return getResult(data)
})

//环形进度条
Mock.mock(/\/bprogress/, 'get', () => {
  const data = {
    "label": "交易电量",
    "value": 319,
    "data": 15
  }
  return getResult(data)
})

//图标块
Mock.mock(/\/iconblock/, 'get', () => {
  const data = {
    text: '副标题',
    value: ''
  }
  return getResult(data)
})

//时间选择器
Mock.mock(/\/times/, 'get', () => {
  const data = {
    value: ''
  }
  return getResult(data)
})

//复杂表格
Mock.mock(/\/ztable/, 'get', () => {
  const data = {
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
  }
  return getResult(data)
})

Mock.mock(/\/ctable/, 'get', () => {
  const data = {
    tableConfig: [
      { id: 100, label: '一级表头', prop: '', width: '200', align: 'right' ,
        children:[
          { id: 110, label: '', prop: 'name', width: '200', align: 'left' },
          { id: 120, label: '二级表头2', prop: 'age', width: '200', align: 'right' },
        ]
      },
      { id: 200, label: '一级表头', prop: '', width: '200', align: 'right',
        children:[
          { id: 210, label: '二级表头1', prop: '', width: '200', align: 'right',
            children: [
              { id: 211, label: '三级级表头1', prop: 'time', width: '200', align: 'right' },
              { id: 212, label: '三级表头1', prop: 'adrress', width: '200', align: 'right' }
            ]
          },
        ]
      },
      { id: 300, label: '一级表头', prop: '', width: '200', align: 'right',
        children:[
          { id: 310, label: '二级表头1', prop: 'phone', width: '200', align: 'right' },
        ]
      },
    ],
    tableData: [
      { id: 1, name: 'blue', age: '18', time: '5:00', address: '广州', phone: 'zzz',
        children: [
          { id: 11, name: 'blue', age: '18', time: '5:00', address: '广州', phone: 'zzz'},
          { id: 12, name: 'blue', age: '18', time: '5:00', address: '广州', phone: 'zzz'}
        ]
      },
      { id: 2, name: 'blue', age: '18', time: '5:00', address: '广州', phone: 'zzz'},
      { id: 3, name: 'blue', age: '18', time: '5:00', address: '广州', phone: 'zzz'}
    ]
  }
  return getResult(data)
})

//组合文本
Mock.mock(/\/ztext/, 'get', (res) => {
  const data = {
    time: '截至昨日'
  }
  return getResult(data)
})

//得值文本
Mock.mock(/\/datatext/, 'get', (res) => {
  const data = {
    value: '3,804'
  }
  return getResult(data)
})




//柱状图
Mock.mock(/\/bar/, 'get', (res) => {
  const data = {
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
  }
  return getResult(data)
})
//折线图
Mock.mock(/\/line/, 'get', () => {
  const data = {
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
  }
  return getResult(data)
})
//饼图图
Mock.mock(/\/pie/, 'get', () => {
  const data = [{
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
  }]
  return getResult(data)
})
//表格1
Mock.mock(/\/table1/, 'get', () => {
  const data = [
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    },
    {
      "jg": "开源中国",
      "je": "12345/2333",
      "sy": "<span>-26%</span>/+5%",
      "yx": "12345/2333",
      "jnc": "-26%/+5%",
      "jl": "smallwei"
    }
  ]
  return getResult(data)
})
//表格2
Mock.mock(/\/table2/, 'get', () => {
  const data = [{
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }, {
    name: "smallwei",
    sj: "60",
    type: "抵押",
    je: "32400",
    jg: "开源中国",
    jl: "smallwei"
  }]
  return getResult(data)
})
//翻牌器
Mock.mock(/\/table3/, 'get', () => {
  const data = [{
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }]
  return getResult(data)
})
//表格4
Mock.mock(/\/table4/, 'get', () => {
  const data = [{
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }, {
    "suffixText": "申请户数(时)",
    "data": 2333
  }]
  return getResult(data)
})

//字符云
Mock.mock(/\/wordCloud/, 'get', () => {
  const data = [{
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
  }]
  return getResult(data)
})
//象型图
Mock.mock(/\/pictorialBar/, 'get', () => {
  const data = {
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
  }
  return getResult(data)
})
//雷达图
Mock.mock(/\/radar/, 'get', () => {
  const data = {
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
  }
  return getResult(data)
})
//散点图
Mock.mock(/\/scatter/, 'get', () => {
  const data = [{
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
  }]
  return getResult(data)
})
//仪表盘
Mock.mock(/\/gauge/, 'get', () => {
  const data = {
    min: 1,
    max: 10,
    label: '名称',
    value: 4,
    unit: '%'
  }
  return getResult(data)
})
//轮播图
Mock.mock(/\/swiper/, 'get', () => {
  const data = [
    {
      value: 'https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg',
    }, {
      value: 'https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg',
    }]
  return getResult(data)
})
//漏斗图
Mock.mock(/\/funnel/, 'get', () => {
  const data = [{
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
  }]
  return getResult(data)
})

