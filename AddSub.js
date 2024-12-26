const num1 = parseInt(prompt("enter a first number::"))
const num2 = parseInt(prompt("enter a second number::"))

// Perform calculations
const add = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num2 !== 0 ? num1 / num2 : "undefined (division by zero)";

// Display results
console.log(`Addition: ${add}`);
console.log(`Subtraction: ${sub}`);
console.log(`Multiplication: ${mult}`);
console.log(`Division: ${div}`);