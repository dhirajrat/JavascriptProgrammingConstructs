const readline = require("prompt-sync");
const prompt=readline();

const num = prompt('Enter a number: to find factorial ');
let fact = 1;
 
for ( i = 1; i <= num; i++ ) {
     fact = fact * i;
}
console.log("Factorial of "+number+ " is " + fact);