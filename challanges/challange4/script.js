// let tip;
// if(bill >= 50 && bill <= 300){
//  tip = bill * (15 / 100);
// }
const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
