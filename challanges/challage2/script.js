let massMark, heightMark, massJohn, heightJohn;

massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

function bmi(mass, height) {
  // return mass / height ** 2;
  return mass / (height * height);
}

let BMIMark = bmi(massMark, heightMark);
let BMIJohn = bmi(massJohn, heightJohn);

console.log(BMIJohn, BMIMark);

let markHigherBMI = BMIMark > BMIJohn;
console.log("markHigherBMI" + markHigherBMI);

if (BMIJohn > BMIMark) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher then Mark's");
}

if (BMIJohn > BMIMark) {
  console.log(`Mark's BMI (${BMIMark}) is higher then John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher then Mark's (${BMIMark})`);
}
