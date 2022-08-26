const popupEdit = document.querySelector('#popup_edit-profile');
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const buttonCloseEdit = document.querySelector('#buttonCloseEdit');
const buttonCloseAdd = document.querySelector('#buttonCloseAdd');
const buttonCloseFullScreen = document.querySelector('#buttonCloseFullscreenImage');
const popupFormEdit = document.querySelector('#popup__form_edit');
const popupFormAdd = document.querySelector('#popup__form_add');
const profileName= document.querySelector('.profile__name');
const popupNameInput = document.querySelector('#name');
const profileDescription = document.querySelector('.profile__description');
const popupDescriptionInput = document.querySelector('#description');
const popupNameImageInput = popupFormAdd.querySelector('#name-image');
const popupLinkImageInput = popupFormAdd.querySelector('#link');
const popupAdd = document.querySelector('#popup_add-element');
const popupFullScreen = document.querySelector('.popup_fullscreen');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// Открытие закрытие popupEdit
function openPopupEdit() {
    popupNameInput.value = profileName.textContent;
    popupDescriptionInput.value = profileDescription.textContent;
    openPopup(popupEdit);
}

function closePopupEdit() {
    closePopup(popupEdit);
}

buttonEdit.addEventListener('click', openPopupEdit);
buttonCloseEdit.addEventListener('click', closePopupEdit);
// popupAdd
function openPopupAdd() {
    popupNameImageInput.value = "";
    popupLinkImageInput.value = "";
openPopup(popupAdd);
}
function closePopupAdd() {
    closePopup(popupAdd);
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
    openPopup(popupFullScreen);

}
function closePopupFullScreen() {
    closePopup(popupFullScreen);
}
buttonCloseFullScreen.addEventListener('click',closePopupFullScreen);

// Изменение имени и описания в popup
function formSubmitEditHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileDescription.textContent = popupDescriptionInput.value;
    closePopupEdit()
}

popupFormEdit.addEventListener('submit', formSubmitEditHandler);
popupFormAdd.addEventListener('submit', formSubmitAddHandler);

const fullScreenImage = document.querySelector('.popup__fullscreen-image');
const fullScreenCaption = document.querySelector('.popup__fullscreen-caption');

const elementTemplate = document.querySelector('#elements-template').content;
const elementList = document.querySelector('.element');

function addElement (name, link) {
    const elementItem = elementTemplate.querySelector('.element__item').cloneNode(true);
    const elementImage = elementItem.querySelector('.element__image');
    const elementTitle = elementItem.querySelector('.element__name');


    elementTitle.textContent = name;
    elementImage.src = link;
    elementImage.alt = name;



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

