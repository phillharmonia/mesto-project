import '../pages/index.css';
import { initialCards } from "./initialCards";
import {
    openPopupEdit,
    openPopupAdd,
    closePopupEdit,
    closePopupAdd,
    closePopupFullScreen,
    formSubmitAddHandler, formSubmitEditHandler,
} from "./modal.js"
import {
    buttonAdd,
    buttonCloseAdd,
    buttonCloseEdit, buttonCloseFullScreen,
    buttonEdit,
    elementList, popupEdit, popupFormAdd, popupFormEdit
} from "./utils.js";
import { addElement} from "./card.js";
import { enableValidation } from "./validate";

// Модальные окна

buttonEdit.addEventListener('click', openPopupEdit);
buttonCloseEdit.addEventListener('click', closePopupEdit);
buttonAdd.addEventListener('click', openPopupAdd);
buttonCloseAdd.addEventListener('click',closePopupAdd);
buttonCloseFullScreen.addEventListener('click',closePopupFullScreen);

// Отправка формы

popupFormEdit.addEventListener('submit', formSubmitEditHandler);
popupFormAdd.addEventListener('submit', formSubmitAddHandler);

// Инициализация карточек

function renderElements(list) {
    list.forEach((item) => elementList.append(addElement(item.name, item.link)));
}

renderElements(initialCards);

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});

