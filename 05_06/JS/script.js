const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = document.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);

FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt", "");


// var altText = THEIMAGE.getAttribute("alt");
//
// var captionElement = document.createElement("figCaption");
//
// var captionText = document.createTextNode(altText);
//
// captionElement.appendChild(captionText);
//
// console.log(captionElement);
//
// FEATURED.appendChild(captionElement);
//
// THEIMAGE.setAttribute("alt", "");
//
//
// //theres a new append method that makes this procdess much easier. It can be done this way:
// captionElement.append(altText);
// FEATURED.append(captionElement);
// THEIMAGE.setAttribute("alt", "");
