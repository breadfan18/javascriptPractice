function multiply (a, b){
  var result = a*b;
  console.log(result);
  return result;
}

console.log(multiply(3,4));


function findBiggestFraction(){
  a > b ? console.log("a: ", a) : console.log("b: ", b);
}


var a = 3/4;
var b = 5/7;

findBiggestFraction();

prompt("We need some information", "Enter your name");

var result = confirm("Do you really want to leave?");
if (result) {
    alert("Thanks for visiting");
}
else {
  alert("Thank you for staying")
}

function test (number){
  while (number < 5){
    number++;
  }
  return number;
}

alert(test(2));
