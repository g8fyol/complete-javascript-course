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
let a = 10;
var b = 100;
