const {exec} = require('../db/mysql')

const login = (username,password1) => {
  const sql = `
    select username,realname from users where username='${username}' and password='${password1}';
  `
  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}