
# 源码分析

## 国际化的命名规范
### 1、取类名
- `.weui-btn`

   `btn` 组件名 70%都是由框架提供的

   `weui` 项目前缀 tb tm 项目组
### 2、css知识点  
    - 行内元素 block -- span a
    - 块级元素 line -- div p (可以设置边距)
    - 行内块级元素 line-block -- image
    - 元素在页面上的占位 由 `内容（wh）+ padding + border + margin`

    `position `盒子模型
    line-height 文字高度

### 3、面向对象的CSS
    - 一个元素有多个类
     .weui-btn Block 基础类
     .weui-btn-primary Modifier 多态

### 安装一个插件
  node js 的后端
  npm i -g live-server

  npm config ls 查询npm的信息 
## 4、结构
  移动端页面 超越项目
  - BEM 
  1、Block
  2、Element 子元素 __ 两个下划线
  3、Modifier 装饰  
  架构套路
  .page>.page__hd+.page__bd
  .zfb-tabbar__item
    .zfb-tabbar__item_on


