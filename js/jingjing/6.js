function duplicateCount(text) {
  var str = text.toLowerCase().split('').sort()
  
  var reg = /(\d{4})-(\d{2})-(\d{2})/;
  var dateStr = '2018-04-18';
  reg.test(dateStr);  
  console.log(RegExp.$1)   
  
  var arr = str.match(/([-])\1+/g);
  console.log(str)
  
}


console.log(duplicateCount('aadsdjfwuhh')) 