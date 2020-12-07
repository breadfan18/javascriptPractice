function giveMeEms(pixels) {
	var baseValue = 16;

	function doTheMath() {
		return pixels / baseValue;
	}

	return doTheMath;
}

var smallSize = giveMeEms(12);
var medSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var extraLargeSize = giveMeEms(32);

console.log("Small Size: " + smallSize());
console.log("Medium Size: " + medSize());
console.log("Large Size: " + largeSize());
console.log("Extra Large Size: " + extraLargeSize());




