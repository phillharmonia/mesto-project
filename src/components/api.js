import {popupLinkImageInput, popupNameImageInput, profileDescription, profileName} from "./constants";

const config = {
    baseUrl: "https://nomoreparties.co/v1/plus-cohort-16",
    headers: {
        authorization: "bd20a1a7-783a-4ce0-8a79-cdcaf6dff26d",
        "Content-Type": "application/json",
    },
};

function checkResponce(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        method: "GET",
        headers: config.headers
    })
        .then(checkResponce)
};

export const getProfileInfo  = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "GET",
        headers: {
            authorization: config.headers.authorization,
        },
    })
        .then(checkResponce);
};
export const patchProfileInfo = (profileName, profileDescription) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            name: profileName.value,
            about: profileDescription.value
        })
    })
        .then(checkResponce);
}
export const postCard = (popupNameImageInput, popupLinkImageInput) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
            name: popupNameImageInput.value,
            link: popupLinkImageInput.value
        })
    })
        .then(checkResponce)
}
const patchAvatar = (popupAvatarImageInput) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
           avatar: popupAvatarImageInput.value
        })
    })
        .then(checkResponce)
}
