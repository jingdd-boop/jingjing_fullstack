function myAjax(url) {
  return new Promise((resolve,reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','');
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
    xhr.setRequestHeader();
    xhr.send()
  })
}

var url = 'http://www.baidu.com'
myAjax(url);