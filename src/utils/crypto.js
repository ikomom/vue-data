import CryptoJS from 'crypto-js'

;var encode_version = 'jsjiami.com.v5', kzxek = '__0xa90fc',  __0xa90fc=['w7vCgyvCq8OAwoHDpjPCmjEMwqRbfg==','54ub5p2H5Y6X77+AK07kv7Dlr5Lmn43lv53nqoDvv5Dov6vorZnmlZPmjZ3mir7kuJ/nm6jlt57kvKk=','5YmZ6Zmb54iR5p2r5Yyp77+DB2vkvJrlrJ3mnLrlv6fnqK0=','w789wphbIQ==','wqgxw58Hwqg=','wpfDmsKrfDc=','w5srI29n','w7HCrcKHw78b','Oj4hwr4U','ZsKiesOQCg==','FAkpw6jClA==','H8K8wrZhcsOTwqnCrSwYwoRSIHZqacOga8OVwqZQwoEYOcKdwrnCuMOiYBnDiDE=','X8KQAcO5wodZWRXCiEvCmzMRwpwOZA==','wr/CgMKB','ACkQwrEQIkUuYQ=='];(function(_0x509692,_0x448c56){var _0x44ffa3=function(_0x15bbd8){while(--_0x15bbd8){_0x509692['push'](_0x509692['shift']());}};_0x44ffa3(++_0x448c56);}(__0xa90fc,0x155));var _0x5531=function(_0x30fcda,_0x1e3d0d){_0x30fcda=_0x30fcda-0x0;var _0x126fcc=__0xa90fc[_0x30fcda];if(_0x5531['initialized']===undefined){(function(){var _0x3549d4=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3e02a4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3549d4['atob']||(_0x3549d4['atob']=function(_0x2fa5fe){var _0x2a31c0=String(_0x2fa5fe)['replace'](/=+$/,'');for(var _0x283aab=0x0,_0x1092e8,_0x46944c,_0x3dccf5=0x0,_0x2ec926='';_0x46944c=_0x2a31c0['charAt'](_0x3dccf5++);~_0x46944c&&(_0x1092e8=_0x283aab%0x4?_0x1092e8*0x40+_0x46944c:_0x46944c,_0x283aab++%0x4)?_0x2ec926+=String['fromCharCode'](0xff&_0x1092e8>>(-0x2*_0x283aab&0x6)):0x0){_0x46944c=_0x3e02a4['indexOf'](_0x46944c);}return _0x2ec926;});}());var _0x2da151=function(_0x439a08,_0x49b4c6){var _0x2721a5=[],_0x3ade81=0x0,_0x1bced3,_0x4de149='',_0x1c623d='';_0x439a08=atob(_0x439a08);for(var _0x25f81b=0x0,_0x391be0=_0x439a08['length'];_0x25f81b<_0x391be0;_0x25f81b++){_0x1c623d+='%'+('00'+_0x439a08['charCodeAt'](_0x25f81b)['toString'](0x10))['slice'](-0x2);}_0x439a08=decodeURIComponent(_0x1c623d);for(var _0x48deef=0x0;_0x48deef<0x100;_0x48deef++){_0x2721a5[_0x48deef]=_0x48deef;}for(_0x48deef=0x0;_0x48deef<0x100;_0x48deef++){_0x3ade81=(_0x3ade81+_0x2721a5[_0x48deef]+_0x49b4c6['charCodeAt'](_0x48deef%_0x49b4c6['length']))%0x100;_0x1bced3=_0x2721a5[_0x48deef];_0x2721a5[_0x48deef]=_0x2721a5[_0x3ade81];_0x2721a5[_0x3ade81]=_0x1bced3;}_0x48deef=0x0;_0x3ade81=0x0;for(var _0x4f46a6=0x0;_0x4f46a6<_0x439a08['length'];_0x4f46a6++){_0x48deef=(_0x48deef+0x1)%0x100;_0x3ade81=(_0x3ade81+_0x2721a5[_0x48deef])%0x100;_0x1bced3=_0x2721a5[_0x48deef];_0x2721a5[_0x48deef]=_0x2721a5[_0x3ade81];_0x2721a5[_0x3ade81]=_0x1bced3;_0x4de149+=String['fromCharCode'](_0x439a08['charCodeAt'](_0x4f46a6)^_0x2721a5[(_0x2721a5[_0x48deef]+_0x2721a5[_0x3ade81])%0x100]);}return _0x4de149;};_0x5531['rc4']=_0x2da151;_0x5531['data']={};_0x5531['initialized']=!![];}var _0xecf8d4=_0x5531['data'][_0x30fcda];if(_0xecf8d4===undefined){if(_0x5531['once']===undefined){_0x5531['once']=!![];}_0x126fcc=_0x5531['rc4'](_0x126fcc,_0x1e3d0d);_0x5531['data'][_0x30fcda]=_0x126fcc;}else{_0x126fcc=_0xecf8d4;}return _0x126fcc;};var aesKey=_0x5531('0x0','Yo2L');var desKey=_0x5531('0x1','3bqf');;(function(_0x4cf89f,_0x36f0e7,_0x326666){var _0x326485={'FTGzn':_0x5531('0x2','CP))'),'ChLgV':function _0x43571d(_0x4f6c31,_0xabe750){return _0x4f6c31!==_0xabe750;},'qVSub':_0x5531('0x3','#55%'),'cVvke':function _0xc8af80(_0x3d86bf,_0x1fb72a){return _0x3d86bf===_0x1fb72a;},'nzdap':_0x5531('0x4','UrpU'),'OyUjb':function _0x497dcc(_0x19ca22,_0x19b9dc){return _0x19ca22+_0x19b9dc;},'Jaxeg':_0x5531('0x5','5X(m'),'RLPEN':_0x5531('0x6','3nvo')};_0x326666='al';try{_0x326666+=_0x326485[_0x5531('0x7','mZmD')];_0x36f0e7=encode_version;if(!(_0x326485[_0x5531('0x8','#HQQ')](typeof _0x36f0e7,_0x326485[_0x5531('0x9','X@DC')])&&_0x326485[_0x5531('0xa','RJ6T')](_0x36f0e7,_0x326485[_0x5531('0xb','#pMf')]))){_0x4cf89f[_0x326666](_0x326485[_0x5531('0xc','#55%')]('删除',_0x326485[_0x5531('0xd','KJ8!')]));}}catch(_0x42ecf3){_0x4cf89f[_0x326666](_0x326485[_0x5531('0xe','87tM')]);}}(window));;encode_version = 'jsjiami.com.v5';

