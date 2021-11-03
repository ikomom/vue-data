import { validatenull } from './validate';
import { DIC_PROPS, DIC_SPLIT } from '../global/variable';
const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
};
export function getFixed(val, len = 2) {
  return Number(val.toFixed(len));
}
export function dataURLtoFile(dataurl, filename) {
  let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {
    type: mime
  });
}
/**
 * 生成随机数
 */
export function randomId() {
  let $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let maxPos = $chars.length;
  let id = '';
  for (let i = 0; i < 16; i++) {
    id += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return id;
}
export const getObjType = obj => {
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  if (obj instanceof Element) {
    return 'element';
  }
  return map[toString.call(obj)];
};
/**
 *判断是否为json对象
 */

export const isJson = str => {
  if (Array.isArray(str)) {
    if (str[0] instanceof Object) {
      return true;
    } else {
      return false;
    }
  } else if (str instanceof Object) {
    return true;
  }
  return false;
};
/**
 * 对象深拷贝
 */
export const deepClone = data => {
  var type = getObjType(data);
  var obj;
  if (type === 'array') {
    obj = [];
  } else if (type === 'object') {
    obj = {};
  } else {
    // 不再具有下一层次
    return data;
  }
  if (type === 'array') {
    for (var i = 0, len = data.length; i < len; i++) {
      data[i] = (() => {
        if (data[i] === 0) {
          return data[i];
        }
        return data[i];
      })();
      delete data[i].$parent;
      obj.push(deepClone(data[i]));
    }
  } else if (type === 'object') {
    for (var key in data) {
      delete data.$parent;
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
};
/**
 * 根据字段数组排序
 */
export const sortArrys = (list, prop) => {
  list.sort(function(a, b) {
    if (a[prop] > b[prop]) {
      return -1;
    }
    if (a[prop] < b[prop]) {
      return 1;
    }
    return 0;
  });
  return list;
};

/**
 * 设置px像素
 */
export const setPx = (val, defval = '') => {
  if (validatenull(val)) val = defval;
  if (validatenull(val)) return '';
  val = val + '';
  if (val.indexOf('%') === -1) {
    val = val + 'px';
  }
  return val;
};

/**
 * 字符串数据类型转化
 */
export const detailDataType = (value, type) => {
  if (type === 'number') {
    return Number(value);
  } else if (type === 'string') {
    return value + '';
  } else {
    return value;
  }
};
// 获取url中的参数
export const getUrlParams = (url) => {
  let result = {
    url: '',
    params: {}
  };
  let list = url.split('?');
  result.url = list[0];
  let params = list[1];
  if (params) {
    let list = params.split('&');
    list.forEach(ele => {
      let dic = ele.split('=');
      let label = dic[0];
      let value = dic[1];
      result.params[label] = value;
    });
  }
  return result;
};
/**
 * 数组的数据类型转化
 */
export const detailDic = (list = [], props = {}, type) => {
  let valueKey = props.value || DIC_PROPS.value;
  let childrenKey = props.children || DIC_PROPS.children;
  list.forEach(ele => {
    ele[valueKey] = detailDataType(ele[valueKey], type);
    if (ele[childrenKey]) detailDic(ele[childrenKey], props, type);
  });
  return list;
};
/**
 * 根据字典的value显示label
 */

export const findByValue = (dic, value, props, isTree) => {
  // 如果为空直接返回
  if (validatenull(dic)) return value;
  let result = '';
  props = props || DIC_PROPS;
  if (value instanceof Array) {
    result = [];
    for (let i = 0; i < value.length; i++) {
      const dicvalue = value[i];
      if (isTree) {
        result.push(findLabelNode(dic, dicvalue, props) || dicvalue);
      } else {
        result.push(findArrayLabel(dic, dicvalue, props));
      }
    }
    result = result.join(DIC_SPLIT).toString();

  } else if (['string', 'number', 'boolean'].includes(typeof value)) {
    result = findLabelNode(dic, value, props) || value;
  }
  return result;
};
/**
 * 过滤字典翻译字段和空字段
 */
export const filterDefaultParams = (form, translate = true) => {
  let data = deepClone(form);
  if (translate) return data;
  for (let o in data) {
    if (o.indexOf('$') !== -1 || validatenull(data[o])) {
      delete data[o];
    }
  }
  return data;
};
/**
 * 处理存在group分组的情况
 */
export const detailDicGroup = (dic) => {
  dic = deepClone(dic);
  let list = [];
  if ((dic[0] || {}).groups) {
    dic.forEach(ele => {
      if (ele.groups) {
        list = list.concat(ele.groups);
      }
    });
    return list;
  }
  return dic;
};
/**
 * 根据label去找到节点
 */
export const findLabelNode = (dic, value, props) => {
  dic = detailDicGroup(dic);
  let result = '';
  let rev = (dic1, value1, props1) => {
    const labelKey = props1.label || DIC_PROPS.label;
    const valueKey = props1.value || DIC_PROPS.value;
    const childrenKey = props1.children || DIC_PROPS.children;
    for (let i = 0; i < dic1.length; i++) {
      const ele = dic1[i];
      const children = ele[childrenKey] || [];
      if (ele[valueKey] === value1) {
        result = ele[labelKey];
      } else {
        rev(children, value1, props1);
      }
    }
  };
  rev(dic, value, props);
  return result;
};
/**
 * 获取多层data
 */
export const getDeepData = (res) => {
  return (Array.isArray(res) ? res : res.data) || [];
};
export const getObjValue = (data, params = '', type) => {
  const list = params.split('.');
  let result = data;
  if (list[0] === '' && type !== 'object') {
    return getDeepData(data);
  } else if (list[0] !== '') {
    list.forEach(ele => {
      result = result[ele];
    });
  }
  return result;
};
/**
 * 根据字典的value查找对应的index
 */
export const findArrayLabel = (dic, value, props) => {
  dic = detailDicGroup(dic);
  const valueKey = props.value || DIC_PROPS.value;
  const labelKey = props.label || DIC_PROPS.label;
  for (let i = 0; i < dic.length; i++) {
    if (dic[i][valueKey] === value) {
      return dic[i][labelKey];
    }
  }
  return value;
};
/**
 * 根据值查找对应的序号
 */
export const findArray = (dic, value, valueKey) => {
  dic = detailDicGroup(dic);
  valueKey = valueKey || DIC_PROPS.value;
  for (let i = 0; i < dic.length; i++) {
    if (dic[i][valueKey] === value) {
      return i;
    }
  }
  return -1;
};
/**
 * 根据位数获取*密码程度
 */
export const getPasswordChar = (result = '', char) => {
  let len = result.toString().length;
  result = '';
  for (let i = 0; i < len; i++) {
    result = result + char;
  }
  return result;
};

/**
 * 验证是否存在true/false
 */
export const vaildData = (val, dafult) => {
  if (typeof val === 'boolean') {
    return val;
  }
  return !validatenull(val) ? val : dafult;
};
