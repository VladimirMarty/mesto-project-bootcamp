let popapProfile = document.querySelector(".popap-profile");
let popapConteiner = document.querySelector(".popap__conteiner");
let openPopapProfile = document.querySelector(".profile__reduct-botton");
let closePopap = document.querySelector(".popap__close-botton");
let saveButton = document.querySelector(".popap__save");
let profileName = document.querySelector(".profile__title");
let profileBg = document.querySelector(".profile__subtitle");
let newProfileName = document.querySelector(".popap__name");
let newProfileBg = document.querySelector(".popap__yours");
let hearth = document.querySelectorAll(".element__like");
let popapMesto = document.querySelector(".popap-mesto");
let openPopapMesto = document.querySelector(".profile__botton");
let closePopapMesto = document.querySelector(".popap-mesto__close-botton");
// лайки

for (let hear of hearth) {
    hear.onclick = function() {
        hear.classList.toggle('like');
    };
}


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












// openPopapMesto.addEventListener("click", (eventClick) => {
//     eventClick.preventDefault();
//     popapMesto.classList.add("active");


// });
// closePopapMesto.addEventListener("click", (eventClick) => {
//     eventClick.preventDefault();
//     popapMesto.classList.remove("active");
// });





// const template = document
//     .getElementById('elementTemplate')
//     .content.querySelector('.element');
// const cardsForm = document.querySelector('.popap__form');
// const inputText = cardsForm.querySelector('.popap__new-mesto ');
// const inputUrl = cardsForm.querySelector('.popap__link ');
// const cardsContainer = document.querySelector('.elements');
// const createButton = document.querySelector('.popap__create');


// function createText() {
//     const cardElement = template.cloneNode(true);
//     const textElement = cardElement.querySelector(".element__paragraph ");
//     textElement.textContent = name;
//     const urlElement = cardElement.querySelector(".element__image  ");
//     urlElement.textContent = photo;
//     return cardElement;
// }



// function handleFormSubmit(event) {
//     event.preventDefault();
//     const newText = createText(inputText.value);
//     const newImage = createText(inputUrl.value);
//     cardsContainer.prepend(newText, newImage);



// }

// cardsForm.addEventListener('submit', handleFormSubmit);
// function addNewCard() {
//     const cardElement = template.cloneNode(true);
//     const template = document
//         .getElementById('elementTemplate')
//         .content.querySelector('.element');
//     const cardsForm = document.querySelector('.popap__form');
//     const inputText = template.querySelector('.popap__new-mesto');
//     const inputUrl = template.querySelector('.popap__link');
//     const cardsContainer = document.querySelector('.elements');
//     const createButton = document.querySelector('.popap__create');

//     const textElement = cardElement.querySelector(".element__paragraph");
//     const urlElement = cardElement.querySelector(".element__image");
//     newPlaceTitle.textContent = inputText.value;
//     newPlaceSrc.src = urlElement.value;
//     newPlaceSrc.alt = inputText.value;
//     contentI.prepend(cardElement);
// }



// cardsForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     addNewCard();
//     cardsForm.reset();
//     closePopapMesto();
// })

// cardsForm.addEventListener('submit', addNewCard);
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

openPopapMesto.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    popapMesto.classList.add("active");


});
closePopapMesto.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    popapMesto.classList.remove("active");
});

// let popapMesto = document.querySelector(".popap-mesto");
// let openPopapMesto = document.querySelector(".profile__botton");
// let closePopapMesto = document.querySelector(".popap-mesto__close-botton");
let inputNewMestoName = document.querySelector('.popap__new-mesto');
let inputNewMestoPhoto = document.querySelector('.popap__link');

let nameElement = elementTemplate.content.querySelector('.element__paragraph');
let link = elementTemplate.content.querySelector('.element__image');

// const newImputsElements = document.querySelector('#elementTemplate');
// const newElement = newImputsElements.querySelector('.element');
let mestoConteiner = document.querySelector('.elements');
let templateForm = document.querySelector('.popap__form');
let createNewElementButton = document.querySelector('.popap__create');


// function
// addNewCard() {

//     newElement = cloneNode(true);
//     nameElement.textContent = inputNewMestoName.value;
//     inputNewMestoPhoto.src = urlElement.value;
//     inputNewMestoPhoto.alt = inputNewMestoName.value;
//     mestoConteiner.prepend(newElement);

// }







// createNewElementButton.addEventListener("click", (eventClick) => {
//         eventClick.preventDefault();
//         newElement = newImputsElements.cloneNode(true);
//         nameElement.textContent = inputNewMestoName.value;
//         inputNewMestoPhoto.src = urlElement.value;
//         inputNewMestoPhoto.alt = inputNewMestoName.value;
//         mestoConteiner.prepend(newElement);
//         popapMesto.classList.remove("active");
//     })










//createNewElementButton.addEventListener("click", (eventClick) => {
//     eventClick.preventDefault();

//     popapMesto.classList.remove("active");
// })



createNewElementButton.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    let elementTemplate = document.querySelector('#elementTemplate')
    let template = elementTemplate.content.querySelector('.element');
    let cardElement = elementTemplate.content.cloneNode(true);

    function x() {
        nameElement.textContent = inputNewMestoName.value;
        link.src = inputNewMestoPhoto.value;

    }

    x(cardElement)
        // nameElement.textContent = inputNewMestoName.value;
        // inputNewMestoPhoto.src = urlElement.value;
        // inputNewMestoPhoto.alt = inputNewMestoName.value;
    mestoConteiner.prepend(template);
    popapMesto.classList.remove("active");
})