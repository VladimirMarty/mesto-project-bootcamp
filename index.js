let popapProfile = document.querySelector(".popap-profile");
let popapConteiner = document.querySelector(".popap__conteiner");
let openPopapProfile = document.querySelector(".profile__reduct-botton");
let closePopap = document.querySelector(".popap__close-botton");
let saveButton = document.querySelector(".popap__save");
let profileName = document.querySelector(".profile__title");
let profileBg = document.querySelector(".profile__subtitle");
let newProfileName = document.querySelector(".popap__name");
let newProfileBg = document.querySelector(".popap__yours");
let like = document.querySelector(".element__like");
let popapMesto = document.querySelector(".popap-mesto");
let openPopapMesto = document.querySelector(".profile__botton");
let closePopapMesto = document.querySelector(".popap-mesto__close-botton");
// лайки
like.addEventListener("click", (eventClick) => {
        eventClick.preventDefault();
        like.classList.add("like");


    })
    //

//
// попап редактирование профиля
openPopapProfile.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    popapProfile.classList.add("active");
})


closePopap.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    popapProfile.classList.remove("active");
})


saveButton.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    profileName.textContent = newProfileName.value
    profileBg.textContent = newProfileBg.value
    popapProfile.classList.remove("active");
})
openPopapMesto.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    popapMesto.classList.add("active");


})
closePopapMesto.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    popapMesto.classList.remove("active");
})
const template = document
    .getElementById('elementTemplate')
    .content.querySelector('.element');
const cardsForm = document.querySelector('.popap__form');
const inputText = cardsForm.querySelector('.popap__new-mesto ');
const inputUrl = cardsForm.querySelector('.popap__link ');
const cardsContainer = document.querySelector('.elements');
const createButton = document.querySelector('.popap__create');


function createText(name, photo) {
    const cardElement = template.cloneNode(true);
    const textElement = cardElement.querySelector(".element__paragraph ");
    textElement.textContent = name;
    const urlElement = cardElement.querySelector(".element__image  ");
    urlElement.textContent = photo;
    return cardElement;
}



function handleFormSubmit(event) {
    event.preventDefault();
    const newText = createText(inputText.value);
    const newImage = createText(inputUrl.value);
    cardsContainer.prepend(newText, newImage);



}

cardsForm.addEventListener('submit', handleFormSubmit);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//массив
const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];