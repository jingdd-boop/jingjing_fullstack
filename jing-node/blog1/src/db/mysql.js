const mysql = require('mysql');
// const {MYSQL_CONF} = require('../config/db')

const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'12345',
  port:'3306',
  database:'myblog'
})

con.connect()

//执行 sql函数
function exec(sql) {
  const promise = new Promise((reslove,reject) => {
    con.query(sql,(err,result) => {
      if(err) {
        reject(err)
        return
      }
      reslove(result)
    })
  })

  return promise;
  
}

module.exports = {
  exec
}