# div居中
定宽高 
1、flex布局
父元素：
display:flex;
justify-content:center;
align-items:center;

2、position
父元素：
position：relative
子元素：
position：absolute
距上50% 距左50% 然后减去元素宽度的一半距离
3、left，right，top，bottom为0，maigin：auto ）
**如果子元素不设置宽度和高度，将会铺满整个父级（应用：模态框）**
父元素：position：relative
子元素：
position: absolute;            
        top: 0;            
        bottom: 0;            
        left: 0;            
        right: 0;            
        margin: auto; 


不定宽高：
1、postion transform
将 定宽高的 position方式的
margin: -50px 0 0 -50px; 
改成
transform: translate(-50%,-50%);



