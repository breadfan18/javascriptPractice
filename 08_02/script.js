



// const testWrapper = document.querySelector(".test-wrapper");
// const testArea = document.querySelector("#test-area");
// const originText = document.querySelector("#origin-text p").innerHTML;
// const resetButton = document.querySelector("#reset");
// const theTimer = document.querySelector(".timer");
//
// var timer = [0,0,0,0];
//
// // Add leading zero to numbers 9 or below (purely for aesthetics):
//
//
// // Run a standard minute/second/hundredths timer:
// function runTimer() {
//     let currentTime = timer[0] + ":" +timer[1] + ":" + timer[2];
//     theTimer.innerHTML = currentTime;
//     //we are just incrementing the 4th value in array, that means index 3 or the timer array variable
//     timer[3]++;
//
//     //now we just need to do some math to set the milisec, sec and mins properly
//     //the floor method is just to ignore decimals.
//     //timer[0] is for mins, timer[1] is for seconds, timer[2] is for ms
//     timer[0] = Math.floor((timer[3]/100)/60);
//     timer[1] = Math.floor((timer[3] / 100) - (timer[0]) * 60);
//     timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
//
// }
//
// // Match the text entered with the provided text on the page:
// function spellcheck() {
//     let textEntered = testArea.value;
//     console.log(textEntered);
// }
//
// // Start the timer:
// function start() {
//     let textEnteredLength = testArea.value.length;
//     if (textEnteredLength === 0) {
//         setInterval(runTimer, 10);
//     }
//
//     console.log(textEnteredLength);
// }
//
//
// // Reset everything:
// function reset(){
//     console.log("Reset button has been pressed!");
// }
//
// // Event listeners for keyboard input and the reset button:
// testArea.addEventListener("keypress", start, false);
// testArea.addEventListener("keyup", spellcheck, false);
// resetButton.addEventListener("click", reset, false);
