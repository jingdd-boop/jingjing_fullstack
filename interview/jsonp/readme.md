# 跨域
- 后端的跨域解决方案
- jsonp json with padding

同源机制的概念
同协议 端口 域名

1、通过script src img href 跨域方式向 sina 发送请求 http
规避了js代码 xhr XHR fetch 被同源机制管到了  
json js代码能够使用

2、&callback=callback 
告诉服务器，在页面上有一个callback的函数，可以等待调用
;callback({data: Array(15)})

3、callback({data})   JSONP + padding

4、xhr/fetch 因js运行在沙箱里面，同源机制 无法请求跨域资源
回到 使用script标签, html规定的 有跨域访问资源的能力，当它发出http请求 
带上&callback=callback 这个padding ，服务器就在json数据外面包一层callback函数，将这个带有padding的数据，可以在script得到后运行的函数，页面上一级准备好了这个函数，从而效果一样。
