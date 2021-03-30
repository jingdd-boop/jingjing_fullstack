const http = require('http')
const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

//用于处理postData
const getPostData = (req) => {
  const promise = new Promise((resolve,reject) => {
    if(req.method !== 'POST') {
      resolve({})
      return
    }
    if(req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }

    let postData = '';
    req.on('data',chunk => {
      postData += chunk.toString()
    })
    req.on('end',() => {
      if(!postData) {
        resolve({})
        return
      } 
      resolve(
        JSON.parse(postData)
      )
    })
  })
  return promise
}

const server = http.createServer((req,res) => {
  //设置返回格式
  res.setHeader('Content-type','application/json')
  //解析query
  const url = req.url;
  req.query = querystring.parse(url.split('?')[1])

  //处理postData
  getPostData(req).then(postData => {
    req.body = postData

    
  //处理blog路由
  const blogData = handleBlogRouter(req,res)
  if(blogData) {
    res.end(
      JSON.stringify(blogData),
      // JSON.stringify({
      //   error:0,
      //   data:[],
      //   message:'xxx'
      // })
    )
    return 
  }

   //处理User路由
   const userData = handleUserRouter(req,res)
   if(userData) {
     res.end(
       JSON.stringify(userData)
     )
     return 
   }

   //未命中
   res.writeHead(404,{"Content-type":"text/plain"})
   res.write("404 not found")
   res.end()


  })

   
  // const resData = {
  //   name:'jing',
  //   site:'baidu',
  //   env:
  // }

  // res.end(
  //   JSON.stringify(resData)
  // )
});


 

server.listen(3000,() => {
  console.log('listening on')
})
console.log('obk')


//process.NODE_ENV