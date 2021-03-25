function myajax(url) {
  return new Promise((reslove, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open();
    xhr.setRequestHeader();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200 || xhr.status === 304) {
        reslove(xhr.responseText);
      } else {
        reject();
      }
    };
    xhr.send();
  });
}
