import enableValidation from "./components/validate.js";
import { open } from "./components/openClose.js";
import { close } from "./components/openClose.js";
// массив карточек 
const initialCards = [{
        name: 'Ереван',
        link: 'https://images.unsplash.com/photo-1595608216441-abc4557df27d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Арарат',
        link: 'https://images.unsplash.com/photo-1582798144276-d6c2e81b3025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Каскад',
        link: 'https://images.unsplash.com/photo-1567960095052-d15f59a1a309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
    },
    {
        name: 'Храм Гарни',
        link: 'https://images.unsplash.com/photo-1629761905941-a3801e2874e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    },
    {
        name: 'Севан',
        link: 'https://images.unsplash.com/photo-1583610261946-5d88e555be93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
        name: 'Красота',
        link: 'https://images.unsplash.com/photo-1543862475-eb136770ae9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
    }
];
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
const mestoConteiner = document.querySelector(".elements");
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
    popapProfile.classList.remove("active");
});




// закрываем попап профиля 
closePopap.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    profileName.textContent = newProfileName.value;
    profileBg.textContent = newProfileBg.value;
    close();
})




// функция попапа с большим фото 
function openImageOnScreen(item) {
    bigImagePopap.classList.add('active');
    bigImage.src = item.src;
    bigImage.alt = item.alt;
    bigImageName.textContent = item.alt;
};
// закрываем попап с большой картинкой 
closeBigImage.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    bigImagePopap.classList.remove("active");
});
// функция лайка 
function addLike(item) {
    item.classList.toggle('like');
};
// функция удаления карточки 
function handleDeleteCard(item) {
    item.remove();
};
// функция создания новой карточки 
function createNewElement(name, link) {
    // клонируем типлейт
    const cardElement = templateElement.cloneNode(true);
    const nameElement = cardElement.querySelector(".element__paragraph");
    const elementLink = cardElement.querySelector(".element__image");
    // добавляем значения 
    nameElement.textContent = name;
    elementLink.src = link;
    elementLink.alt = name;
    // задаем лайк
    const likeBtn = cardElement.querySelector('.element__like');
    // присваеваем лайкам функцию лайков 
    likeBtn.addEventListener("click", () =>
        addLike(likeBtn)
    );
    // задаем удаление
    const deleteBtn = cardElement.querySelector('.element__trash');
    // присваеваем удалению функцию удаления
    deleteBtn.addEventListener('click', () =>
        handleDeleteCard(cardElement)
    );
    // присваеваем фотографии открытие при нажатии на нее 
    elementLink.addEventListener('click', () =>
        openImageOnScreen(elementLink)
    );
    // открыть попап карточки 
    openPopapMesto.addEventListener("click", (eventClick) => {
        eventClick.preventDefault();
        popapMesto.classList.add("active");
    });
    return cardElement;
};
// создаем карточки 
function handleFormSubmit() {
    const newElement = createNewElement(inputNewMestoName.value, inputNewMestoPhoto.value);
    elementsConteiner.append(newElement);
};
// выводим карточку с введенными данными 
createNewElementButton.addEventListener('click', (eventClick) => {
        eventClick.preventDefault();
        handleFormSubmit();
        popapMesto.classList.remove("active");
    })
    // закрываем попап карточки 
closePopapMesto.addEventListener("click", (eventClick) => {
    eventClick.preventDefault();
    popapMesto.classList.remove("active");
});
// добавляем карточки из массива 
initialCards.forEach((item) => {
    const newCard = createNewElement(item.name, item.link);
    elementsConteiner.append(newCard);
})