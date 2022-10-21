
const popupEdit = document.querySelector('#popup_edit-profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const buttonCloseEdit = document.querySelector('#buttonCloseEdit');
const buttonCloseAdd = document.querySelector('#buttonCloseAdd');
const buttonCloseFullScreen = document.querySelector('#buttonCloseFullscreenImage');
const popupFormEdit = document.querySelector('#popup__form_edit');
const popupFormAdd = document.querySelector('#popup__form_add');
const profileName= document.querySelector('.profile__name');
const popupNameInput = document.querySelector('#name-input');
const profileDescription = document.querySelector('.profile__description');
const popupDescriptionInput = document.querySelector('#description-input');
const popupNameImageInput = popupFormAdd.querySelector('#nameImage-input');
const popupLinkImageInput = popupFormAdd.querySelector('#link-input');
const popupAdd = document.querySelector('#popup_add-element');
const popupFullScreen = document.querySelector('.popup_fullscreen');
const fullScreenImage = document.querySelector('.popup__fullscreen-image');
const fullScreenCaption = document.querySelector('.popup__fullscreen-caption');
const elementTemplate = document.querySelector('#elements-template').content;
const elementList = document.querySelector('.element');

export {
    popupEdit,
    buttonEdit,
    buttonAdd,
    buttonCloseEdit,
    buttonCloseAdd,
    buttonCloseFullScreen,
    popupFormEdit,
    popupFormAdd,
    profileName,
    popupNameInput,
    profileDescription,
    popupDescriptionInput,
    popupNameImageInput,
    popupLinkImageInput,
    popupAdd,
    popupFullScreen,
    fullScreenImage,
    fullScreenCaption,
    elementTemplate,
    elementList,
}