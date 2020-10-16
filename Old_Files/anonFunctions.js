
//to use anonymous functions, you create a variable and then assign it with just an unnamed function(), followed by a code block
var theBiggest1 = function (a, b) {
    var result;
    a > b ? result = ["a: ", a] : result = ["b: ", b];
    //console.log(result);
    return result;
}

//to use the function, you call the variable name with parenthesis as below:
//if the anonymous function takes arguments, then when the variable is called, then you add the arguments in the parenthesis.
console.log(theBiggest1(7/9, 13/25));

//immediately invoked function expression
// first, wrap the entire anon function a () and then add a new () at the end of the function code block, meaning after the }, and pass any arguments inside that parenthesis.
//in this example above, immediately invoked function would like like below:
var firstFraction = 7/9;
var secondFraction = 13/25;

var theBiggest2 = (function (a, b) {
    var result;
    a > b ? result = ["a: ", a] : result = ["b: ", b];
    //console.log(result);
    return result;
})(firstFraction, secondFraction)
//now, as a result, you can console log out just the variable, meaning without the () and it will work the same way
console.log(theBiggest2);


