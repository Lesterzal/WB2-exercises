let payRate = 24.50;
let hoursWorked = 48;
let regularHours = 40;
let overtimeRate = 1.5;

let grossPay;

if (hoursWorked > regularHours) {
  let overtimeHours = hoursWorked - regularHours;
  grossPay = (regularHours * payRate) + (overtimeHours * payRate * overtimeRate);
} else {
  grossPay = hoursWorked * payRate;
}

console.log(`Pay rate: $${payRate.toFixed(2)}`);
console.log(`Hours worked: ${hoursWorked}`);
console.log(`Gross pay: $${grossPay.toFixed(2)}`);

