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
