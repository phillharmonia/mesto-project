import '../pages/index.css';
import {
    popupEdit,
    popupAdd,
    popupNameInput,
    profileName,
    popupDescriptionInput,
    profileDescription,
    initialCards, popupAvatar,
} from "./constants.js";
import {
    openPopup,
    handleAddFormSubmit, handleProfileFormSubmit,
} from "./modal.js"
import {
    buttonAdd,
    buttonEdit,
    elementList, popupFormAdd, popupFormEdit, buttonAvatar
} from "./constants.js";
import {addElement} from "./card.js";
import {enableValidation} from "./validate.js";
import {getInitialCards, getProfileInfo} from "./api";

Promise.all([getProfileInfo(), getInitialCards()])
    .then((data) => {
        profileName.textContent = data[0].name
        profileDescription.textContent = data[0].about
        data[1].forEach((item) => {
            elementList.append(addElement(item.name, item.link))
        })
            .catch((err) => {
            console.log(err)
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
buttonAvatar.addEventListener('click', function() {
    openPopup(popupAvatar)
});


// Отправка формы

popupFormEdit.addEventListener('submit', handleProfileFormSubmit);
popupFormAdd.addEventListener('submit', handleAddFormSubmit);

// Инициализация карточек



enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});

