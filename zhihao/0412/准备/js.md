# ES6 
const/let var
箭头函数
扩展运算符
数组操作
promise解决上面问题


# Object.prototype.toString.call()
 - 这是因为toString为Object的原型方法，
 - 而Array 、Function等类型作为Object的实例，都重写了toString方法。
 - 不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法（Function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串.....），
 - 而不会去调用Object上原型toString方法（返回对象的具体类型），
 - 所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；
 - 因此，在想要得到对象的具体类型时，应该调用Object上原型toString方法
# 箭头函数和普通函数的区别
- 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
-  箭头函数没有自己的this指针，通过 call() 或 apply() 方法调用一个函数时，只能传递参数（不能绑定this---译者注），他们的第一个参数会被忽略。
- 箭头函数不绑定Arguments 对象
- 箭头函数不能用作构造器，和 new一起用会抛出错误。
- 箭头函数没有prototype属性。
# new 和直接{}

# async, defer, preload, prefetch
## 减少下载时间preload, prefetch
Preload
浏览器会在遇到如下link标签时，立刻开始下载main.js(不阻塞parser)，并放在内存中，但不会执行其中的JS语句。
只有当遇到script标签加载的也是main.js的时候，浏览器才会直接将预先加载的JS执行掉。

<link rel="preload" href="/main.js" as="script">

Prefetch
浏览器会在空闲的时候，下载main.js, 并缓存到disk。当有页面使用的时候，直接从disk缓存中读取。其实就是把决定是否和什么时间加载这个资源的决定权交给浏览器。

## JS在什么时候执行的（defer和async）
defer和async是script标签的两个属性，用于在不阻塞页面文档解析的前提下，控制脚本的下载和执行。

defer的执行时间是在所有元素解析完成之后，DOMContentLoaded 事件触发之前。

async的执行时间是在当前JS脚本下载完成后，所以多个async script是执行顺序是不固定的。async只能用于加载一些独立无依赖的代码

# promise generator async

