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

export function disableButton(submitButton) {
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
    errorField.textContent = " ";
};

function showError(input, errorMesage) {
    const spanId = `error-${input.id}`;
    const errorField = document.getElementById(spanId);
    errorField.textContent = errorMesage;
};