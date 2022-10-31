import '../pages/index.css';
import {
    popupEdit,
    popupAdd,
    popupNameInput,
    profileName,
    popupDescriptionInput,
    profileDescription, popupAvatar, profileAvatar, buttonAdd,
    buttonEdit,
    elementList, popupFormAdd, popupFormEdit, buttonAvatar, popupFormAvatar
} from "./constants.js";
import {
    openPopup,
    handleAddFormSubmit, handleProfileFormSubmit, handleAvatarFormSubmit,
} from "./modal.js"
import {addElement} from "./card.js";
import {enableValidation} from "./validate.js";
import {getInitialCards, getProfileInfo} from "./api.js";

Promise.all([getProfileInfo(), getInitialCards()])
    .then((data) => {
        profileName.textContent = data[0].name
        profileDescription.textContent = data[0].about
        profileAvatar.src = data[0].avatar
        data[1].forEach((item) => {
            elementList.append(addElement(item.name, item.link))
        })
    })


// Модальные окна
buttonEdit.addEventListener('click', function () {
    popupNameInput.value = profileName.textContent;
    popupDescriptionInput.value = profileDescription.textContent;
    openPopup(popupEdit)
});
buttonAdd.addEventListener('click', function () {
    openPopup(popupAdd)
});
buttonAvatar.addEventListener('click', function () {
    openPopup(popupAvatar)
});


// Отправка формы

popupFormEdit.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit', handleAddFormSubmit);
popupFormAvatar.addEventListener('submit', handleAvatarFormSubmit);

// Инициализация карточек


enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});
