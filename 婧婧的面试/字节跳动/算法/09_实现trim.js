String.prototype.trim = function() {
  return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
// [\s]表示，只要出现空白就匹配
// [\S]表示，非空白就匹配

// \w 匹配包括下划线的任何单词字符。等价于“[A-Za-z0-9_]"。
// \W 匹配任何非单词字符。等价于“[^A-Za-z0-9_]"。
//^	匹配输入字符串的开始位置
//$	匹配输入字符串的结束位置。
var str = "      orho  "
console.log(str)
console.log(str.trim()) 