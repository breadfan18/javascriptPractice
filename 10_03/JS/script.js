const IMAGES = document.querySelectorAll("img");
console.log(IMAGES);

for (let i = 0; i < IMAGES.length; i++) {

    let imgSrc = IMAGES[i].getAttribute("src");

    //stripping off the - 800.jpg (which is 8 characters) off of each image name
    imgSrc = imgSrc.slice(0, -8);
    console.log(imgSrc);

    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);

}
