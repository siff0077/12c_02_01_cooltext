"use strict";

window.addEventListener("load", main);

function main() {
    // Select cooltxt
    const cooltxt = document.querySelector("#cooltxt");

    // get txt, split it and put it in an array
    let txtForAnimation = Array.from(cooltxt.textContent);

    // Remove txt
    cooltxt.textContent = "";

    txtForAnimation.forEach((span, index) => {
        const letter = document.createElement("span");
        letter.classList.add("span", "fadefrombottom");
        letter.style.setProperty("--span", index);
        if (span === " ") {
            letter.innerHTML = "&nbsp;";
        } else {
            letter.textContent = span;
        }
        cooltxt.append(letter);
    });
}