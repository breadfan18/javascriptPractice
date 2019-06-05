function findBiggestFraction (a, b){
  //console.log("The function is running");
  var result;
  a > b ? result = ["firstFraction", a] : result = ["secondFraction: ", b];
  return result;
}


var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult  = findBiggestFraction(firstFraction, secondFraction);

console.log(fractionResult);

console.log("First fraction: ", firstFraction);
console.log("Second fraction: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is bigger");