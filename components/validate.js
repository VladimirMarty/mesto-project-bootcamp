export default function enableValidation(settings) {
    const formList = document.querySelectorAll(settings.formSelector);
    formList.forEach((form) => { setEventListener(form, settings) });
}

function setEventListener(form, settings) {
    const inputList = form.querySelectorAll(settings.inputSelector);
    const submitButton = form.querySelector(settings.submitButtonSelector);
    checkFormValidity(form, submitButton);
    inputList.forEach(input => {
        input.addEventListener('input', () => {
            chekValid(input, settings.inputErrorClass);
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

export function disableButton(submitButton) {
    submitButton.disabled = true;
};

function chekValid(input, inputErrorClass) {

    if (input.validity.valid) {
        hideError(input, inputErrorClass);
    } else {
        showError(input, input.validationMessage, inputErrorClass);
    }
};

function hideError(input, inputErrorClass) {
    const spanId = `error-${input.id}`;
    const errorField = document.getElementById(spanId);
    input.classList.remove(inputErrorClass);
    errorField.textContent = " ";
};

function showError(input, errorMesage, inputErrorClass) {
    const spanId = `error-${input.id}`;
    const errorField = document.getElementById(spanId);
    input.classList.add(inputErrorClass);
    errorField.textContent = errorMesage;
};