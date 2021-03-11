const getJson = function(url) {
  return new Promise((resolve,reject) => {
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Mscrosoft.XMLHttp')
    xhr.open('GET',url,false);
    xhr.setRequestHeader('Accept','application/json');
    xhr.onreadystatechange = function() {
      if(xhr.readyState !== 4) return;
      if(xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    }
    xhr.send();
  })
}

// （1）onreadystatechange:用于设置事件处理函数；
// （2）readystate:用于返回Ajax请求的处理状态，readystate属性共有5种取值：

// 0：请求未初始化
// 1：服务器连接建立；
// 2：请求已接收
// 3：请求处理种
// 4：请求已完成，且响应已就绪
// （3）status：用于返回服务器处理HTTP状态码；
// （4）responseText和responseXML：用于获取服务器对HTTP请求的响应内容。如果响应内容是普通文本字符串则是第一个，如果是XML格式的则为第二个。
