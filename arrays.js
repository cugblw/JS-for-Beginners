let a = [4, 8, 15, 16, 23, 42];
let b = [ 'david', 'eddie', 'alex', 'michael' ];

/*
console.log(a[0]);
console.log(a[1]);
console.log(a);
*/

// a[0] = 7;
// console.log(a);

// object
// console.log(typeof a);

// let c = [4, 'alex', true];
// console.log(c);

// undefined
// console.log(b[4]);

// console.log(a.length); // actual number, Not zero based

// a[10] = 77;
// console.log(a.length);
// console.log(a);
a.push(77); // Append an element in the last of an array
console.log(a);
console.log(a.length);

a.pop();
a.pop(); // Remove the last element of an array
a.pop();
console.log(a);
console.log(a.length);