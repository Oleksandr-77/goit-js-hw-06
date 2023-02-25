const eventInput = document.getElementById('name-input');
const eventOutput = document.getElementById('name-output');

eventInput.oninput = () => {
    if (eventInput.value.trim() === "") {
        eventOutput.innerHTML = 'Anonymous'; 
    } else {
        eventOutput.innerHTML = eventInput.value;
    }
};