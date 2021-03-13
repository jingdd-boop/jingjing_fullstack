1、
```js
<body>
  <div id="app"></div>
  <script type="text/babel">
    ReactDOM.render(
      <h2>hello</h2>,
      document.getElementById("app")
    )
  </script>
</body>
```
2、
```js
   <script type="text/babel">
    const message = <h2>hello</h2>
    ReactDOM.render(
      message,
      document.getElementById("app")
    )
  </script>
```
JSX React.createElement(component,props,...children) 函数的语法糖
- 所有JSX最终都会转换成React.createElement的函数调用

```js
const message = <h2>hello</h2>
const message = React.createElement("h2",null,"hello");
```
react.createElement需要传递三个参数
- 参数1 type
当前reactElement的类型
如果是便签元素，就使用"div"
如果是组件元素，就直接用组件的名称
- 参数2 config
所有jsx中的属性都在config中以对象的属性和值的形式存储
- 参数3 children
存放在标签中的内容，以children数组的方式进行存储
如果是多个元素

## 虚拟dom的创建过程:
我们通过React.createElement最终创建出来一个ReactElement对象：

ReactElement对象是什么作用呢？react为什么要创建它
- react利用ReactElement对象组成一个javascript对象树
- javascript的对象树就是虚拟DOM树（Virtual DOM）

树结构：数据结构概念中的一种组织数据的方式
javascript对象表示出来 -》 ReactElement对象

- 如何查看ReactElement对象的数结构
我们可以将之前jsx返回结果打印

## 虚拟dom的映射成真实DOM过程:
```js
ReactDOM.render(<App/>,getElement("app))
```

jsx - React.createElement - ReactElement对象 - ReactDOM.render() - 真实DOM

jsx - React.createElement - ReactElement对象 - ReactDOM.render() - 原生控件


为什么要使用虚拟DOM,不直接修改真实的DOM
- 很难跟踪状态发生的改变：原有的开发模式，我们很难跟踪到状态发生的改变，不方便针对我们应该程序进行调试
- 操作真实DOM性能较低：传统的开发模式会进行频繁的DOM操作，而这一做法性能非常低
1、DOM操作性能低：
首先 document.createElement本身创建出来就是一个非常复杂的对象
2、

