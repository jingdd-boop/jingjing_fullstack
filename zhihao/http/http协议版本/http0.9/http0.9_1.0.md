# http0.9
最传统的request-response模式
- 不支持请求头 只支持get

# http1.0
- 在请求中加入了http版本号 方法 url 版本
- 有请求头
- 加了状态码
- 还有content-type 可以传输其他文件

缺点：
每请求一个资源都要新建TCP连接，还是串行请求

# http1.1

比1.0提高了网络性能

- 设置了keep-alive 让http重用tcp连接 http长连接
- 然后支持pipeline网络传输，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。（
- 还增加了 cache control 机制。
- 协议头注增加了 Language, Encoding, Type 等等头，让客户端可以跟服务器端进行更多的协商。
- 还正式加入了一个很重要的头—— HOST这样的话，服务器就知道你要请求哪个网站了。
- 正式加入了 OPTIONS 方法，其主要用于 CORS – Cross Origin Resource Sharing 应用。

总结：
keep-alive
host
cache-control
增加了Language, Encoding, Type 等等头


缺点：
虽然可以重用tcp资源，但是还是一个一个串行发，需要保证顺序

考虑是否能并行这些请求

# http2.0

- 二进制协议，增加了传输数据的效率
- 可以在tcp连接中并发请求多个http请求，移除了http/1.1的串行请求
- 压缩头
- 允许服务器端在客户端放cache