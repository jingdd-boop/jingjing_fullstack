# 小程序之左滑一下

- 目录的意义
 1、pages/ 是最简单的页面架构
 四大天王 wxml wxss js json
 2、utils/
 工具目录
 各个页面公用的js函数 日期格式化函数
 3、components/ 组件化思想
 4、wxs/ 类js利用 utils.js
 直接被模板利用
 utils -> js文件中引入 + wxml里复用
 新的语言wxs 
 - 你我他
 用户(隐私) 开发者 ->  小程序是有服务器

- felx 等比例分配
父元素上设置 display:flex;
在子元素上 flex：1;就可以等比例分配

- 