// const object = {
//   message:'hello world',

//   logMessage() {
//     console.log(this.message);
//   }
// };

// setTimeout(object.logMessage,1000);

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
 
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);

// var length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length:5,
//   method() {
//     arguments[0]();
//   }
// };

// object.method(callback,1,2);