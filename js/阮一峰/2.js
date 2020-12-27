/**
 * 
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */
const isTypeof = (o,type) => {
  // object 
  // if(typeof o === 'object') {
    
  //   return typeof o === type //number string ....
  // } else {
  //   console.log(Object.prototype.toString.call(o))
  // }
  if(['number','string','function','undefined'].indexOf(type) > 0) {
    //indexOf 存在返回下标，没出现返回-1
    return typeof o === type;
  } 
    return Object.prototype.toString.call(o).toLowerCase().indexOf(type) > 0;
}

let a = null

// let a = () => {

// }
// let a = [1,2,3];
console.log(isTypeof(a,'null'));
