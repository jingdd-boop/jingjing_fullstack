# js 常考考点
《JsonServer + XMLHttpRequest/Ajax 数据通信初体验》

- 要加一个用户怎么办

es6 /红宝书 你不知道的javascritp
单线程的语言 数据通信相关
1、 npm init -y
2、npm i json-server
来个命令行，怎么启动db.json 成后台数据源？
http server 300/users db.json 做数据源
提供出来访问， 后台准备好了

http GET http://localhost:3000/users users[]
POST 保存表单 name ->  http://localhost:3000/users

```js
 "scripts": {
   "server:json":"json-server --watch db.json"
  },

   "scripts": {
   "server:json":"json-server --watch --port 1234 db.json"
  },
  //自己选择端口
```
3、db.json 数据文件
json 是js 前端和后端通信的数据文件
4、修改package.json里面的数据


json 是前端和后端通信的数据文件
json-server:使用json-server来做后台数据
- promise 五星 异步

- postman 可以用来做http访问代理
POST 那是再方便不过了

- 前端 + 后端
live-server http 前端服务 index.html 8000
json-server 后端数据 1234
前端和后端要数据通信？
前端去拉去后端的数据
get 1234 /users


- ajax 表达一下
js 最重要的考点 XMLHttpRequest对象
1、是历史性的突破，带来前端主动请求数据的能力，Ajax应用(主动拉取数据)
前端更主动 ajax+DOM 页面变得更加丰富，动态
2、http://localhost:3000/users 一切皆资源 Restfull
数据资源 GET 请求动作 path/users
POST 新增的/users  {name:'jingda'}
3、XMLHttpRequest  httpRequest = new ActiveXObject('XMLHTTP');
但是这叫浏览器嗅探 if else
let httpRequest; http 协议 Request Response 
- 创建好对象
- .open('GET',"http://localhost:3000/users",true) 打开一个请求通道
  .send() 请求真的发送了
  .onreadystatechange
  XMLHttpRequest.DONE 完成了
  JSON.parse(httpRequest.responseText) 返回的数据
  json 数组 -> html 数组 map `<li>${user.id} - ${user.name}<li>` innerHTML




