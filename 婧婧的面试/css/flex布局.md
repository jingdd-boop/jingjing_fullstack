传统布局方案，基于盒壮模型，依赖display，position，float

# flex布局：弹性布局
任何一盒容器都可以说指定为flex布局
行内元素也可以

设为flex布局后，子元素的float clear vertical-aligin属性将失效

# 基本概念

## 容器属性：
- flex-direction
项目排列方向 row行 column列
- flex-wrap
是否换行
- flex-flow
flex-direction + flex-wrap 结合 默认值row nowrap
- justify-content
主轴对齐方式
flex-start 
flex-end
center
space-around
- align-items
交叉轴对齐方式
flex-start 
flex-end
center
stretch：如果项目未设置高度或设为auto，将占满整个容器的高度。
baseline：项目的第一行文字的基线对齐。
- align-content
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。

## 项目属性
- order
- flex-grow 放大比例，默认为0
- flex-shrink 项目的缩小比例，默认为1
- flex-basis 
定义了在分配多余空间之前，项目占据的主轴空间（main size)
- flex 属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto

两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
- align-self
属性允许单个项目有与其他项目不一样的对齐方式，可覆盖
align-items属性。默认值为auto，表示继承父元素的align-items属性

在设置两栏布局的时候，如果一边固定宽，另一边使用 flex：1自适应，那么当内容过多，会撑开
