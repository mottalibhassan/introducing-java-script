/***

    Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let childrenAge = 12 ;
let student = false ;
let seniorCitizen = false ;

if (childrenAge <= 10 ){
    console.log("Free")
}
else if ( student == true){
    console.log("50% off")
}
else if ( seniorCitizen == true ){
    console.log("15% off")
}
else{
    console.log("Please pay 800 tk")
}