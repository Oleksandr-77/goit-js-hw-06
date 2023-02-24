const textEl = document.querySelector("#text");
const rangeEl = document.querySelector("#font-size-control");

const changeFontSize = (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
};

rangeEl.addEventListener("input", changeFontSize);