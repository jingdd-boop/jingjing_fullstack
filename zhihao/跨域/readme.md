# 同源策略：协议 主机 端口

# 同源策略限制下接口请求的正确打开方式
## 1、JSONP
在HTML标签里，一些标签比如script、img这样的获取资源的标签是没有跨域限制的

get

## 2、空iframe加form

post

## 3、CORS"跨域资源共享

浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。

### 简单请求
（1) 请求方法是以下三种方法之一：

HEAD
GET
POST
（2）HTTP的头信息不超出以下几种字段：
Accept
Accept-Language
Content-Language
Last-Event-ID
Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

### 非简单请求 （option）
返回码是204 返回成功 body中没有数据
预检测通过才会真正发出请求，这才返回200。