cookie
1.cookie 是服务器种在客户端的存储的数据
每次再发送请求的时候都会带上
cookie 比较小 4kb uid = 121212
登录状态
2、在node里面设置cookie
domain
path
expires 删除cookie
3、cookie 安全问题
cookie 由服务器端种下，写在用户端
是一段比较小的文本

每次都要传给服务器 
有些攻击 可以的到用户的cookie 就可以伪装成用户去下单

httpOnly
document.ookie js
httpOnly:true

这样安全
前端什么都能做 链node + go
前端也可以操作cookie 有些cookie 没有那么重要
比如一些用户选择设置，夜间模式

cookie 与 localstoreage 都是用来做存储
cookies 4KB 用户状态 最基本用户配置
localStorage 5MB 数据库 多存
用户的地址 用户看了那些内容

Cookie 的性能不好
浪费的地方 每次http请求都会带上她，开销
http是一种无状态的网络协议 一个请求一个返回

cookie 登录

http 报纸

cookie 是http的状态的一种弥补
localStorage 只存在于客户端 性能很好


