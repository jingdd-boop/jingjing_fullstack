- 搭建react环境
npx create-react-app redux-demo1

- 安装antd
yarn add antd --save
引入
import 'antd/dist/antd.css'

- 安装redux
yarn add redux --save


# redux
## 开始使用redux
首先新建一个store/index.js

1、我们需要创建一个store 并把它暴露出去
2、reducer 作为管理员
里面加入初始化的数据
3、在store中引用reducer

改变值
在方法中定义一个action 它是一个对象
```js
const action = {
      type:'changeInput',
      value:e.target.value
    }
  ```


代码优化：
1、首先是action的type 可以放到单独的文件里面 设成常量
2、第二个是action 不用那么多重复的
const action = changeInputAction(e.target.value)


三个小坑

1、store 必须是唯一的
2、只有store可以改变值 reducer不能改变
3、reducer是纯函数

redux核心

安装axios 异步请求easymock数据
yarn add axios --save

请求数据
```js
 componentDidMount() {
    store.subscribe(this.storeChange)//发布订阅模式

    axios.get('https://mock.mengxuegu.com/mock/60384a11ca363222f3d57bd3/redux/getList')
    .then((res) => {
      console.log(res)
      const data = res.data
      const action = getListAction(data)
      store.dispatch(action)
    })
  }
```

redux 中间件

redux-thunk
yarn add redux-thunk --save
 

react-redux
全新的插件 简化操作