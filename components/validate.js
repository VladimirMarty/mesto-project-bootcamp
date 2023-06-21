export default function enableValidation() {

    const formList = document.querySelectorAll('.popap__form');
    formList.forEach((form) => { setEventListener(form) });
}

function setEventListener(form) {
    const inputList = form.querySelectorAll('.popap__input');
    const submitButton = form.querySelector('.popap__button');
    checkFormValidity(form, submitButton);
    inputList.forEach(input => {
        input.addEventListener('input', () => {
            chekValid(input, form);
            checkFormValidity(form, submitButton);
        })
    });
};

function checkFormValidity(form, submitButton) {

    if (form.checkValidity()) {
        enableButton(submitButton)
    } else {
        disableButton(submitButton)
    }
};

function enableButton(submitButton) {
    submitButton.disabled = false;
};

function disableButton(submitButton) {
    submitButton.disabled = true;
};

function chekValid(input) {

    if (input.validity.valid) {
        hideError(input);
    } else {
        showError(input, input.validationMessage);
    }
};

function hideError(input) {
    const spanId = `error-${input.id}`;
    const errorField = document.getElementById(spanId);
    errorField.textContent = '';
};

function showError(input, errorMesage) {
    const spanId = `error-${input.id}`;
    const errorField = document.getElementById(spanId);
    errorField.textContent = errorMesage;
};