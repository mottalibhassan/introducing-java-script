/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let marks = 39;

if ( marks <= 100 && marks >= 90) {
    console.log(" Your Grade is A") 
}
else if ( marks <= 89 && marks >= 80) {
    console.log(" Your Grade is B")
}
else if ( marks <= 79 && marks >= 70) {
    console.log(" Your Grade is C")
}
else if ( marks <= 69 && marks >= 60) {
    console.log(" Your Grade is D")
}
else {
    console.log(" Your Grade is F")
}