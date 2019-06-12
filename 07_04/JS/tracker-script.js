const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE2 = document.querySelector('.circle2');
const CIRCLE3 = document.querySelector('.circle3');
const CIRCLE4 = document.querySelector('.circle4');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 100;
    var verticalPosition = windowHeight - e.clientY - 100;

    var horizontalPositionForCircle2 = windowWidth - e.clientX-200;
    var verticalPositionForCircle2 = windowHeight - e.clientY-200;
    var horizontalPositionForCircle3 = windowWidth - e.clientX-150;
    var verticalPositionForCircle3 = windowHeight - e.clientY-150;
    var horizontalPositionForCircle4 = windowWidth - e.clientX-250;
    var verticalPositionForCircle4 = windowHeight - e.clientY-250;

    // Set horizontal and vertical position.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';

    CIRCLE2.style.top = verticalPositionForCircle2 + 'px';
    CIRCLE2.style.left = horizontalPositionForCircle2 + 'px';

    CIRCLE3.style.top = verticalPositionForCircle3 + 'px';
    CIRCLE3.style.left = horizontalPositionForCircle3 + 'px';

    CIRCLE4.style.top = verticalPositionForCircle4 + 'px';
    CIRCLE4.style.left = horizontalPositionForCircle4 + 'px';
}

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";
}

function changeColorOnTouchCircle2() {
    CIRCLE2.style.backgroundColor = "black";
    CIRCLE2.style.borderColor = "black";
}

function changeColorOnTouchCircle3() {
    CIRCLE3.style.backgroundColor = "yellow";
    CIRCLE3.style.borderColor = "yellow";
}

function changeColorOnTouchCircle4() {
    CIRCLE4.style.backgroundColor = "yellow";
    CIRCLE4.style.borderColor = "yellow";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);
// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);
CIRCLE2.addEventListener('mouseenter', changeColorOnTouchCircle2, false);
CIRCLE3.addEventListener('mouseenter', changeColorOnTouchCircle3, false);
CIRCLE4.addEventListener('mouseenter', changeColorOnTouchCircle4, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
CIRCLE2.addEventListener('mouseleave', function(){CIRCLE2.removeAttribute("style");}, false);
CIRCLE3.addEventListener('mouseleave', function(){CIRCLE3.removeAttribute("style");}, false);
CIRCLE4.addEventListener('mouseleave', function(){CIRCLE4.removeAttribute("style");}, false);
