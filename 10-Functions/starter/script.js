'use strict';

//setting a default parameter
const bookings = [];

// we can set a parameter to default value and also we can use any expression to do so also we can use already used parameters to calculate the value of next parameter
const createBookings = function (
  flightNumber,
  numpsg = 1,
  price = 200 * numpsg
) {
  //setting default es5 way
  // numpsg = numpsg || 1;
  // price = price || 200;
  const booking = {
    flightNumber: flightNumber, //es5 way
    numpsg,
    price, //es6 way directly setting the property by var name and value
  };
  console.log(booking);
  bookings.push(booking);
};

createBookings('LH123');
createBookings('lh1222', 3);

//skipping a parameter
createBookings('lh34', undefined, 2000); //here due to undefined it will mean as if we have not given any value for that argument as by default this is what value is set for such cases

//higher order function - > in js all functions are first clas functions as they are simple object that can be treated as normal object variables
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//callback functions can help in creating a new level of abstraction as here actual tranformation is deligated to lower level functions
const transformer = function (str, fun) {
  console.log(`original string: ${str}`);
  console.log(`transformed string : ${fun(str)}`);
  console.log(`tranformed by : ${fun.name}`);
};

transformer('this is test string', oneWord);
transformer('first word of this string will be caplitalize', upperFirstWord);

//function returning othe function
const greet = function (greetingmsg) {
  return function (name) {
    console.log(`${greetingmsg} ${name}`);
  };
};
const greetingsTo = greet('hello how are you? ');
console.log(greetingsTo);
greetingsTo('ms dhoni');
greet('hey')('master');

//above function using arrow function
const greetArrow = greetingmsg => names =>
  console.log(`${greetingmsg} ${names} `);
greetArrow('arrow greet')('master');

// call and apply method

const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  bookingss: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );
    this.bookingss.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(2343, 'jonas');
lufthansa.book(4234, 'schhshh');

//all fine till here
//now suppose a new airlines comes and booking functionality works the same but we can't just copy paste that function randomly as it's a bad practice to repeat the code
const eurowings = {
  airline: 'eurowings',
  iatacode: 'EW',
  bookingss: [],
};

//so we extract the function from the first airline object
const book = lufthansa.book;
//this will not work
// book(2333, 'sarah'); //as this is undefined for normal function call
console.log(book);
// here book is just a normal function as studied earlier IMP this keyword that execution context associated with functions get is "undefined" so anything in the method that usage this. type will be accessing property of undefined in strict mode other window object (global object)

//IMP Three method to defined what exactly what "that " points to using function methods call(toWhatThisPointsTo, other args), bind(), apply()
book.call(eurowings, 23, 'sarah');
console.log(eurowings);

book.call(lufthansa, 45, 'jonas');
console.log(lufthansa);

//apply method is similar as call method difference being it does n't take list of arguments instead it takes array which elements it will pass into the function
const swiss = {
  airline: 'swiss',
  iatacode: 'SW',
  bookingss: [],
};
const flightInfo = [344, 'name of passanger'];
book.apply(swiss, flightInfo);
//or we can do
book.call(swiss, ...flightInfo);
console.log(swiss);

//bind method is also used to explicietly define this -> where;
//but main difference is "it return a function with this bind to desired object/thing we want also any other arguments passed to  it lead to partial application i.e. a part of argument to the function will be set earlier and we only need to provide remaining part only while calling function"

const bookEurowings = book.bind(eurowings); //this returns a function with this -> eurowings

const bookLufthansa = book.bind(lufthansa);
bookLufthansa(234, 'random name');
//partail application suppose we want a function of a particular flight number of a particular airline
const bookEurowings24 = book.bind(eurowings, 24);
//now we need to provide only one argument
bookEurowings24('sarah grace');
bookEurowings24('booked24');

//bind usage with EventListeners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//now within event listeners the handler function's this keyword points to element on which that event listern is attached to IMP after binding this will point to desired ojbect
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

//bind use case with partial application{where some parameters need to be preset}
const addTax = (rate, value) => value + value * (rate / 100);
//now suppose we want a new function where rate is fixed and we can just put value and get answer. give null in place of "where this should point to" if there is no this context as like here
const addTax18 = addTax.bind(null, 18);
console.log(addTax18(100));

const addTaxHigherOrder = function (rate) {
  return function (value) {
    return value + value * (rate / 100);
  };
};

console.log(addTaxHigherOrder(18)(100));

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// console.log(typeof [234, 24]);
// console.log(typeof '34234');
// const displayResults = function (type) {
//   if (typeof type === 'object') {
//     console.log(type);
//   } else if (typeof type === 'string') {
//     console.log(`Poll results are ${[...type.split(',')]}`);
//   }
// };
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userInput = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(write option number)`
      )
    );
    if (
      typeof userInput === 'number' &&
      userInput >= 0 &&
      userInput < this.answers.length
    ) {
      this.answers[userInput]++;
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`the poll results are ${this.answers.join(', ')}`);
    }
  },
};

const answerBtn = document.querySelector('.poll');
answerBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

//bonus
// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

//immedietly invoked functions not used in recent time as it was used for encapsulation but now we can achieve same by block scopes but it is still used in case we only want to invoke function only once. for this we trick js by not having an function expression instead we put into smaller brackets letting js think it as expression instead of function expression

(function () {
  console.log(
    'this is coming form IIFE pattern of encapsulating data but not more modern methods such as block technique etc is used'
  );
  const isPrivate = 64; //we can't access this varible form outer scope
})();
(() => {
  console.log(
    `this is coming from IIFE pattern which usage arrow function IIFE pattern was earlier used as a tool to encapsulate data as functions were only way to create scope but not we have other techniques like using block along with let and const for encapsulation purposes`
  );
})();

//closure
const secureBooking = function () {
  let passangerCount = 0;
  return function () {
    passangerCount++;
    console.log(`${passangerCount} : passangers`);
  };
};

//due to closures i.e. function will have access to the enviroment varibles to the execution context in which it was created or born . due to closures the scope chain in preserved even when some exection context is no longer existing. closures lookup have higher priority over scope chain lookups IMP
const booker = secureBooking();
//now booker function scope is global still it can access passangercount vars
booker();
booker();

//as closure is js feature that happens automatically we don't need to manually do this also we can't access in our code directly as it is not any random java object or any data structure. but we can view it in browser console
console.dir(booker);
