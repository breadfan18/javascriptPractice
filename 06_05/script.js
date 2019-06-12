const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

//now we have to divide the clock into segments for each arm..see notes below for each arm

//for hour we divive 360/12 because the round figure is 360 degrees, and 12 is the number of segments for hour arm on the clock face
//then we used to formula below to make sure the hour arm moves with the min arm
let hrPosition = (hr*360/12)+(min*(360/60)/12);
//For min, first we do the same thing as seconds, since there are 60 mins in 1 hr so there can be 60 segments for mins as well
//then, to move the min arm everytime the seconds arm moves 60 secs we do the formula below
let minPosition = (min*360/60)+(sec*(360/60)/60);
//there are 60 seconds, so the round clock must be broken into 60 segments
//since the round figure is 360 degrees, each segment should be 360/60..hor hour hand, we need 12 segments etc
let secPosition = sec*360/60;



HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";


