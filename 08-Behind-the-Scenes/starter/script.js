'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName); //varible lookup returns value

//   function printAge() {
//     let output = `you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // const firstName = 'steven';
//       // console.log(firstName); /this will be undefined as firstName will be initialized to undefined during creation phase of execution context
//       var firstName = 'stacy';
//       var millenial = true;
//       const str = `oh , and you're a millenial ${firstName}`; //as const and let are block scoped only accessible to this block and it's child scopes but it were a var it can be associated to it's parent function or global scope
//       console.log(str);

//       //functions are also block scope
//       function add(a, b) {
//         return a + b;
//       }

//       //reassigning outer scope var
//       output = 'reassigned output'; //it changes the outer variable for everywhere wherever it is accissible
//       console.log(add(4, 6));
//     }
//     console.log(output);
//     // console.log(add(4, 5)); //this will not work as like const and let the functions are also block scoped {{{in strict mode only }}}
//     console.log(millenial); //var vars are function scoped
//     // console.log(str);
//   }
//   printAge();
//   return age;
// }
// // printAge(); not accessible to this scope

// const firstName = 'jonas';
// calcAge(1991);
// //console.log(age); //this will give reference error as scope chain in only one way steet from top parent to bottom child;

// // --------------=========----------
// console.log('--------------=========----------');

console.log(me);
// console.log(job);
// console.log(year); can't access before definition
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(1, 2)); // this will be called even we define it later due to hoisting
// console.log(addExpr(1, 2));

// these two functions will not be called as hoisting of these functions depend upto it they are declared with const and let and behave the same way as let and const

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
//also i tried to declare them with var but error comes out typeErorr : addArrow is not a function
console.log(addArrow(1, 2)); // this will work fine as addArrow is not undefined now as it was before as we tried to access it before

//pitfull of hoisting

//num product is undefined and falsy value so it will be executed even through numProducts is actually 10 so hoisting can be dengerous

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

//example
function deleteShoppingCart() {
  console.log('All product deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
