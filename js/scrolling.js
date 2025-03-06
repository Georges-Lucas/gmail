let sections = document.querySelectorAll("section");
let currentIndex = 0;

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

document.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        if (currentIndex < sections.length - 1) {
            currentIndex++;
        }
    } else {
        if (currentIndex > 0) {
            currentIndex--;
        }
    }
    scrollToSection(currentIndex);
});

document.querySelectorAll("nav a").forEach((link, index) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        currentIndex = index;
        scrollToSection(currentIndex);
    });
});

function nextSection(index) {
    if (index < sections.length) {
        currentIndex = index;
        scrollToSection(currentIndex);
    }
}

function prevSection(index) {
    if (index >= 0) {
        currentIndex = index;
        scrollToSection(currentIndex);
    }
}