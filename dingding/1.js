let x = 10;
let foo = () => {
  console.log(x);
  let x = 20;
  x++;
}
foo();