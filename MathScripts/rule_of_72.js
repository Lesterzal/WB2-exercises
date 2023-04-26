let savings = 350000;
let interestRate = 7;

let yearsToDouble = 72 / interestRate;

let doubledValue = savings * 2;

console.log(`At a ${interestRate}% interest rate, your savings account will be worth $${doubledValue.toFixed(2)} in ${yearsToDouble.toFixed(1)} years`);
