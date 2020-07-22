/* function first(){
    return this;
}

console.log(first() === global);
 */

// this is Node's global object
// because that's where the 
// first method was called.

/*
function second(){
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined);
*/

let myObject = {
    value: 'My Object'
};

// value is set on the global object
global.value = 'Global object';

function third() {
    return this.value;
}

console.log(third());