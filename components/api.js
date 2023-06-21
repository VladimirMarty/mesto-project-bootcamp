export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-9',
    headers: {
        authorization: '96372b29-aab5-45ae-9e5d-f72e59cb7bf6',
        'Content-Type': 'application/json'
    }
}

function checkAnswer(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export function loadingProfile() {
    return fetch(`${config.baseUrl}/users/me`, {
            headers: config.headers
        })
        .then(res => checkAnswer(res))
}

export function newAvatar(avatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                avatar: avatar,
            })
        })
        .then((res) => checkAnswer(res))
}

export function getCardsApi() {
    return fetch(`${config.baseUrl}/cards`, {
            headers: config.headers
        })
        .then(res => checkAnswer(res))
}

export function newProfile(name, about) {
    return fetch(`${config.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: config.headers,
            body: JSON.stringify({
                name: name,
                about: about,
            })
        })
        .then((res) => checkAnswer(res))
}

export function addCardFromServer(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then((res) => checkAnswer(res))
}

export function deleteCardFromServer(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: config.headers,
        })
        .then((res) => checkAnswer(res))
}

export function addLikeFromServer(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: config.headers,
        })
        .then((res) => checkAnswer(res))
}

export function deleteLikeFromServer(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: config.headers,
        })
        .then((res) => checkAnswer(res))
}