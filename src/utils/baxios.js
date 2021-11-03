import crypto from '@/utils/crypto'
import qs from 'qs'
import axios from 'axios'

export const bAxios = (ele, params) => {
    // console.log(params)
    if (ele.encrytType && ele.encrytType === 1) {
        params = crypto.encryptAES(JSON.stringify(params));//加密才需要
    }else if (ele.encrytType && this.encrytType === 2) {
        params = crypto.encryptDES(JSON.stringify(params));//加密才需要
    }
    return axios[ele.method](ele.url, (() => {
        if (ele.method === 'get') {
          return {
            dec: ele.encrytType,
            params: { data: params }
          }
        } else if (ele.method === 'post') {
          if (ele.postType === 1) {
            return params;
          } else {
            return qs.stringify({ data: params });
          }
        }
      })(), (() => {
        if (ele.encrytType === 1 && ele.method === 'post') {
          let textType = ele.postType === 1 ? true : false
          return { text: textType, dec: ele.encrytType}
        } else if (ele.encrytType === 2 && ele.method === 'post') {
          let textType = ele.postType === 1 ? true : false
          return { text: textType, dec: ele.encrytType}
        } else {
          return { dec: ele.encrytType }
        }
      })())
}
