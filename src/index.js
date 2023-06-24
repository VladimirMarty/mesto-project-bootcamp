import "../pages/index.css";
import enableValidation from "../components/validate.js";
import { disableButton } from "../components/validate.js";
import { open } from "../components/openClose.js";
import { close } from "../components/openClose.js";
import { createNewElement } from "../components/cards.js";
import {
    popapProfile,
    openPopapProfile,
    saveButton,
    profileName,
    profileBg,
    elementForm,
    newProfileName,
    newProfileBg,
    elementsConteiner,
    popapMesto,
    openPopapMesto,
    closePopapMesto,
    inputNewMestoName,
    inputNewMestoPhoto,
    createNewElementButton,
    closeBigImage,
    popapEditAvatar,
    buttonEditAvatar,
    inputAvatarUrl,
    profileAvatar,
    avatarForm,
    closePopap,
    popapBtn,
    cardsForm,
} from "../components/data.js";
import { loadingProfile } from "../components/api.js";
import { getCardsApi } from "../components/api.js";
import { newAvatar } from "../components/api.js";
import { newProfile } from "../components/api.js";
import { addCardFromServer } from "../components/api.js";
let userId;

openPopapProfile.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    open(popapProfile);
    newProfileName.value = profileName.textContent;
    newProfileBg.value = profileBg.textContent;
    // enableValidation();
});

function submitProfile(event) {
    event.preventDefault();
    event.submitter.textContent = "Сохранение...";
    newProfile(newProfileName.value, newProfileBg.value)
        .then((res) => {
            (profileName.textContent = res.name), (profileBg.textContent = res.about);
            close();
        })

    .catch((e) => console.log(e))
        .finally(() => {
            event.submitter.textContent = "Сохранить";
        });
}
popapProfile.addEventListener("submit", submitProfile);
openPopapMesto.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    open(popapMesto);
    disableButton(popapMesto.querySelector(settings.submitButtonSelector));
});

function handleFormSubmit(event) {
    event.preventDefault();
    event.submitter.textContent = "Сохранение...";
    addCardFromServer(inputNewMestoName.value, inputNewMestoPhoto.value)
        .then((res) => {
            const newCard = createNewElement(userId, res);
            elementsConteiner.prepend(newCard);
            close();
            cardsForm.reset();
        })
        .catch((e) => console.log(e))
        .finally(() => {
            event.submitter.textContent = "Сохранить";
        });
}
cardsForm.addEventListener("submit", handleFormSubmit);
elementsConteiner.addEventListener("submit", handleFormSubmit);
buttonEditAvatar.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    avatarForm.reset();
    open(popapEditAvatar);
    // enableValidation();
});

function handleSubmitAvatarForm(event) {
    event.preventDefault();
    event.submitter.textContent = "Сохранение...";
    newAvatar(inputAvatarUrl.value)
        .then((res) => {
            profileAvatar.src = res.avatar;
            close();
        })
        .catch((e) => console.log(e))
        .finally(() => {
            event.submitter.textContent = "Сохранить";
        });
}
popapEditAvatar.addEventListener("submit", handleSubmitAvatarForm);

Promise.all([loadingProfile(), getCardsApi()])
    .then(([userData, Cards]) => {
        userId = userData._id;
        profileName.textContent = userData.name;
        profileBg.textContent = userData.about;
        profileAvatar.src = userData.avatar;
        profileAvatar.alt = userData.name;

        Cards.forEach((item) => {
            const newCard = createNewElement(userId, item);
            elementsConteiner.append(newCard);
        });
    })
    .catch((e) => console.log(e));

closePopap.forEach((button) => {
    const popap = button.closest(".popap");
    button.addEventListener("click", () => {
        close(popap);
    });
});

let settings = {
    formSelector: ".popap__form",
    inputSelector: ".popap__input",
    submitButtonSelector: ".popap__button",
    inputErrorClass: ".popap__input_error",
};
enableValidation(settings);