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

// console.log(me);
// console.log(job);
// console.log(year); can't access before definition
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// console.log(addDecl(1, 2)); // this will be called even we define it later due to hoisting
// console.log(addExpr(1, 2));

// these two functions will not be called as hoisting of these functions depend upto it they are declared with const and let and behave the same way as let and const

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

//var addArrow = (a, b) => a + b;
//also i tried to declare them with var but error comes out typeErorr : addArrow is not a function
//console.log(addArrow(1, 2)); // this will work fine as addArrow is not undefined now as it was before as we tried to access it before

//pitfull of hoisting

//num product is undefined and falsy value so it will be executed even through numProducts is actually 10 so hoisting can be dengerous

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// //example
// function deleteShoppingCart() {
//   console.log('All product deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log('--------------=========----------');
console.log('this keyword practice');

console.log(this); //in global scope this is window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991); // in strict mode this is undefined otherwise it's the global object;

//arrow function parents this is used

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // arrow functions don't get their own this keyword so the use laxical this i.e closest this where they are residing - this of parent
};
calcAgeArrow(1980);

const jonas = {
  birthYear: 1991,
  calcAge: function () {
    console.log(this); //here this will represent object over which the method is called. this refers to the owner of the method
    console.log(2037 - this.birthYear);
  },
};

jonas.calcAge();
// this don't point to the object in which we wrote the method it will always point to the object calling the method

const matilda = {
  birthYear: 2017,
};

matilda.calcAge = jonas.calcAge; //copied calcAge function to matilda object
// method borrowing IMP

matilda.calcAge(); //here this wil point to the matilda object

// IMP this points to always points to object calling the method

// this makes this keyword dynamic

const f = jonas.calcAge;
//function borrowing

// f(); here this is undefined

console.log('Arrow function v/s regular functions ');

var firstName = 'matilda'; //this will introduce bug in case of arrow function here

const jonasObj = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function () {
    var testVar = 'what is this';
    this.namemee = 'testst';
    console.log(this);
    console.log(2037 - this.year);
    const self = this;
    const isMIllenial = function () {
      //is this is undefined in this functions scope
      // console.log(this.year >= 1981 && this.year <= 1996);

      // solution using self
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    //solution using arrow function as arrow function don't get their own this keyword they use their lexical this keyword
    const isMIllenialArrow = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMIllenial();
    isMIllenialArrow();
  },

  greet: () => {
    this.nameeee = 'tests name';
    console.log(this);
    console.log(`Hey ${this.firstName}`); //in arrow function it don't gets it's own this keyword so it used laxical this which is it's parent function this => which is window here; so we will get undefined
  },
};

jonasObj.greet();
jonasObj.calcAge();

// we should never use arrow function as a method IMP

//function inside a method
//as functions get their own this keyword functions inside method this will be undefined

//arguments keyword

const addExpr = function (a, b) {
  console.log(typeof arguments);
  return a + b;
};

addExpr(2, 5, 6, 4, 5, 34);
var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
// arrow functions don't get arguments keyword

addArrow(34, 23);

// we don't use argument keyword now often as we have other multiple ways to handle multiple parameters

// primitive v/s refrenced
let age = 30;
let oldage = age;
age = 31;
console.log(age);

const me = {
  firstName: 'jonas',
  age: 30,
};

const friend = me;

friend.age = 27;
console.log('friend: ', friend);
console.log('me: ', me);

//primitive and reference check
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';
console.log(lastName);
console.log(oldLastName);

//reference
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob'],
};

// const marriedJessica = jessica;
// marriedJessica.lastName = 'davis';
console.log(jessica.lastName);
// console.log(marriedJessica.lastName); //both of these will be same as they have same reference value;

// properly copying an object
const jessicaCopy = Object.assign({}, jessica); //new object is created in heap
jessicaCopy.lastName = 'davis';
jessicaCopy.family.push('mary', 'john'); //here object.assign only does shallow copy so the object inside other object will refrence to the same nested object as family object here;
console.log('before marriage: ', jessica);
console.log('after marriage: ', jessicaCopy);
