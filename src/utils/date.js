export const calcDate = (date1, date2) => {
    let date3 = date2 - date1;
  
    let days = Math.floor(date3 / (24 * 3600 * 1000))
  
    let leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))
  
    let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))
  
    let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    let seconds = Math.round(date3 / 1000)
    return {
      leave1,
      leave2,
      leave3,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }
  
  /**
   * 日期格式化
   */
  export function dateFormat(date, format) {
    format = format || 'yyyy-MM-dd hh:mm:ss';
    if (date !== 'Invalid Date') {
      let o = {
        "M+": date.getMonth() + 1, //month
        "d+": date.getDate(), //day
        "h+": date.getHours(), //hour
        "m+": date.getMinutes(), //minute
        "s+": date.getSeconds(), //second
        "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
        "S": date.getMilliseconds() //millisecond
      }
      if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (let k in o)
        if (new RegExp("(" + k + ")").test(format))
          format = format.replace(RegExp.$1,
            RegExp.$1.length === 1 ? o[k] :
              ("00" + o[k]).substr(("" + o[k]).length));
      return format;
    }
    return '';
  
  }
   /**
   * 获取两天前日期
   */
  export function gethoursDate (date, format) {
    let nowDate = date.getTime();
    let dates = new Date(nowDate - (2 * 3600 * 24 * 1000));
    return dateFormat(dates, format)
  }  
  /**
   * 获得某月的天数
   */
  export function getMonthDays(myMonth){
    let date = new Date();
    let nowYear = date.getYear();
    nowYear += (nowYear < 2000) ? 1900 : 0;
    var monthStartDate = new Date(nowYear, myMonth, 1);
    var monthEndDate = new Date(nowYear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24);
    return days;
  }
  /**
   * 获取本月开端日期
   */
  export function getMonthStartDate (date, format) {
    let nowYear = date.getYear();
    nowYear += (nowYear < 2000) ? 1900 : 0;
    let monthStartDate = new Date(nowYear, date.getMonth(), 1);
    return dateFormat(monthStartDate, format)
  }  
  /**
   * 获取本月停止日期
   */
  export function getMonthEndDate(date, format){
    let nowYear = date.getYear();
    nowYear += (nowYear < 2000) ? 1900 : 0;
    let monthEndDate = new Date(nowYear, date.getMonth(), getMonthDays(date.getMonth()));
    return dateFormat(monthEndDate, format);
  }
  /**
   * 获取本年第一天
   */
  export function getFirstDayYear(date, format){
    date.setDate(1);
    date.setMonth(0);
    return dateFormat(date, format)
  }