import { open } from "./openClose";
const templateElement = document.getElementById('elementTemplate').content.querySelector('.element');
const elementsConteiner = document.querySelector('.elements');
const bigImagePopap = document.querySelector(".popap__big-image");
const bigImage = document.querySelector(".popap__image");
const bigImageName = document.querySelector(".popap__img-text");

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

export function createNewElement(name, link) {
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

    // // открыть попап карточки 
    // openPopapMesto.addEventListener("click", (eventClick) => {
    //     eventClick.preventDefault();
    //     popapMesto.classList.add("active");
    // });
    return cardElement;
};

// добавляем карточки из массива 
initialCards.forEach((item) => {
    const newCard = createNewElement(item.name, item.link);
    elementsConteiner.append(newCard);
})

// функция лайка 
function addLike(item) {
    item.classList.toggle('like');
};
// функция удаления карточки 
function handleDeleteCard(item) {
    item.remove();
};

// функция попапа с большим фото 
function openImageOnScreen(item) {
    open(bigImagePopap);
    bigImage.src = item.src;
    bigImage.alt = item.alt;
    bigImageName.textContent = item.alt;
};