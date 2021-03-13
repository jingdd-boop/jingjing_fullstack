const express = require('express');
const userRouter = require('./user');

//新建app
const app = express();

app.use('/user',userRouter)

app.listen(8000,() => {
  'server 8000 success~~~'
})