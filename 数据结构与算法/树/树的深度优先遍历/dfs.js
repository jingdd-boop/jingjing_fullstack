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

const dfs = (root) => {
  console.log(root.val)
  root.children.forEach(dfs)
  // root.children.forEach((child) => {dfs(child)})
  // 遍历节点的每个孩子节点，并且在孩子节点上使用dfs递归 继续遍历
}
dfs(tree);