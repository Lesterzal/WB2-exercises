const payRates = 10.00;
const workHours = 45;
let grossPayment;

if (workHours <= 40) {
  grossPay = payRates * workHours;
} else {
  grossPay = (payRate * 40) + ((workHours - 40) * (payRates * 1.5));
}

const annualGrossPay = grossPay * 52;

let taxRate;
const filingStatus = "Single";

if (filingStatus === "Single") {
  if (annualGrossPay < 9875) {
    taxRates = 0.10;
  } else if (annualGrossPay >= 9875 && annualGrossPay < 40125) {
    taxRates = 0.12;
  } else if (annualGrossPay >= 40125 && annualGrossPay < 85525) {
    taxRates = 0.22;
  } else if (annualGrossPay >= 85525 && annualGrossPay < 163300) {
    taxRates = 0.24;
  } else if (annualGrossPay >= 163300 && annualGrossPay < 207350) {
    taxRates = 0.32;
  } else if (annualGrossPay >= 207350 && annualGrossPay < 518400) {
    taxRates = 0.35;
  } else if (annualGrossPay >= 518400) {
    taxRates = 0.37;
  }
} else if (filingStatus === "Joint") {
  if (annualGrossPay < 19750) {
    taxRates = 0.10;
  } else if (annualGrossPay >= 19750 && annualGrossPay < 80250) {
    taxRates = 0.12;
  } else if (annualGrossPay >= 80250 && annualGrossPay < 171050) {
    taxRates = 0.22;
  } else if (annualGrossPay >= 171050 && annualGrossPay < 326600) {
    taxRates = 0.24;
  } else if (annualGrossPay >= 326600 && annualGrossPay < 414700) {
    taxRates = 0.32;
  } else if (annualGrossPay >= 414700 && annualGrossPay < 622050) {
    taxRates = 0.35;
  } else if (annualGrossPay >= 622050) {
    taxRates = 0.37;
  }
}

const taxWithheld = grossPay * taxRates;
const netPay = grossPay - taxWithheld;

console.log(`You worked ${workHours} hours this period.`);
console.log(`Because you earn $${payRates.toFixed(2)} per hour, your gross pay is $${grossPay.toFixed(2)}`);
console.log(`Your filing status is ${filingStatus}`);
console.log("Your tax withholding this period is $" + taxWithheld.toFixed(2));
console.log("Your net pay is $" + netPay.toFixed(2));