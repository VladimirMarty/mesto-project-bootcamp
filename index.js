import enableValidation from "./components/validate.js";
import { open } from "./components/openClose.js";
import { close } from "./components/openClose.js";
import { createNewElement } from "./components/cards.js";

// задаем попап профиля 
const popapProfile = document.querySelector(".popap-profile");
const popapConteiner = document.querySelector(".popap__conteiner");
const openPopapProfile = document.querySelector(".profile__reduct-botton");
const closePopap = document.querySelector(".popap__close-botton");
const saveButton = document.querySelector(".popap__save");
const profileName = document.querySelector(".profile__title");
const profileBg = document.querySelector(".profile__subtitle");
const newProfileName = document.querySelector(".popap__name");
const newProfileBg = document.querySelector(".popap__yours");
// задаем попап карточек 
const templateElement = document.getElementById('elementTemplate').content.querySelector('.element');
const elementsConteiner = document.querySelector('.elements');
const popapMesto = document.querySelector(".popap-mesto");
const openPopapMesto = document.querySelector(".profile__botton");
const closePopapMesto = document.querySelector(".popap-mesto__close-botton");
const inputNewMestoName = document.querySelector(".popap__new-mesto");
const inputNewMestoPhoto = document.querySelector(".popap__link");
// const mestoConteiner = document.querySelector(".elements");
const elementForm = document.querySelector(".popap__form");
const createNewElementButton = document.querySelector(".popap__create");
// задаем попап с большим фото 
const bigImage = document.querySelector(".popap__image");
const bigImagePopap = document.querySelector(".popap__big-image");
const closeBigImage = document.querySelector(".popap__fullimage-button");
const bigImageName = document.querySelector(".popap__img-text");




// открываем попап профиля 
openPopapProfile.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    open(popapProfile);
    newProfileName.value = profileName.textContent;
    newProfileBg.value = profileBg.textContent;
    enableValidation();
});






// сохраняем данные попапа профиля 
saveButton.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    profileName.textContent = newProfileName.value;
    profileBg.textContent = newProfileBg.value;

    close();
});









// закрываем попап с большой картинкой 
closeBigImage.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    close();
});




// открыть попап карточки 
openPopapMesto.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();

    open(popapMesto);
    enableValidation();
});



function handleFormSubmit() {
    const newElement = createNewElement(inputNewMestoName.value, inputNewMestoPhoto.value);
    elementsConteiner.append(newElement);
};


// выводим карточку с введенными данными 
createNewElementButton.addEventListener('click', (eventClick) => {
    eventClick.preventDefault();
    handleFormSubmit();
    close();
})



// закрываем попап карточки 
closePopapMesto.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    close();
});

popapProfile.addEventListener('submit', saveButton);

elementsConteiner.addEventListener('submit', handleFormSubmit);