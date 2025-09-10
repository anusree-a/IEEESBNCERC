const carousel = document.getElementById('carousel3d');
const images = Array.from(carousel.querySelectorAll('img'));
const imgCount = images.length;
const radius = 300;
let currentIndex = 0;

// Pre-calculate fixed positions in circle
function getPosition(i) {
  const theta = (2 * Math.PI * i) / imgCount;
  const x = radius * Math.sin(theta);
  const z = radius * Math.cos(theta);
  return { x, z };
}

function updateCarousel() {
  images.forEach((img, i) => {
    const posIndex = (i - currentIndex + imgCount) % imgCount;
    const { x, z } = getPosition(posIndex);
    img.style.transform = `translateX(${x}px) translateZ(${z}px) translateY(-50%)`;
  });
}

function rotateCarousel(direction) {
  currentIndex = (currentIndex - direction + imgCount) % imgCount;
  updateCarousel();
}

updateCarousel();
