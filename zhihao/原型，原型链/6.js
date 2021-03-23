function Foo() {

}

var f1 = new Foo();
console.log(f1.__proto__ === Foo.prototype);

console.log(Foo.__proto__ === Function.prototype);