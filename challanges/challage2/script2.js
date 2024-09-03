function calcTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * (15 / 100);
  } else {
    tip = bill * (20 / 100);
  }

  return tip;
}

const billdata = new Array(125, 555, 44);
const tips = new Array();
const total = new Array();
for (let i = 0; i < billdata.length; i++) {
  tips[i] = calcTip(billdata[i]);
  total[i] = billdata[i] + tips[i];
}
console.log(tips);
console.log(total);
