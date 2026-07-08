function getRandomVibrantColor(exclude) {
    let hue;
    let color;

    do {
        hue = Math.floor(Math.random() * 360);
        color = `hsl(${hue}, 100%, 55%)`;
    } while (exclude && exclude.has(color));

    if (exclude) {
        exclude.add(color);
    }

    return color;
}

window.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");

    if (!nameElement) return;

    const letters = nameElement.textContent.trim().split("");

    nameElement.innerHTML = letters
        .map(letter => `<span class="name-letter">${letter}</span>`)
        .join("");

    document.querySelectorAll("#name .name-letter").forEach(letter => {
        letter.style.color = "#70C9CC";

        letter.addEventListener("mouseenter", () => {
            letter.style.color = getRandomVibrantColor(
                new Set(["#70C9CC"])
            );
        });
    });
});