const formInputEl = document.querySelector('.login-form');

formInputEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    console.log(event);

    const {
        elements: {email, password},
    } = event.currentTarget;

    if (email.value.trim() ==='' || password.value.trim() === '') {
        return alert('Всі поля повинні бути заповнені!');
    }
    const formElements = {email: email.value, password: password.value};

    console.log(formElements);

    event.currentTarget.reset;
}


