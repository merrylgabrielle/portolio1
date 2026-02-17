// Typewriter Effect for Fedora Terminal
const terminalText = "neofetch --mode 3d_artist --status active";
const target = document.getElementById("typewriter");
let index = 0;

function type() {
    if (index < terminalText.length) {
        target.innerHTML += terminalText.charAt(index);
        index++;
        setTimeout(type, 70);
    }
}

// Start typing when page loads
window.onload = type;

// KDE Theme Toggle Logic
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    
    // Save preference to local storage
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
}