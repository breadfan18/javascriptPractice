var date = new Date();
var name = "Swaroop";
document.body.innerHTML = "<h1>Today is: " + date + "</h1>";


var a = 5;
var b = 5;
var theNumbersMatch;

if (a == b) {
  theNumbersMatch = true;
}else {
  theNumbersMatch = false;
}

console.log("The numbers match: " + theNumbersMatch);


//Ternary Operator
//basically like saying if firstFraction == secondFraction, its firstFraction match, otherwise no match
 a == b ? console.log("Match") : console.log("No Match");
