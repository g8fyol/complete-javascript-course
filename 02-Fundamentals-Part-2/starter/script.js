"use strict";

let hasDriversLicense = false;
const passTest = true;

// if (passTest) {
//   hasDriverLicense = true; //Uncaught ReferenceError: assignment to undeclared variable hasDriverLicense with use strict mode and no error without strict mode
// }
if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log("can drive");
}

function logger() {
  console.log("my name is jonas");
}
//calling / running/ involking the function - function body will get executed
logger();
//function can receive and return data

function fruitProcessor(appples, oranges) {
  console.log(appples, oranges);
  const juice = `Juice with ${appples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 5);
console.log(appleOrangeJuice);

// functions allow us to write clean code DRY

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge2(1991));

const yearsToRetire = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const leftYears = 65 - age;
  return `${firstName} will be retiring in ${leftYears} years`;
};

console.log(yearsToRetire(1980, "ramu"));
console.log(yearsToRetire(1970, "shayamu"));

function cutFruit(fruit) {
  return fruit * 2;
}

function fruitProcessor1(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor1(2, 3));

const calcAvg = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAvg(44, 23, 71);
console.log(scoreDolphins);
const scoreKoalas = calcAvg(65, 54, 49);

function winner(avgDol, avgKoala) {
  if (avgDol >= 2 * avgKoala) {
    console.log(`Dolphins win `);
  } else if (avgKoala >= 2 * avgDol) {
    console.log("koala wins");
  } else {
    console.log("no team wins");
  }
}

winner(scoreDolphins, scoreKoalas);

const friends = ["micheal", "steven", "peter"];
console.log(friends);

const years = new Array(1919, 1991, 2008);

for (let i = 0; i < years.length; i++) {
  console.log(years[i]);
}

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

friends[1] = "random name";
console.log(friends);

const ages = new Array();
const yearss = new Array(1991, 1984, 1992, 1970);
const current = 2037;
const calcAgetest = function (year) {
  return current - year;
};

for (let i = 0; i < yearss.length; i++) {
  ages[i] = calcAgetest(yearss[i]);
}
console.log(yearss);
console.log(ages);
