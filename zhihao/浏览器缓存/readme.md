## 强缓存
强缓存：不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的Network选项中可以看到该请求返回200的状态码

强缓存可以通过设置两种 HTTP Header 实现：Expires 和 Cache-Control。

### 1、Expires
缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。

Expires=max-age + 请求时间，需要和Last-modified结合使用

Expires 是 HTTP/1 的产物，受限于本地时间，如果修改了本地时间，可能会造成缓存失效。

### 2.Cache-Control
在HTTP/1.1中，Cache-Control是最重要的规则，主要用于控制网页缓存。比如当Cache-Control:max-age=300时，则代表在这个请求正确返回时间（浏览器也会记录下来）的5分钟内再次加载资源，就会命中强缓存。

字段：
public：所有内容都将被缓存（客户端和代理服务器都可缓存）。
private：所有内容只有客户端可以缓存 Cache-Control的默认取值。

no-cache：客户端缓存内容，是否使用缓存则需要经过协商缓存来验证决定。表示不使用 Cache-Control的缓存控制方式做前置验证，而是使用 Etag 或者Last-Modified字段来控制缓存。

no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存

max-age：max-age=xxx (xxx is numeric)表示缓存内容将在xxx秒后失效

s-maxage（单位为s)：同max-age作用一样，只在代理服务器中生效（比如CDN缓存）。

max-stale：能容忍的最大过期时间

### 3.Expires和Cache-Control两者对比
1、http版本
expires http 1.0
cache-control http 1.1
2、cache-control 的优先级高于 expires

强缓存判断是否缓存的依据来自于**是否超出某个时间或者某个时间段，而不关心服务器端文件是否已经更新，**这可能会导致加载文件不是服务器端最新的内容，那我们如何获知服务器端内容是否已经发生了更新呢？此时我们需要用到协商缓存策略。


## 协商缓存

协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：

- 协商缓存生效，返回304和Not Modified
304 资源无更新
- 协商缓存失效，返回200和请求结果


协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag 。

### 1、1.Last-Modified和If-Modified-Since
1、浏览器在第一次访问资源时，服务器返回资源的同时，在response header中添加 Last-Modified的header，值是这个资源在服务器上的最后修改时间，浏览器接收后缓存文件和header；

2、浏览器下一次请求这个资源，浏览器检测到有 Last-Modified这个header，于是添加If-Modified-Since这个header，值就是Last-Modified中的值

3、服务器再次收到这个资源请求，会根据 If-Modified-Since 中的值与服务器中这个资源的最后修改时间对比，如果没有变化，返回304和空的响应体，直接从缓存读取，

4、小于服务器中这个资源的最后修改时间，说明文件有更新，于是返回新的资源文件和200

但是 Last-Modified 存在一些弊端：
既然根据文件修改时间来决定是否缓存尚有不足

能否可以直接根据文件内容是否修改来决定缓存策略？所以在 HTTP / 1.1 出现了 ETag 和If-None-Match

### 2.ETag和If-None-Match

Etag是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)，只要资源有变化，Etag就会重新生成。

浏览器在下一次加载资源向服务器发送请求时，会将上一次返回的Etag值放到request header里的If-None-Match里，服务器只需要比较客户端传来的If-None-Match跟自己服务器上该资源的ETag是否一致，就能很好地判断资源相对客户端而言是否被修改过了。如果服务器发现ETag匹配不上，那么直接以常规GET 200回包形式将新的资源（当然也包括了新的ETag）发给客户端；如果ETag是一致的，则直接返回304知会客户端直接使用本地缓存即可。

### 3、两者对比
1、首先在精确度上，Etag要优于Last-Modified。
2、在性能上，Etag要逊于Last-Modified，毕竟Last-Modified只需要记录时间，而Etag需要服务器通过算法来计算出一个hash值。
3、优先级上，服务器校验优先考虑Etag

## 实际场景应用缓存策略

1.频繁变动的资源
Cache-Control: no-cache
2.不常变化的资源
Cache-Control: max-age=31536000