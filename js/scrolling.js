let sections = document.querySelectorAll("section");
let currentIndex = 0;

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
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