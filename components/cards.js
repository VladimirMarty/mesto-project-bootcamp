import { open } from "./openClose";
import { deleteCardFromServer } from "./api";
import { addLikeFromServer } from "./api";
import { deleteLikeFromServer } from "./api";
const templateElement = document.getElementById('elementTemplate').content.querySelector('.element');
export const elementsConteiner = document.querySelector('.elements');
const bigImagePopap = document.querySelector(".popap__big-image");
const bigImage = document.querySelector(".popap__image");
const bigImageName = document.querySelector(".popap__img-text");
export function createNewElement(name, link, userId, item) {
    const cardElement = templateElement.cloneNode(true);
    const nameElement = cardElement.querySelector(".element__paragraph");
    const elementLink = cardElement.querySelector(".element__image");
    const likeCount = cardElement.querySelector('.element__like-counter');
    const likeBtn = cardElement.querySelector('.element__like');
    const deleteBtn = cardElement.querySelector('.element__trash');
    const cardLikes = item.likes
    nameElement.textContent = name;
    elementLink.src = link;
    elementLink.alt = name;
    cardElement.id = item._id;
    addDeleteButton(userId, item.owner._id, deleteBtn, item._id)
    likeBtn.addEventListener('click', () => paintedLike());
    updateLike(cardLikes, likeBtn, userId);

    function isLiked(likesArray, userId) {
        return likesArray.some(item => item._id === userId)
    };

    function updateLike(likesArray, likeBtn, userId) {
        likeBtn.classList.toggle('like', isLiked(likesArray, userId));
        likeCount.textContent = likesArray.length;
    };

    function paintedLike(evt) {
        const queryMetod = likeBtn.classList.contains('like') ? deleteLikeFromServer(item._id) : addLikeFromServer(item._id);
        queryMetod
            .then(res => {
                updateLike(res.likes, likeBtn, userId)
            })
            .catch(e => console.log(e))
    };
    elementLink.addEventListener('click', () => openImageOnScreen(elementLink));
    return cardElement;
};

function addDeleteButton(userId, ownerID, deleteButton, cardId) {
    if (userId !== ownerID) {
        deleteButton.remove();
    } else {
        deleteButton.addEventListener('click', () => handleDeleteCard(cardId))
    };
};

function handleDeleteCard(cardId) {
    deleteCardFromServer(cardId)
        .then((res) => {
            const deletingCard = document.getElementById(`${cardId}`)
            deletingCard.remove()
        })
        .catch(e => console.log(e))
};

function openImageOnScreen(item) {
    open(bigImagePopap);
    bigImage.src = item.src;
    bigImage.alt = item.alt;
    bigImageName.textContent = item.alt;
};