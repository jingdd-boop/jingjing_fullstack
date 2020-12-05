- 用数据源表达界面 数据驱动的界面 
  article:[
          {
              cotentID:
              1177432,
              cover:'',
              pubdate:
              '2017-06-27
              00:45:00',
              title:'Quora精选:为什么聪明人总能保持冷静'
          }
   
  ]


小程序的第一个：架构很简单：页面

数据：页面
每个页面由四个页面构成
分别由
    .wxml  -- .html  view = div
    .wxss == .css
    .js == .js
    约定：只要你在js的data里面添加一个东西，它就可以在wxml里面用
    {{显示出来}}
    
    1、哪里有小程序的组件？
    2、数据 {{}}
      setData({
        key: val
      })
      页面会根据数据的改变而改变



