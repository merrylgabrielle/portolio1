// --- 1. CONFIGURATION & DECLARATIONS ---
// We only declare these ONCE at the top
const terminalText = "neofetch --mode IT Student --status active";
const target = document.getElementById("typewriter");
let terminalIndex = 0; // Renamed to avoid confusion

const cats = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg'];
let currentCatIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImgs = document.querySelectorAll('.gallery-img');
const themeBtn = document.getElementById("theme-toggle");

// --- 2. TERMINAL TYPEWRITER LOGIC ---
function type() {
    if (terminalIndex < terminalText.length) {
        target.innerHTML += terminalText.charAt(terminalIndex);
        terminalIndex++;
        setTimeout(type, 60);
    }
}

// --- 3. GALLERY & SWIPE LOGIC ---
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

// Desktop Clicks
document.getElementById('next-cat').onclick = (e) => { e.stopPropagation(); nextImage(); };
document.getElementById('prev-cat').onclick = (e) => { e.stopPropagation(); prevImage(); };

// Mobile Swipes
lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextImage(); 
    if (touchEndX > touchStartX + 50) prevImage(); 
}

// Close Gallery
document.querySelector('.close-lightbox').onclick = () => { lightbox.style.display = 'none'; };
lightbox.onclick = () => { lightbox.style.display = 'none'; };
lightboxImg.onclick = (e) => e.stopPropagation(); 

// --- 4. THEME TOGGLE LOGIC ---
themeBtn.onclick = () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
};

// --- 5. INITIALIZATION ---
// This runs EVERYTHING when the window loads
window.onload = () => {
    type(); // Starts the typewriter
    
    // Check for saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
    }
};
