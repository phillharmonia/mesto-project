import {
    popupNameInput,
    popupDescriptionInput,
    profileName,
    profileDescription,
    popupNameImageInput,
    popupLinkImageInput,
    popupEdit,
    popupFullScreen,
    popupAdd,
    elementList
} from "./utils.js"
import { addElement } from "./card";


function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown',closePopupEscape);
    document.addEventListener('mousedown', closePopupOverlay);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown',closePopupEscape);
    document.removeEventListener('mousedown', closePopupOverlay);
}
function closePopupEscape(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'))
    }
}
function closePopupOverlay(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('.popup__close-button'))
    {
        closePopup(document.querySelector('.popup_opened'))
    }
}

// Открытие  popup
function openPopupEdit() {
    popupNameInput.value = profileName.textContent;
    popupDescriptionInput.value = profileDescription.textContent;
    openPopup(popupEdit);
}

function openPopupAdd() {
    popupNameImageInput.value = "";
    popupLinkImageInput.value = "";
    openPopup(popupAdd);
}
function openPopupFullScreen() {
    openPopup(popupFullScreen);
}

// Закрытие popup
function closePopupEdit() {
    closePopup(popupEdit);
}
function closePopupAdd() {
    closePopup(popupAdd);
}
function closePopupFullScreen() {
    closePopup(popupFullScreen);
}

// Добавление нового элемента
function formSubmitAddHandler(evt) {
    evt.preventDefault();
    const newElement = addElement(
        popupNameImageInput.value,
        popupLinkImageInput.value);
    elementList.prepend(newElement);
    closePopupAdd()
}
// Изменение имени и описания в popup
function formSubmitEditHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileDescription.textContent = popupDescriptionInput.value;
    closePopupEdit()
}

export {openPopupEdit, openPopupAdd, openPopupFullScreen, closePopupEdit, closePopupAdd, closePopupFullScreen, formSubmitAddHandler, formSubmitEditHandler, closePopup }