function myajax(url) {
  return new Promise((resolve,reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,false);
    xhr.setRequestHeader('Accept','application/json');
    xhr.onreadystatechange = function() {
      if(xhr.readyState !== 4) return ;
      if(xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText)
      } else {
        reject()
      }
    }
    xhr.send();
  })
}