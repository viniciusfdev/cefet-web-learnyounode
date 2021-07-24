// ## BABY STEPS (Exercise 2 of 13)  
   
//   Create a file named baby-steps.js.  
   
//   Write a program that accepts one or more numbers as command-line arguments  
//   and prints the sum of those numbers to the console (stdout).  

const [,,...numbers] = process.argv;
const result = numbers.reduce((p, c) => Number(p) + Number(c));
console.log(result);