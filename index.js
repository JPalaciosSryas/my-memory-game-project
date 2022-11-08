let image1 = "url('./assets/goku-pelon.jfif')"
let image2 = "url('./assets/auron.jfif')"
let image3 = "url('./assets/explosion.jpg')"
let image4 = "url('./assets/dora.jfif')"
let image5 = "url('./assets/mrclean.jpg')"
let image6 = "url('./assets/richi-phelps.jfif')"
let image7 = "url('./assets/goku-pelon.jfif')"
let image8 = "url('./assets/auron.jfif')"
let image9 = "url('./assets/explosion.jpg')"
let image10 = "url('./assets/dora.jfif')"
let image11 = "url('./assets/mrclean.jpg')"
let image12 = "url('./assets/richi-phelps.jfif')"


let cards = document.querySelectorAll(".inner-card");

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];

const randomImages = (arr) => {
    let currentIndex = Math.floor(Math.random()*images.length);
    let currentEle = arr[currentIndex];
    console.log(currentEle);
    return currentEle;
}



cards.forEach(card => {
    card.style.backgroundImage = randomImages(images);
})