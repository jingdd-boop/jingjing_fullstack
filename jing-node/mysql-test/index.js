const mysql = require('mysql')

//创建新的对象
const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'12345',
  port:'3306',
  database:'myblog'
})

//连接
con.connect()

//执行 sql 语句
//const sql = `select * from users;`
//const sql = `update users set realname='婧大大' where username='jingda'`
//const sql = `insert into blogs (title,content,createtime,author) values ('标题3','内容3','1617466660312','jingjing2');`
const sql = `select * from blogs;`
con.query(sql,(err,result) => {
  if(err) {
    console.log(err)
    return
  }
  console.log(result)
})

//关闭连接
con.end()