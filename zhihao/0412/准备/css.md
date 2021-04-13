# 过渡
transition:css属性，花费时间，效果曲线，延迟时间
/*宽度从原始值到制定值的一个过渡，运动曲线ease,运动时间0.5秒，0.2秒后执行过渡*/
transition：width,.5s,ease,.2s

# 动画
animation:动画名称，一个周期花费的时间，原地曲线，动画延迟，播放次数(1)，是否反向(normal)，是否暂停(running)

/*执行一次logo2-line动画，运动时间2秒，运动曲线为 linear*/
animation: logo2-line 2s linear;

# 形状转换
分2D 3D
transform:适用于2D或3D转换的元素
rotate(度数)
translate(偏移)
scale(缩小)
skew(倾斜)

# 选择器
:nth-child(n) 前几个
:nth-last-child(n) 后几个
:first-of-type 首个
:last-of-type 最后

# 阴影
box-shadow:水平阴影的位置 垂直阴影的位置 模糊距离 模糊大小 阴影的颜色 阴影开始方向(默认从里往外，设置insert就是从外往里)

## 边框图片
border-image：
    border-image: url(border.png);
    border-image-slice: 30;
    border-image-repeat: round;
    border-image-outset: 0;
## 边框圆角
border-radius: n1,n2,n3,n4/n1,n2,n3,n4;
/*n1-n4四个值的顺序是：左上角，右上角，右下角，左下角。*/

## flex布局
1. 容器
- direcction 方向
- wrap 是否换行
- flow 
- justify-content 垂直 
flex-start 
flex-end 
center 
space-between  两端对齐，项目之间的间隔都相等
space-around  每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
- align-item 水平
flex-start
flex-end
center
baseline 项目的第一行文字的基线对齐
stretch 果项目未设置高度或设为auto，将占满整个容器的高度。
- align-content 
2. 子项 
- order
- flex-grow
- flex-shrink
- flex-basis
- flex 
auto: 0,1,auto
none: 0,0,auto
1:1,1,0%
- aling-self
## 栅格布局 grid
你只需要给容器（container）定义：display:grid，并设置列（grid-template-columns）和 行（grid-template-rows）的大小，然后用grid-column和grid-row定义容器子元素（grid-item项目）的位置

1. 网格容器（Grid Container）

```js
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```
2. 网格项（Grid Item)
网格容器的子元素，下面的item元素是网格项，但sub-item不是。

```js
<div class="container">
  <div class="item"></div> 
  <div class="item">
    <p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>

```


## 盒模型概念
box-sizing

box-sizing:border-box的时候，边框和padding包含在元素的宽高之内！

box-sizing:content-box的时候，边框和padding不包含在元素的宽高之内！

## 媒体查询
- 监听屏幕尺寸的变化，在不同尺寸的时候显示不同的样式
- rem布局。所以媒体查询就没怎么用


# 选择器
从0开始
行内样式1000
id 100
属性，class 伪类 10
元素选择器 伪元素 1
通配符 0

# 伪类 伪元素
伪类和伪元素都不会出现在文档树中
伪类允许出现在选择器的任何位置
伪元素只能跟在选择器最后面


伪类的操作对象是文档树中已有的元素，
而伪元素则创建了一个文档数外的元素。因此，伪类与伪元素的区别在于：有没有创建一个文档树之外的元素。

伪类：link，hover active 
first-of-type。。
nth-child

伪元素：after 


# 块级元素 行内元素
块级元素：h1-h6,p,hr,ul,div
行内元素：i，em，b，u
行内块级元素：span，a，img，button，input
padding可以设置 margin只能够设置水平方向的边距，即：margin-left和margin-right，设置margin-top和margin-bottom无效

# position
## static 
静态定位
## relative
相对定位
- 占据在正常的文档流中
- 可以修改它的最终位置
- 使用top，bottom，left和right属性 
## absolute
绝对定位
- 绝对定位的元素不再存在于正常文档布局流中
- 它坐在它自己的层独立于一切
- 可以创建不干扰页面上其他元素的位置的隔离的UI功能
## fixed
固定定位
绝对定位是相对于html元素或者最近的定位主先，而固定定位固定元素则是相对于浏览器视口本身

## sticky
相对位置和固定位置的混合体
# float
浮动元素的高度自适应，父元素在不写高度的时候，子元素如果泄露浮动，父元素会发生高度塌陷
解决方法：
- 添加空div 在浮动元素下发添加空div，并给该元素写css样式
{
  clear：both;
  heigth：0;
  overflow:hidden;
}
- 给浮动的父级元素加高度
- 给父级元素加overflow：hidden 触发bfc
- after伪类
float_div:after {
  content:"."
  clear:both
  height:0
  display:block
  overflow:hidden
}
# bfc
一个独立的渲染区域，或者说是一个隔离的独立容器
形成BFC的条件：
- 浮动元素 float 除了none
- 定位 position（absolute。fixed）
- overflow 除了visible
- body


# 层叠
# 布局
## 水平居中
## 垂直居中
## 水平垂直居中
## 双飞翼
## 圣杯布局
# display:none visibility:hidden的区别
visibility:hidden会隐藏元素，但是其位置还存在页面的文档流中，不会被删除，所以会触发浏览器的重绘

display:none，其位置不会被保留，回流和重绘

opacity：0 还在页面文档流中，会触发重绘