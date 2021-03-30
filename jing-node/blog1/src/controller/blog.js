const getList = (author,keyword) => {
  //先返回假数据
  return [
    {
      id:1,
      title:"标题",
      content:"内容",
      createTime:156876398611324,
      author:'jingda'
    },
    {
      id:2,
      title:"标题b",
      content:"内容b",
      createTime:1568781934847814,
      author:'jingda'
    }
  ]
}


const getDetail = (id) => {
  //先返回假数据
  return [
    {
      id:1,
      title:"标题",
      content:"内容",
      createTime:156876398611324,
      author:'jingda'
    },
    {
      id:2,
      title:"标题b",
      content:"内容b",
      createTime:1568781934847814,
      author:'jingda'
    }
  ]
}

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含 title content属性
  console.log('newBlog blogData...',blogData)
  return {
    id:3 //表示新建博客，插入到数据表里面的 id
  }
}

const updateBlog = (id,blogData = {}) => {
  return true
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}