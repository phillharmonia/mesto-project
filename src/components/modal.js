import {
    popupNameInput,
    popupDescriptionInput,
    profileName,
    profileDescription,
    popupNameImageInput,
    popupLinkImageInput,
    popupEdit,
    popupAdd,
    elementList, popupAvatarInput, profileAvatar, popupAvatar
} from "./constants.js"
import {addElement} from "./card";
import {patchAvatar, patchProfileInfo} from "./api";


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
    evt.preventDefault();
    const newElement = addElement(
        popupNameImageInput.value,
        popupLinkImageInput.value);
    elementList.prepend(newElement);
    evt.target.reset()
    closePopup(popupAdd)
}

// Изменение имени и описания в popup
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    patchProfileInfo(popupNameInput.value, popupDescriptionInput.value)
        .then((data) => {
            profileName.textContent = data.name
            profileDescription.textContent = data.about
            closePopup(popupEdit)
        })
        .catch((err) => {
            console.log(err);
        })
}

function handleAvatarFormSubmit(evt) {
    evt.preventDefault();
    patchAvatar(popupAvatarInput.value)
        .then((data) => {
            profileAvatar.src = data.avatar
            evt.target.reset()
            closePopup(popupAvatar)
        })
        .catch((err) => {
            console.log(err)
        })
}

export {openPopup, handleAddFormSubmit, handleProfileFormSubmit, handleAvatarFormSubmit, closePopup}