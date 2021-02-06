## render函数的返回值
 当render被调用，它会检测this.props和this.state的变化并返回以下类型之一
 -  react元素：
  通常通过jsx创建
  
  `</div>`会被react渲染为DOM节点，
  `<myComponent />`会被react渲染为自定义组件
 无论是`<div/>`还是`<myComponent />`均为react元素
 
 - 数组或fragments: 使得render方法可以返回多个元素
 - Portals：可以渲染子阶段到不同的DOM树中
 - 字符串或数值类型：它们在DOM中会被渲染为文本节点
 - 布尔类型或null:什么都不渲染


## 函数组件
- 函数组件时使用function来进行定义的函数，知识这个函数会返回和类组件中render函数返回一样的内容
- 函数组件有自己的特点：
 - 没有生命周期，也会被更新加载，但是没有生命周期函数 (为什么没有？？)
 - 没有this(组件实例);(也不知道为啥)？
 - 没有内部状态(state);
 - 我们来定义一个函数组件：


## 生命周期
- 从创建到销毁的整个过程：叫做生命周期
- react组件也有自己的生命周期，了解组件的生命周期可以让我们在最合适的地方完成自己想要的功能
- 生命周期和生命周期函数的关系
### 生命周期
 - 装载阶段：组件第一次在DOM树上被渲染的过程
 - 更新过程：组件状态发生改变，重新更新渲染的过程
 - 卸载过程： 组件从DOM树中移除的过程

### 生命周期函数
 - 实现componentDidMount函数：组件已经挂载到DOM树，就会回调
 - 实现componentDidUpdate函数：组件已经发生了更新时，就会回调
 - 实现componentWillUnmount函数：组件即将被移除时，就会回调
 - 我们可以在这些回调函数编写自己的逻辑代码，来完成自己的需求功能
 

- 谈react生命周期时，主要谈的是类的生命周期，因为函数式组件是没有生命周期的(hooks可以模拟一些生命周期的回调)

## 生命周期解析
- 1、挂载
- 2、更新
- 3、卸载

## 生命周期函数方法
### constructor
如果不初始化state或不进行绑定，则不需要为react组件实现构造函数
constructor中通常做两件事：
- 通常给this.state赋值对象来初始化内部的this
- 为事件绑定实例 this
### componentDidMount
- componentDidMount()在组件挂载后(插入到DOM树)立即调用
- componentDidMount中通常进行哪些操作:？
 - 依赖于DOM的操作可以在这里执行
 - 在此处发送网络请求
 - 在这里添加一些订阅 (会在componentWillUnmount取消订阅)；
### componentDidUpdate
- componentDidUpdate 会在更新时立即调用，首次渲染不会执行此方法
 - 当组件更新后，可以在此处对DOM进行操作
 - 如果对更新前后的props进行了比较，也可以选择在此处进行网络请求(当props未发生变化时，则不会执行网络请求)；
### componentWillUnmount
- componentWillUnmount() 会在组件卸载及销毁之前直接调用
 - 在此方法中执行必要的清理操作
 - 青春timer 取消网络请求或清除在componentDidMount()中创建的订阅等

## 认识组件的嵌套
- 组件间存在嵌套关系
 - 在之前的案例中，我们只是创建了一个组件APP
 

在main中请求的数据同时运用到`<Banner />`` <ProductList />`两个子组件中
比如说`<ProductList />`中的数据发生改变，需要由父组件来完成一些操作。需要子组件向父组件传递事件

- 父组件在展示子组件时，可能会传递一些数据给子组件：
 - 父组件通过 `属性 = 值`的形式来传递子组件数据
 - 子组件通过props参数获取父组件传递过来的数据

- 

函数式组件和类组件

