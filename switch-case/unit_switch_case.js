const readline = require("prompt-sync");
const prompt=readline();
  

const num = prompt('Enter a number from 1, 10, 100, 1000 ...... ');
 


switch(Number(num)) {
    case 1:
       console.log("Units");
       break;
    case 10:
       console.log("Tens");
        break;
    case 100:
       console.log("Hundred");
         break;
    case 1000:
        console.log("Thousands");
        break;
    case 10000:
        console.log("TenThousands");
        break;
     default:
         console.log("Wrong input!");
         break;
 }