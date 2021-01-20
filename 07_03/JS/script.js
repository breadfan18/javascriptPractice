

const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    //e is short for event. prevents the default event. for eg, the CTA variable, in html has an href that it tries to open by default
    //this preventDefault method will stop that from happening, specifically when the reveal function is called.
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function () {
    console.log("The button was clicked", false);
});
