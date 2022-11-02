import {
    popupNameInput,
    popupDescriptionInput,
    profileName,
    profileDescription,
    popupNameImageInput,
    popupLinkImageInput,
    popupEdit,
    popupAdd,
    elementList, popupAvatarInput, profileAvatar, popupAvatar, buttonSubmitProfile, buttonSubmitAdd, buttonSubmitAvatar
} from "./constants.js"
import {addElement} from "./card";
import {patchAvatar, patchProfileInfo, postCard} from "./api";


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEscape);
    document.addEventListener('mousedown', handlePopupClose);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEscape);
    document.removeEventListener('mousedown', handlePopupClose);
}

function closePopupEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'))
    }
}

function handlePopupClose(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
        closePopup(evt.target.closest('.popup_opened'))
    }
}

// Открытие  popup

// Добавление нового элемента
function handleAddFormSubmit(evt) {
    evt.preventDefault()
    buttonSubmitAdd.textContent = buttonSubmitAdd.dataset.onload;
    postCard(popupNameImageInput.value, popupLinkImageInput.value)
        .then(item => {
            const newElement = addElement(
                item.name, item.link, item._id, item.likes, item.owner._id);
            elementList.prepend(newElement);
            evt.target.reset()
            closePopup(popupAdd)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            buttonSubmitAdd.textContent = buttonSubmitAdd.dataset.default;
        })
}

// Изменение имени и описания в popup
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    buttonSubmitProfile.textContent = buttonSubmitProfile.dataset.onload;
    patchProfileInfo(popupNameInput.value, popupDescriptionInput.value)
        .then((data) => {
            profileName.textContent = data.name
            profileDescription.textContent = data.about
            closePopup(popupEdit)
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
        buttonSubmitProfile.textContent = buttonSubmitProfile.dataset.default;
    })
}

function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    buttonSubmitAvatar.textContent = buttonSubmitAvatar.dataset.onload;
    patchAvatar(popupAvatarInput.value)
        .then((data) => {
            profileAvatar.src = data.avatar
            evt.target.reset()
            closePopup(popupAvatar)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            buttonSubmitAvatar.textContent = buttonSubmitAvatar.dataset.default;
        })
}

export {openPopup, handleAddFormSubmit, handleProfileFormSubmit, handleAvatarFormSubmit, closePopup}