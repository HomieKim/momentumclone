const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

// const bgImg = document.createElement("img");

// bgImg.src = `imgs/${randomImg}`;
// bgImg.className = "bg";

// document.body.appendChild(bgImg);
document.body.style.backgroundImage = `url(imgs/${randomImg})`;