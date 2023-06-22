const images = ["2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.body;
const src = `./img/${chosenImage}`;

body.style.backgroundImage = `url(${src})`;
