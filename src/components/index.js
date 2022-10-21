import '../pages/index.css';
import {
    popupEdit,
    popupAdd,
    popupNameInput,
    profileName,
    popupDescriptionInput,
    profileDescription,
    initialCards
} from "./constants.js";
import {
    openPopup,
    handleAddFormSubmit, handleProfileFormSubmit,
} from "./modal.js"
import {
    buttonAdd,
    buttonEdit,
    elementList, popupFormAdd, popupFormEdit
} from "./constants.js";
import {addElement} from "./card.js";
import {enableValidation} from "./validate.js";

// Модальные окна

buttonEdit.addEventListener('click', function () {
    popupNameInput.value = profileName.textContent;
    popupDescriptionInput.value = profileDescription.textContent;
    openPopup(popupEdit)
});
buttonAdd.addEventListener('click', function () {
    openPopup(popupAdd)
});


// Отправка формы

popupFormEdit.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit', handleAddFormSubmit);

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

