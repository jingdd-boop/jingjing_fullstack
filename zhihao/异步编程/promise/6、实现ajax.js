/**
 * 1、new 一个新的xhr对象
 * 2、open ("GET", url);
 * 3、onreadystatechange
 *  - readtState
 *  - status
 * 4、responseType("json")
 * 5、setRequestHeader("Accept", "application/json");
 * 
 */

const getJson = function(url) {
  const promise =  new Promise(function(resolve,reject) {
    let hander = function() {
      if(this.readystate !== 4) {
        return ;
      }

      if(this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText));
      }
    }

    let xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onreadystatechange = hander;
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send()
  })
  return promise
}


getJson("/posts.json").then(function (json) {
  console.log('Contents: ' + json);
},function(error) {
  console.error('出错了', error);
})
