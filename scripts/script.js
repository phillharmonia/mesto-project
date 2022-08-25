const popupEdit = document.querySelector('#popup_edit-profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const buttonCloseEdit = document.querySelector('#buttonCloseEdit');
const buttonCloseAdd = document.querySelector('#buttonCloseAdd');
const buttonCloseFullScreen = document.querySelector('#buttonCloseFullscreenImage');
const popupFormEdit = document.querySelector('#popup__form_edit');
const popupFormAdd = document.querySelector('#popup__form_add');
const nameInput = document.querySelector('.profile__name');
const popupNameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('.profile__description');
const popupDescriptionInput = document.querySelector('#description');
const popupNameImageInput = popupFormAdd.querySelector('#name-image');
const popupLinkImageInput = popupFormAdd.querySelector('#link');
const popupAdd = document.querySelector('#popup_add-element');
const popupFullScreen = document.querySelector('#popup_fullscreen');



// Открытие закрытие popupEdit
function openPopupEdit() {
    popupEdit.classList.add('popup_opened');
    popupNameInput.value = nameInput.textContent;
    popupDescriptionInput.value = descriptionInput.textContent;
}

function closePopupEdit() {
    popupEdit.classList.remove('popup_opened')
}

buttonEdit.addEventListener('click', openPopupEdit);
buttonCloseEdit.addEventListener('click', closePopupEdit);
// popupAdd
function openPopupAdd() {
popupAdd.classList.add('popup_opened');
}
function closePopupAdd() {
    popupAdd.classList.remove('popup_opened')
}
buttonAdd.addEventListener('click', openPopupAdd);
buttonCloseAdd.addEventListener('click',closePopupAdd);
// Добавление нового элемента
function formSubmitAddHandler(evt) {
    evt.preventDefault();
    const newElement = addElement(
        popupNameImageInput.value,
        popupLinkImageInput.value);
    elementList.prepend(newElement);
    closePopupAdd()
}

function openPopupFullScreen() {
    popupFullScreen.classList.add('popup_opened')

}
function closePopupFullScreen() {
    popupFullScreen.classList.remove('popup_opened')
}
buttonCloseFullScreen.addEventListener('click',closePopupFullScreen);

// Изменение имени и описания в popup
function formSubmitEditHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = popupNameInput.value;
    descriptionInput.textContent = popupDescriptionInput.value;
    closePopupEdit()
}

popupFormEdit.addEventListener('submit', formSubmitEditHandler);
popupFormAdd.addEventListener('submit', formSubmitAddHandler);


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

const elementTemplate = document.querySelector('#elements-template').content;
const elementList = document.querySelector('.element');

function addElement (name, link) {
    const elementItem = elementTemplate.querySelector('.element__item').cloneNode(true);
    const elementImage = elementItem.querySelector('.element__image');
    const elementTitle = elementItem.querySelector('.element__name');


    elementTitle.textContent = name;
    elementImage.src = link;
    elementImage.alt = name;


    const fullScreenImage = document.querySelector('.popup__fullscreen-image');
    const fullScreenCaption = document.querySelector('.popup__fullscreen-caption');
elementImage.addEventListener('click', function() {
    fullScreenCaption.textContent = name;
    fullScreenImage.alt = name;
    fullScreenImage.src = link;
    openPopupFullScreen();
});

 elementItem.querySelector('.element__button-like').addEventListener('click', (evt) => evt.target.classList.toggle('element_button-like_active'));
 elementItem.querySelector('.element__button-trash').addEventListener('click',(evt) => evt.target.closest('.element__item').remove());



    return elementItem;
}


function renderElements(list) {
    list.forEach((item) => elementList.append(addElement(item.name, item.link)));
}

renderElements(initialCards);

