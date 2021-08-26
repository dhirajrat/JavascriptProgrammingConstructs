const prompt = require("prompt-sync")();

// Todays Date
 let d = new Date();
 let today = "Today is Date : " + d.getDate();
 let time = "Time " + d.getHours() + ":" + (d.getMinutes());
 console.log(today);

// Sum using prompt
let a = parseInt(prompt("Enter a number: "));
let b = parseInt(prompt("Enter a number: "));
let c = a + b;
console.log("sum is: "+c);

/**
 *  Max Or Min From A Random Array
 */
//Declaring array
num = new Array();

//Input The 10 random Two digit Numbers to Array
for(i=0;i<10;i++){
    randNum = Math.floor(Math.random() * 90) + 10;
    console.log(i+" th num is : "+randNum);
    num[i]=randNum;
}
console.log("\nArray Of Number is : "+num);

// Sort The array
num.sort();
console.log("\nArray Of sorted Number is : "+num);

// MAX and MIN from an Array
console.log("Min num from a array : "+num[0]);
console.log("Max num from a array : "+num[num.length-1]);

// Print The Date and month year
date = new Date;
console.log("\nToday's Date is : "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());

// Map declare and define
mapOfNum = new Map([[1,15],[2,19],[3,78]]);
console.log(mapOfNum)


