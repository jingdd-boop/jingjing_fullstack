首先看这张图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210107130318286.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70)
# 1

Foo()是一个构造函数
f1 f2(下面统称f) 是通过 new Foo() 创建的实例对象
f.__proto__ 指向的是 Foo.prototype

# 2

再来看三角恋关系：
Foo()作为一个构造函数，通过prototype可以指向到它的原型对象上Foo.prototype

而原型对象上的constructor可以指向它本身
也就是

Foo.prototype.constructor === Foo


每个对象都有自己的__proto__属性
当然也包括作为原型对象的Foo.prototype

因此当在它的身上使用__proto__属性的时候
它会寻找它的上一级，也就是构造它的原型对象
Object.prototype 

# 3 

同理 Object.prototype作为原型对象，同样拥有__proto__属性 

且它的上一级为null

再来看看，由Object.prototype作为原型对象的三角恋关系

o1 o2(下面简称o) 是由 new Object()创建出来的实例，既然是实例，因此它有__proto__属性，指向原型对象 Object.prototype

而此时的构造函数Object同样和之前的Fuction构造函数一样

Object.prototype.constructor === Object

# 5

再来看，此刻我们的Object（同上Foo，以及下面说到的Function）作为构造函数都存在__proto__属性，它指向的是Function.prototype原型对象

而此时 Function.prototype 作为原型对象的三角恋关系

构造函数就是Fuction() 它存在prototype 指向原型对象Function.prototype,原型对象上也存在constructor属性指向Function构造函数

Function.prototype.constructor === Function

需要注意的是此时的Function作为构造函数，同时也具备__proto__
同上


# 总结一下；
在整张图中，我们可以看到的三个主角就是 

## 构造函数
- Foo()
- Object()
- Function()

拥有的：
prototype:
  Foo.prototype
  Object.prototype
  Function.prototype
__proto__:
  Foo.__proto = Function.prototype
  Object.__proto = Function.prototype
  Function.__proto = Function.prototype

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021010713240129.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70)

## 实例对象
- f 
- o
拥有的：
__proto__:
  f.__proto = f.prototype
  o.__proto = o.prototype
## 原型对象
- Foo.prototype
- Object.prototype
- Function.protype
拥有的：
constructor:
  Foo.prototype.construtor === Foo
  Object.prototype.construtor === Object
  Function.prototype.construtor === Function
__proto__:
  Foo.prototype.__proto__ === Object.prototype
  Object.prototype.__proto__ === null
  Function.prototype.__proto__ === Object.prototype
  


