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
