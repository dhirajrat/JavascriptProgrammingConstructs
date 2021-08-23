// Functions checking

let empAttendance = Math.floor(Math.random() * 10) % 2;
const EMPPRESENT = 1;

if(empAttendance == EMPPRESENT){
    console.log("Employee is PRESENT");
} else {
    console.log("Employee is ABSENT");
}