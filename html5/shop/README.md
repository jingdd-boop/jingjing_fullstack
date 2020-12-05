# skr-shop 抖音电商

## 订单功能

### 模块化
- 地址表
  设计这个表
  需求
 
  consignee 收货人姓名 string
  mobile  手机 string
  mongodb JSON数据可以直接存入
  {
    id: 86,
    name: '中国'
  }
  country object id int64 国家ID
  country object name string 国家名称
  province object id int64 省ID
  province object name string 省名称
  city
  county 街道
  street
  detailed_address 用户填的
  postal_code string 邮编
  address_id int64 地址ID
  时间戳+随机数4位  

  `+new Date+Math.ceil(Math.random()*10000)`

