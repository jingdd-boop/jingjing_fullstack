const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog')
const {SuccessModel,ErrorModel} = require('../model/restModel')

const handleBlogRouter = (req,res) => {
  const id = req.query.id
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];

  //获取博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author,keyword)
    // return new SuccessModel(listData)
    const result = getList(author,keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  //获取博客详情
  if(method === 'GET' && path === '/api/blog/detail') {
    console.log(1)
    // const data = getDetail(id);
    // return new SuccessModel(data);
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data);
    })
  }
  //新建
  if(method === 'POST' && path === '/api/blog/new') {
    // const data = newBlog(req.body);
    // return new SuccessModel(data);
    // 假数据
    req.body.author = 'jingda1'
    const result = mewBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data);
    })
  }
  //更新
  if(method === 'POST' && path === '/api/blog/update') {
    const result = updateBlog(id,req.body)
    return result.then(val => {
      if(val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('更新博客失败')
      }
    })
    
   
  }
  //删除
  if(method === 'POST' && path === '/api/blog/del') {
    // 假数据
   const author = 'jingda1'
    const result = delBlog(id,author)
    return result.then(val => {
      if(val) {
        return new SuccessModel()
      } else {
        return new ErrorModel('删除博客失败')
      }
    })
    
  }
}

module.exports = handleBlogRouter;