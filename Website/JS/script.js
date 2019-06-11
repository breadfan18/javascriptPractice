const CTAELEMEMT = document.querySelector(".cta a");

//we are running to see if the .cta > a tag has a target attribute already, and if not, create a new target attribute
if (CTAELEMEMT.hasAttribute("target")){
    console.log(CTAELEMEMT.getAttribute("target"));
}else{
    CTAELEMEMT.setAttribute("target", "_blank");
}


console.log(CTAELEMEMT.attributes);
