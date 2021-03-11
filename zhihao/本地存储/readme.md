# 三种本地存储
## cookie
网络早期的最大问题就是如何管理状态，服务器无法知道两个请求是否来自同一个浏览器。最开始的时候是在请求的时候，在页面插入一些参数，并在下一次请求中传回参数，这需要包含参数的隐藏表单，或者作为url参数的一部分进行传递

于是出现了cookie

cookie是纯文本，没有可执行代码。
存储数据：当用户访问了某个网站后，我们就通过cookie来向访问者电脑上存储数据

### cookie如何工作
1、当网页要发http请求时，浏览器会先检查是否有相应的cookie，有的话就添加到request header 的cookie字段中
（这些都是浏览器自动帮我们做的）

2、存储在cookie中的数据，每次都会被浏览器自动放在http请求中。

对应那种设置"每次请求都携带的信息（最典型的就是身份认证消息）"适合放在cookie中

## cookie 特征
1、一个域名存放cookie的数量有限，一般 20个
2、每个cookie存放的内容大小有限制，4kb
3、可以设置过期时间，默认是会话结束的时候


## cookie值既可以设置，也可以读取

### 设置
客户端：
doucment.cookie=""
客户端可以设置cookie 的下列选项：expires、domain、path、secure（有条件：只有在https协议的网页中，客户端设置secure类型的 cookie 才能成功），但无法设置HttpOnly选项。

服务器端：
服务端都会返回response。而response header中有一项叫set-cookie，是服务端专门用来设置cookie的。

服务端可以设置cookie 的所有选项：expires、domain、path、secure、HttpOnly


### cookie的属性

#### 过期时间 expires
expires 是 http/1.0协议中的选项，在新的http/1.1协议中expires已经由 max-age 选项代替，两者的作用都是限制cookie 的有效时间

expires的值是一个时间点（cookie失效时刻= expires），而max-age 的值是一个以秒为单位时间段（cookie失效时刻= 创建时刻+ max-age）

max-age 的默认值是 -1(即有效期为 session )；max-age有三种可能值：负数、0、正数。

负数：有效期session；
0：删除cookie；
正数：有效期为创建时刻+ max-age

#### cookie的域概念（domain选项）
domain指定了 cookie 将要被发送至哪个或哪些域中

#### cookie的路径 （path）

#### domain和path总结：
domain是域名，path是路径，两者加起来就构成了 URL，domain和path一起来限制 cookie 能被哪些 URL 访问。

所以domain和path2个选项共同决定了cookie何时被浏览器自动添加到请求头部中发送出去。

#### cookie的安全性（secure选项）
cookie 存储的信息容易被窃取。假如 cookie 中所传递的内容比较重要，那么就要求使用加密的数据传输。

只保证 cookie 与服务器之间的数据传输过程加密，而保存在本地的 cookie文件并不加密。

如果想在客户端即网页中通过 js 去设置secure类型的 cookie，必须保证网页是https协议的。在http协议的网页中是无法设置secure类型cookie的。

#### httpOnly
当cookie带httpOnly选项时，客户端则无法通过js代码去访问（包括读取、修改、删除等）这个cookie。

在客户端是不能通过js代码去设置一个httpOnly类型的cookie的，这种类型的cookie只能通过服务端来设置。


## lacalStorage(本地存储)
### 特点
1、生命周期：持久化本地存储，除非删除数据，否则数据不会过期
2、大小：5M
3、localStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡
4、localStorage受同源策略的限制
一些操作：
设置：
localStorage.setItem('username','cfangxu');
获取
localStorage.getItem('username')
也可以获取键名
localStorage.key(0) #获取第一个键名
删除
localStorage.removeItem('username')

## sessionStorage
其实跟localStorage差不多，也是本地存储，会话本地存储
### 特点
1、生命周期：不是一种持久化的本地存储，当会话结束（当前页面关闭的时候，自动销毁）

2、除了协议、主机名、端口外，还要求在同一窗口（也就是浏览器的标签页）下。

## 总结
相同：在本地（浏览器端）存储数据
不同：
localStorage、sessionStorage

cookie的数据会在每一次发送http请求的时候，同时发送给服务器而localStorage、sessionStorage不会。