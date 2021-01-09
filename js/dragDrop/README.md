# 字节h5面试题之 Drag and Drop
1、基础好，细节，能力增长梯度
2、比较复杂的特效

## github 拖拽上传功能
1、给要拖拽的元素，加一个dragable属性，cursor:move;
2、拖拽元素在上空的感觉
3、drag 有三个事件
js 在前端是基于事件的语言 Event机制
on + 495 DOM Event level
- dragstart
- drag
- dragend

drop 异步
- dragenter 进入 border
dashed classList.add
- over border dashed
- leave 离开 create.remove

drap + drop 良好用户真实体验模拟API 笔记复杂
首先 draggable = true 属性
dragstart drag dragend
dragenter dragover dragleave + drop

阻止默认行为
event.preventDefault()
oForm submit


作业： 请完成拖回去的功能