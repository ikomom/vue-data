

export const uuid = () => {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}
export const compare = (propertyName) => {
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];
    if (value2 < value1) {
      return -1;
    } else if (value2 > value1) {
      return 1;
    } else {
      return 0;
    }
  }
}

export const stringify = (json) => {
  let count = 0;
  let list = [];
  let str = JSON.stringify(json, function (key, val) {
    if (typeof val === 'function') {
      list.push(val + '');
      const result = '$code{' + count + '}$code'
      count = count + 1;
      return result
    }
    return val;
  }, 2);
  let startCode = '$code{';
  let endCode = '}$code';
  list.forEach((ele, index) => {
    str = str.replace(startCode + index + endCode, startCode + ele + endCode)
  })
  for (let i = 0; i < count; i++) {
    str = str.replace('"' + startCode, '').replace(endCode + '"', '')
  }
  return str
}

export const parse = (str) => {
  return JSON.parse(str, function (k, v) {
    if (v.indexOf && v.indexOf('function') > -1) {
      return eval("(function(){return " + v + " })()")
    }
    return v;
  });
}
export const addUrlParam = (url, param, value) => {
  if (!url) return
  function GetQueryString (name) {
    var num = url.indexOf("?")
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = url.substr(num + 1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }
  function replaceParamVal (paramName, value) {
    var re = eval('/(' + paramName + '=)([^&]*)/gi');
    return url.replace(re, paramName + '=' + value);
  }
  if (GetQueryString(param)) {
    return replaceParamVal(param, value)
  } else {
    if (url.includes('?')) {
      url = url + '&' + param + '=' + value
    } else {
      url = url + '?' + param + '=' + value
    }
    return url;
  }

}

//数据类型判断
export const getDataType = (item) => {
  if (typeof item == 'object') {
    if (typeof item.length == 'number') {
      return 'Array';
    }else {
      return 'Object';
    }
  }else {
    return 'param is no object type';
  }
}

/**简易防抖 */
export const debounce = (fn, delay=100) => {
  let timer = null;
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this, args)
    }, delay)
  }
}

/**数组合并并去重 */
export const merfeArray = (arr1, arr2) => {
  let _arr = new Array();
  for(let i = 0; i < arr1.length; i++){
    _arr.push(arr1[i]);
  }
  for(let i = 0; i < arr2.length; i++){
    let flag = true;
    for(let j = 0; j < arr1.length; j++){
      if(arr2[i]==arr1[j]){
        flag = false;
        break;
      }
    }
    if(flag){
      _arr.push(arr2[i])
    }
  }
  return _arr;
}