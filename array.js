var pens;

pens = ["red", "blue", "green", "orange"];

var fourthPen = pens[3];

console.log("Before: ", pens);

console.log("Array Length: " + pens.length);

// pens.reverse();

var result = pens.indexOf("orange", 1);
console.log("The value is: " + result);


//joins
var arrayString = pens.join(" - ");
console.log("String from array: " + arrayString);
