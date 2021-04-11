在懒加载的实现中，有两个关键的数值
- 一个是当前可视区域的高度
- 元素距离可视区域顶部的高度

可视区的高度： 
- window.innerHeight  
- document.documentElement.clientHeight

元素距离可视区顶部的高度
getBoundingClientRect()方法来获取返回元素大小及其相对视口的位置
返回相对视口的大小 left top right bottom


## 引出防抖节流
这两个东西都是以闭包的形式存在

他们通过对事件对应的回调函数进行包裹，以自由变量的形式缓存时间信息，最后用settimeout来控制时间的触发频率。

- 节流 throttle：
在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。

- 防抖 Debounce： 
最后一个人说了算我会等你到底。在某段时间内，不管你触发了多少次回调，我都只认最后一次

节流Throttle：一定时间内执行的操作被连续触发只执行最先一次
防抖Debounce：一定时间内执行的操作被连续触发只执行最后一次