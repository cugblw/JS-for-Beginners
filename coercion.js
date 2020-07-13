let a = 7;
let b = '6';
// b = parseInt(b);
b = parseInt(b,10);
let c = a + b;
console.log('Answer: ' + c);

let d = parseInt('bob tabor', 10);
let e = isNaN(d);
console.log(d);
console.log(e);