/**
 * 获得一个唯一的ID
 * @return {string}
 */
// const uniqueid = () => {
//   let  t = +new Date;
//   //时间戳，new Date()是一个对象，加一个+号，进行类型转换
//   let ranNum = Math.ceil(Math.random()*1000);
//   return t + "" + ranNum;

// }

const uniqueid = () => +new Date + "" + Math.ceil(Math.random()*1000);
console.log(uniqueid()); 