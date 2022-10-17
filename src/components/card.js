import { fullScreenImage, fullScreenCaption, elementTemplate, } from "./utils.js"
import { openPopupFullScreen } from "./modal";

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
export { addElement };