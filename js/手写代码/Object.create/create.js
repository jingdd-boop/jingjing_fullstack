//Object.create 返回一个新的对象

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log('my name is ${this.name}.Am I human ? ${this.isHuman}')
  }
}


function create(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}

const me = create(person)
console.log(me.__proto__ === person)