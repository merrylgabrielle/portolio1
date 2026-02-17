// Typewriter Effect for Fedora Terminal
const terminalText = "neofetch --mode IT Student --status active";
const target = document.getElementById("typewriter");
let index = 0;

function type() {
    if (index < terminalText.length) {
        target.innerHTML += terminalText.charAt(index);
        index++;
        setTimeout(type, 70);
    }
}

window.onload = type;

const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
}

// 1. Terminal Effect
const terminalText = "neofetch --mode IT Student --status active";
const target = document.getElementById("typewriter");
let index = 0;
function type() { if (index < terminalText.length) { target.innerHTML += terminalText.charAt(index); index++; setTimeout(type, 60); } }

// 2. Facebook-style Gallery Logic
const cats = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg'];
let currentCatIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImgs = document.querySelectorAll('.gallery-img');

// Open gallery
galleryImgs.forEach((img, idx) => {
    img.onclick = () => {
        currentCatIndex = idx;
        showImage();
        lightbox.style.display = 'flex';
    };
});

function showImage() {
    lightboxImg.src = cats[currentCatIndex];
}

function nextImage() {
    currentCatIndex = (currentCatIndex + 1) % cats.length;
    showImage();
}

function prevImage() {
    currentCatIndex = (currentCatIndex - 1 + cats.length) % cats.length;
    showImage();
}

// Click events for desktop arrows
document.getElementById('next-cat').onclick = (e) => { e.stopPropagation(); nextImage(); };
document.getElementById('prev-cat').onclick = (e) => { e.stopPropagation(); prevImage(); };

// Swipe logic for mobile
lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextImage(); // Swiped left
    if (touchEndX > touchStartX + 50) prevImage(); // Swiped right
}

// Close logic
document.querySelector('.close-lightbox').onclick = () => { lightbox.style.display = 'none'; };
lightboxImg.onclick = (e) => e.stopPropagation(); // Prevents closing when clicking the image itself

// 3. Theme Toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.onclick = () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
};

window.onload = () => {
    type();
    if (localStorage.getItem("theme") === "light") document.body.classList.add("light-theme");
};
