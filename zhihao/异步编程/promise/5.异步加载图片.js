let pictrue = function(url) {
  return new Promise(function(resolve,reject) {
    let img = new Image;

    img.onload = function() {
      resolve(img)
    }
    img.onerror = function() {
      reject('shibai')
    }

    image.src = url;
  })
}
//如果加载成功，就调用resolve方法，否则就调用reject方法。