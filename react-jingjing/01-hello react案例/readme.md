需求
- 在界面显示一个文本：hello world
- 点击下方的一个按钮，点击后文本改变为hello react

原生方式和react方式进行对比学习

react开发依赖

三个库：
react： 包含react所必须的核心代码
react-dom： react渲染在不同平台所需要的核心代码
babel：将jsx转换成react代码的工具

react在之前是没有react-dom这个概念，所以的功能都在react里面
之后因为react-native
react包中包含react和react-native所共同拥有的核心代码

react-dom针对web和native所完成的事情不同：
web端：react-dom会将jsx最终渲染成真实dom，显示在浏览器中
native：react-dom会将jsx最终渲染成原生的控件


## babel 编辑器编译器

- 当下很多浏览器并不支持es6的语法
- 编写源码时可以使用es6编写，之后通过babel工具，将es6转成大多数浏览器都支持的es5语法

## babel 与 react的关系
- 默认情况下开发react其实可以不使用babel
- 但是前提是我们自己使用React.createElement来编写源代码，它编写的代码非常繁琐和可读性差
- 直接编写jsx，并且让babel帮助我们转换成React.createElement
