// main.js

"use strict";

const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");

inputSlider.oninput = (() => {
    let value = inputSlider.value;
    let max = inputSlider.max;
    let sliderWidth = inputSlider.offsetWidth;
    let thumbWidth = 20;

    let percent = value / max;
    let thumbPosition = percent * sliderWidth;
    let offset = thumbPosition - (thumbWidth / 2);

    offset = Math.max(0, Math.min(offset, sliderWidth - thumbWidth));

    slideValue.textContent = value;
    slideValue.style.left = `${offset}px`;
    slideValue.classList.add("show");

    inputSlider.style.background = `linear-gradient(to right, #664aff ${percent * 100}%, #ddd ${percent * 100}%)`;
});

inputSlider.onblur = (() => {
    slideValue.classList.remove("show");
});
