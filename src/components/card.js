import {fullScreenImage, fullScreenCaption, elementTemplate, popupFullScreen,} from "./constants.js"
import {openPopup} from "./modal.js";
import {putLike, deleteLike} from "./api";


function addElement(name, link, id, likes, cardId) {
    const elementItem = elementTemplate.querySelector('.element__item').cloneNode(true);
    const elementImage = elementItem.querySelector('.element__image');
    const elementTitle = elementItem.querySelector('.element__name');
    const elementLikeCount = elementItem.querySelector('.element__button-like-count');
    const buttonLike = elementItem.querySelector('.element__button-like')

    elementTitle.textContent = name;
    elementImage.src = link;
    elementImage.alt = name;
    elementLikeCount.textContent = likes.length;

    elementImage.addEventListener('click', function () {
        fullScreenCaption.textContent = name;
        fullScreenImage.alt = name;
        fullScreenImage.src = link;
        openPopup(popupFullScreen);
    });

    buttonLike.addEventListener('click', (evt) => {
        if (buttonLike.classList.contains('element_button-like_active')) {
            deleteLike(id)
                .then(data => {
                    elementLikeCount.textContent = data.likes.length;
                    buttonLike.classList.remove('element_button-like_active')
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            putLike(id)
            .then(data => {
                elementLikeCount.textContent = data.likes.length;
                buttonLike.classList.add('element_button-like_active')
            })
                .catch((err) => {
                    console.log(err);
                })
        }
    })

    elementItem.querySelector('.element__button-trash').addEventListener('click', (evt) => evt.target.closest('.element__item').remove());


    return elementItem;
}
export {addElement};