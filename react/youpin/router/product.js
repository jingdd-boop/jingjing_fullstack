const express = require('express');
const router = express(router)
router.get('./list',(req,res) => {
  res.send({
    data:req.$PRODUCT_DATA,
    code:0
  })
})
router.get('/info',(req,res) => {
  console.log(req.query.id)
  req.$PRODUCT_DATA.find(item => item.id == req.query.id);
  res.send({
    data:info,
    code:0
  })
})
module.exports = router