const refs = {
    decrementListenerBtn: document.querySelector('[data-action="decrement"]'),
    incrementListenerBtn: document.querySelector('[data-action="increment"]'),
    spanValue: document.querySelector("#value"),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  refs.spanValue.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  refs.spanValue.textContent = counterValue;
};

refs.decrementListenerBtn.addEventListener("click", decrement);
refs.incrementListenerBtn.addEventListener("click", increment);