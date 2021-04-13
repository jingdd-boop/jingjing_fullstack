function myAjax(url) {
  return new Promise((resolve,reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onreadystatechange(() => {
      if(xhr.readyState !== 4) {
        reject();
      }

      if(status === 200 || status === 304) {
        resolve(xhr.responseText)
      } else {
        reject();
      }
    });
    xhr.responseType = "json"
    xhr.setRequestHeader("Accept","application/json");
    xhr.send()
  })
}
myAjax(url).then(function(json) {
  console.log(json);
},function(error) {
  console.error(error)
})


// 创建XMLHttpRequest对象。
// 设置请求方式。
// 调用回调函数。
// 发送请求。