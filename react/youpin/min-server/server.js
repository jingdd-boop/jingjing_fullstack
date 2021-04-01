const express = require('express');
const fs = require('fs');
const productRouter = require('./routers/product');
const app = express();
app.listen(3002,() => {
  console.log('server is OK')
});
function pReadFile(file) {
  return new Promise((resolve,reject) => {
    fs.readFile(filePath,'utf8',(err,data) => {
      resolve(data)
    })
  })
}


app.use(async(req,res,next) => {
  //准备数据
  req.$PRODUCT_DATA = JSON.parse(await pReadFile('./mock/product.json'));
  console.log(req.$PRODUCT_DATA)
  next();
})



// app.use('./product',productRouter);
