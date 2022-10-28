const popupEdit = document.querySelector('#popup_edit-profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
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
const buttonAvatar = document.querySelector('.profile__avatar-container');
const popupAvatar = document.querySelector('#popup_change-avatar')
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
export {
    popupEdit,
    buttonEdit,
    buttonAdd,
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
    initialCards,
    buttonAvatar,
    popupAvatar
}