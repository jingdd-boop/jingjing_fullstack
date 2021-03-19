// const object = {
//   message:'hello,world',
//   getMessage() {
//     const message = 'hello,earth';
//     return this.message;
//   }
// };
// console.log(object.getMessage());

function Person(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Person('jing');
console.log(cat.getName());
const { getName } = cat;
console.log(getName());