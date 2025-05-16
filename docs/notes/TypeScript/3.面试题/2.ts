type A = {
  x: number;
};
type B = {
  x: number;
  y: number;
};
let b: B = {
  x: 2,
  y: 3,
};
let a: A = b;
console.log(a); // { x: 2 }