export default class crypto {
  // 使用AesUtil.genAesKey()生成,需和后端配置保持一致
  //static aesKey = "";

  // 使用DesUtil.genDesKey()生成,需和后端配置保持一致
  //static desKey = "";

  /**
   * aes 加密方法，同java：AesUtil.encryptToBase64(text, aesKey);
   */
  static encryptAES(data, key = aesKey) {
    const dataBytes = CryptoJS.enc.Utf8.parse(data);
    const keyBytes = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.AES.encrypt(dataBytes, keyBytes, {
      iv: keyBytes,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  }

  /**
   * aes 解密方法，同java：AesUtil.decryptFormBase64ToString(encrypt, aesKey);
   */
  static decryptAES(data, key = aesKey) {
    const keyBytes = CryptoJS.enc.Utf8.parse(key);
    const decrypted = CryptoJS.AES.decrypt(data, keyBytes, {
      iv: keyBytes,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypted);
  }

  /**
   * des 加密方法，同java：DesUtil.encryptToBase64(text, desKey)
   */
  static encryptDES(data, key = desKey) {
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.DES.encrypt(data, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  /**
   * des 解密方法，同java：DesUtil.decryptFormBase64(encryptBase64, desKey);
   */
  static decryptDES(data, key = desKey) {
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const decrypted = CryptoJS.DES.decrypt({
      ciphertext: CryptoJS.enc.Base64.parse(data)
    }, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
