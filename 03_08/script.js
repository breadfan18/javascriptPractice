var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:
console.log("Array length: ", pens.length);

var newPens = pens.slice();
console.log("Newpens array: " + newPens);

newPens.shift();
newPens.unshift("black", "purple", "maroon");
console.log(newPens);

newPens.splice(0, 2);

var indexOfMaroon = newPens.indexOf("orange");
console.log("Index of orange: " + indexOfMaroon);
console.log("Value at index " + indexOfMaroon + " is " + "\"" + newPens[indexOfMaroon] + "\"");

console.log(newPens.join(" | "));
// METHODS:
// Reverse the array:
// pens.reverse();

// Remove the first value of the array:
// pens.shift();

// Add comma-separated list of values to the front of the array:
// pens.unshift("purple", "black");

// Remove the last value of the array:
// pens.pop();

// Add comma-separated list of values to the end of the array:
// pens.push("pink", "prussian blue");

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
// pens.splice(pos, n) // Starts at the seccond item and removes two items.

console.log("After: ", newPens);

// Create a copy of an array. Typically assigned to a new variable:
// var newPens = pens.slice();
// console.log("New pens: ", newPens);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
// var result = pens.indexOf(search, index);
// console.log("The search result index is: ", result);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
// var arrayString = pens.join(separator);
// console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var firstFraction = 3/4;
var secondFraction = 5/7;

var theBiggest = (function (a,b) {
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFraction , secondFraction);


console.log(theBiggest);