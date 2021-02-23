get
post
put 修改
options 列出可对资源实行的请求方法，用来跨域请求

get post 的区别
1、缓存 
get会进行缓存 post默认不会
2、get放在url里面不安全，post放在请求体重，更加安全
3、TCP角度，get会把报文一次性发出去，而post分为两个tcp数据包，先发header部分，如果服务器响应 100分
然后再发

