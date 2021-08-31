const readline = require("prompt-sync");
const prompt=readline();
 

const num = prompt('Enter a number from 1 to 7: ');
 


switch(Number(num)) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;
        
    default:
        console.log("invalid input");
        break;
 }