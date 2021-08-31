function isPrime(userInput) {

    if( userInput == 0 || userInput == 1){


        console.log(userInput +" is neither prime nor composite.");
        return;
    }

    let flag=0;
    for (let i=2 ;i<=userInput; i++ ) {

        flag = 1;
        if( userInput % i == 0)
            flag = 0;
            
    }

    if ( flag == 1) 
        console.log( userInput+" is Prime!");
    else
        console.log(userInput+" is Not a Prime!");
}
    

function checkPalindrome(userInput) {
    let number = userInput;
    let reverse = 0;
    let remainder = 0;
    while ( number != 0){
        remainder = number % 10;
        reverse = (reverse*10) + remainder ;
        number = parseInt(number/10);
    }

    if( userInput == reverse)
        console.log(userInput + " is Palindrome");
    else
        console.log(userInput+" is Not Palindrome"); 

}

const prompt = require ('prompt-sync')();


let userInput = parseInt(prompt("Enter a number: "));
checkPalindrome(userInput);


isPrime(userInput);
