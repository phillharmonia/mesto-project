import {
    popupNameInput,
    popupDescriptionInput,
    profileName,
    profileDescription,
    popupNameImageInput,
    popupLinkImageInput,
    popupEdit,
    popupAdd,
    elementList
} from "./constants.js"
import { addElement } from "./card";


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown',closePopupEscape);
    document.addEventListener('mousedown', handlePopupClose);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown',closePopupEscape);
    document.removeEventListener('mousedown', handlePopupClose);
}
function closePopupEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'))
    }
}
function handlePopupClose(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close'))
    {
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
    profileName.textContent = popupNameInput.value;
    profileDescription.textContent = popupDescriptionInput.value;
    closePopup(popupEdit)
}

export {openPopup, handleAddFormSubmit, handleProfileFormSubmit, closePopup }