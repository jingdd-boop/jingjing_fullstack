// +0 === -0 true
//NaN === NaN false

const is = (x,y) => {
  if(x === y) {
    return x !== 0 || y !== 0 || 1/x === 1/y;
  } else {
    return x !== x && y !== y;
  }
}

console.log(is(-0,+0))
console.log(is(NaN,NaN))