function convertToFahrenheit(celsius){


    const degreeFahrenheit = (celsius * 1.8) + 32


    console.log(celsius +" degree celsius is equal to"+ degreeFahrenheit.toFixed(2)+" degree fahrenheit.");
}


function convertToCelcius(fahrenheit){

    const degreeCelsius = (fahrenheit-32)*0.5556;

    console.log(fahrenheit +"degree celsius is equal to"+ degreeCelsius.toFixed(2)+ "degree fahrenheit");

}
const prompt = require ('prompt-sync')();

console.log("1]Celsius To Fahrenheit\n 2]Fahrenheit To Celcius");

const choice = parseInt(prompt("Enter your choice :- "));
switch(choice) {

    case 1:

            const celsius = prompt("Enter a celsius value : ");
            convertToFahrenheit(celsius);
            break;
    case 2:

            const fahrenheit = prompt("Enter a fahrenheit value : ");
            convertToCelcius(fahrenheit);
            break;

    default: console.log("Invalid Input"); 
}