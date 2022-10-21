import { fullScreenImage, fullScreenCaption, elementTemplate, popupFullScreen,} from "./constants.js"
import { openPopup } from "./modal.js";




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
        openPopup(popupFullScreen);
    });

    elementItem.querySelector('.element__button-like').addEventListener('click', (evt) => evt.target.classList.toggle('element_button-like_active'));
    elementItem.querySelector('.element__button-trash').addEventListener('click',(evt) => evt.target.closest('.element__item').remove());



    return elementItem;
}
export { addElement };