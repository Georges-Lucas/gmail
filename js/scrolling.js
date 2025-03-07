let sections = document.querySelectorAll("section");
let currentIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: "smooth" });
        currentIndex = index;
        updateButtons();
    }
}

function updateButtons() {
    prevBtn.style.display = currentIndex === 0 ? "none" : "flex";
    nextBtn.style.display = currentIndex === sections.length - 1 ? "none" : "flex";
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        scrollToSection(currentIndex - 1);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < sections.length - 1) {
        scrollToSection(currentIndex + 1);
    }
});

// Mise à jour initiale des boutons
updateButtons();
