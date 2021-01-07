const dogs = new Map(); // 
const friends = new Map();
friends.set('黄志乾', '华灯初上');
friends.set('何江涛', '鸡毛');

// 遍历它
friends.forEach(function(value,key){
  console.log(key,value);
})

for(let item of friends.entries()){
  console.log(item);
}