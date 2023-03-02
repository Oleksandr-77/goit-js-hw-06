
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
    const result = inputEl.value.length === Number(inputEl.getAttribute("data-length"));

    console.log(result);
    console.log(inputEl.classList.toggle("valid", result));
    console.log(inputEl.classList.toggle("invalid", !result));
});
