//below is an example of arrow functions
var sumTotal = (price, tax) => price * ((tax / 100)+1);

//that code is the same as:
var sumTotal = function (price, tax) {
    return price * ((tax / 100)+1);
}


