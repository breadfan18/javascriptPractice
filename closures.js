//closures are basically a function running inside of another function

function doSomeMath(){
    var a = 5;
    var b = 4;

    function multiply(){
        var result = a * b;
        return result;
    }


    return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());


//lets look at another example of closure
function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath() {
        return pixels/baseValue;
    }

    return doTheMath;
}

var smallSize = giveMeEms(12);
var medSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xLargeSize = giveMeEms(32);

console.log("Small size: ", smallSize());
console.log("Med size: ", medSize());
console.log("Large size: ", largeSize());
console.log("Extra Large size: ", xLargeSize());

