/* let js = "amazing";
if (js === "amazing") {
  // alert("JavaScript is fun");
}

console.log(40 + 8 + 23 - 10);
console.log("jonas");
console.log(23);

let firstName = "Jonas"; // variable is like a box and name of variable is a lable on the box
console.log(firstName); //camel case
let jonas_matilda = "JM";
let $year = 3; //Uncaught SyntaxError: identifier starts immediately after numeric literal
console.log($year);
const PI = 3.14;

 */

/* let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");
console.log(typeof true);
console.log(typeof Boolean);
console.log(typeof undefined); //undefined
console.log(typeof null); //object

javaScriptIsFun = "Yes!";
console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);
 */
// console.log(getName);
// getName();
// console.log(x);
/* var x = 7;
a();
b();
console.log("global", this.x);
 */
/* function getName() {
  console.log("namaste js");
}
console.log(getName);
getName();
console.log(x);

var getName1 = () => {
  console.log("namaste js");
  //this arrow function will behave like a varibale
}; */
/* 
function a() {
  var x = 10;
  console.log("inside a", x);
}
console.log(this);

function b() {
  console.log();
  var x = 90;
  console.log(this);
  console.log("inside b", x);
}

var aa;
console.log(aa);

if (aa === undefined) {
  console.log("a is undefined");
} */
/* var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square3 = square(3); */

/* function a() {
  var b = 100;
  function c() {
    console.log(this);
    console.log(b);
  }
  c();
}

a(); */

// let var and const

// console.log(a); //Uncaught ReferenceError: can't access lexical declaration 'a' before initialization
/* let a = 10;
var b = 100; */
/* 
let age = 20;
age = 21;

const birthYear = 1991;
// birthYear = 1992; //Uncaught TypeError: invalid assignment to const 'birthYear'

//we can also use var without let etc but very bad practice
year = 2021;
console.log(year);
console.log(2 ** 3);

const firstName = "Jonas";
const lastName = "sch";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

let x = 10 + 5;
x += 10;
x++;
// x *= 2;

// console.log(x);
// console.log(67 > 78);

// // console.log(now - 1991 > now - 2018);

// x = y = 35 - 10;
// // left to right - has higher precendence x = y = 25 now y = 25 and then x = 25 due to right to left

// const first = "Jonas";
// const job = "teacher";
// const birthyear = 1991;
// // const year = 2037;

// const jonas = "i'm" + first + " " + (year - birthYear);
// //multiline string
// console.log(
//   "string with \n\
//   multiline \n string"
// );

// const ages = 15;

// if (ages >= 18) {
//   console.log("you are eligible for driving license");
// } else {
//   console.log("you are not eligible for driving licence");
//   console.log(`wait for ${18 - ages} years`);
// } */

// const years = 1998;
// if (years <= 2000) {
//   let century = 20;
// } else {
//   let century = 19;
// }

// // console.log(century);

// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type cohersion
// console.log("i'm " + 18);
// //number to string

// //string to number
// console.log("23" - "45");
// console.log("23" * "2");
// console.log("23" * 2);
// console.log("23" / 2);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// let valuess;
// if (valuess) {
//   console.log("defined value");
// } else {
//   console.log("undefinded as it's falusy");
// }

// console.log(18 === "18"); //false as no cohersion
// console.log(18 == "18");

// const fav = Number(prompt("enter your favourite number"));
// console.log(typeof fav);
// console.log(fav);

// if (fav === 23) {
//   console.log("cool 23 is a an amazing number");
// // }

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("you are able to drive");
// } else {
//   console.log("other should drive");
// }

// const isTired = true;

// console.log(hasDriversLicense || isTired || hasGoodVision);

// console.log(`----------------`);
// const day = "saturday";

// switch (day) {
//   case "monday":
//     console.log("this is monday");
//     break;
//   case "tuesday":
//     console.log("this is tuesday");
//     break;
//   case "wednesday":
//     console.log("this is wednesday");
//     break;
//   case "thrusday":
//     console.log("this is thruday");
//     break;
//   case "friday":
//     console.log("this is friday");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("holiday");
//     break;
//   default:
//     console.log("this is no day");
// }

// age >= 18
//   ? console.log("you can drink alcohol")
//   : console.log("only soft drinks");

const age = 23;
console.log(age >= 18 ? "you can drink alcohol" : "only soft drinks");
