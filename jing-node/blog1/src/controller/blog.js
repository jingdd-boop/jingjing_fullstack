const {exec} = require('../db/mysql')

const getList = (author,keyword) => {
  // 1==1 占一个位置 防止author 和keyword没有值 
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  //返回的是一个promise
  return exec(sql);
}
const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`
  return exec(sql).then(rows => {
    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含 title content author属性
  // console.log('newBlog blogData...',blogData)
  const title = blogData.title
  const content = blogData.content
  const author = blogData.author
  const createTime = Date.now
  const sql = `
    insert into blog {title,content,create,createtime,author}
    values ('${title}','${content}',${createTime},'${author}');
  `
  return exec(sql).then(insertData => {
    console.log(insertData)
    return {
      id:insertData.insertId
    }
  })
}
const updateBlog = (id,blogData = {}) => {
  //id就是要更博客的id
  //blogData 是一个博客对象 包含title content 属性
  const title = blogData.title
  const content = blogData.content
  const sql = `
  update blogs set title='${title}',content='${content} where id='${id}' '
  `
  return exec(sql).then(updateData => {
    console.log('updateData',updateData)
    if(updateData.affectedRow > 0) {
      return true
    }
    return false
  })
}

const delBlog = (id,author) => {
  const sql = `delete from blogs where id = '${id}' and author = '${author}';`
  return exec(sql).then(delData => {
    console.log('updateData',delData)
    if(deleData.affectedRow > 0) {
      return true
    }
    return false
  })
  
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}