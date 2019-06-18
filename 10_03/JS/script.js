const IMAGES = document.querySelectorAll("img");
console.log(IMAGES);

function makeSrcSet(imgSrc){
    let markup = [];
    let width = 400;

    for (let i = 0; i < 5; i++) {
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width+=400;
    }
    //below will return a comma separated list with all values of the markup array
    return markup.join();
}

for (let i = 0; i < IMAGES.length; i++) {

    let imgSrc = IMAGES[i].getAttribute("src");

    //stripping off the - 800.jpg (which is 8 characters) off of each image name
    imgSrc = imgSrc.slice(0, -8);
    let srcSet = makeSrcSet(imgSrc);
    console.log(srcSet);

    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);

}
