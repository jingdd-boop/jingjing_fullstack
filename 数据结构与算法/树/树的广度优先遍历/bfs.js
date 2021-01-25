const tree = {
  val:'a',
  children:[
    {
      val:'b',
      children:[
        {
          val:'d',
          children:[],
        },
        {
          val:'e',
          children:[],
        }
      ]
    },
    {
      val:'c',
      children:[
        {
          val:'f',
          children:[],
        },
        {
          val:'g',
          children:[],
        }
      ]
    }
  ]
}

const bfs = (root) => {
  //1、新建一个队列，把根节点入队
  const q = [root]


  //4、重复第2，3步，直到队列为空
  while (q.length > 0) {
    //2、把对头出队，并访问
    const n = q.shift();
    console.log(n.val);
    // 3、把对头的children挨个入队
    n.children.forEach(child => {
      q.push(child);
    });
  }
}


bfs(tree);