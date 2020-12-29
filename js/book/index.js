//这里有什么问题
function Book(isbn,title,author) {
  this.setIsbn(isbn)

  // this.isbn = isbn; //public 属性
  // this.title = title;
  // this.author = author;
} 
Book.prototype = {
  setIsbn (isbn) {
    // 会写写什么代码
    //isbn 不能this 要可读
    // private 私有属性,对象的方法内this调用，但是在外界不能访问
    //js 内不存在private,约定，以_下划线开头的就是私有属性
    //内部
    if (!this.checkIsbn(isbn)) 
    throw new Error('ISBN格式有误')
    //外部
    this._isbn = isbn
  },
  getIsbn() {
    return this._isbn;
  },
  checkIsbn(isbn) {
    if(!isbn) return false
    return /\d{3}-\d-\d{3}-\d{5}-\d/.test(isbn)//返回true false
  //  /d  /w字符  ^以这个开始才可以  $以哪个为结束
  }
}

// /\d/.test(3)
// true
// /\d/.test('3')
// true
// /\d/.test('a')
// false
// /\d{2}/.test('3')
// false
// /\d{2}/.test('33')
// true
// /[a-z]{5}/.test('abcdef')
// true
// /\w{5}/.test('abcdef')
// true
// /\w{3,5}/.test('abcdef')
// true
// /\w{3,5}/.test('abcdef11111')
// true
// /^\w{3,5}/.test('abcdef11111')
// true
// /^\w{3,5}/.test('abcdef11111')
// true
// /^[a-z]{3,5}/.test('abcdef11111')
// true
// /^[a-z]{3,5}$/.test('abcdef11111')
// false


Book.prototype.display = function() {

}

//class 只是语法糖

const jsDontKnow = new Book('978-7-121-29899-8','react全栈','婧婧')
// console.log(jsDontKnow.constructor);
// console.log(jsDontKnow.__proto__ == Book.prototype);
console.log(jsDontKnow._isbn);

console.log(Book.prototype.isPrototypeOf(jsDontKnow))
//isPrototypeOf ： 检测 jsDontKnow 是否在Book的原型链上（Book.prototype）
// jsDontKnow.isbn = 'dddd';
//jsDontKnow这个实例对象可以操纵它的属性 publi
// 那么怎么才可以避免呢？