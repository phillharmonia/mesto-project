import {fullScreenImage, fullScreenCaption, elementTemplate, popupFullScreen,} from "./constants.js"
import {openPopup} from "./modal.js";
import {putLike, deleteLike, deleteCard} from "./api";


function addElement(name, link, id, likes,userId, ownerId) {
    const elementItem = elementTemplate.querySelector('.element__item').cloneNode(true);
    const elementImage = elementItem.querySelector('.element__image');
    const elementTitle = elementItem.querySelector('.element__name');
    const elementLikeCount = elementItem.querySelector('.element__button-like-count');
    const buttonLike = elementItem.querySelector('.element__button-like');
    const buttonTrash = elementItem.querySelector('.element__button-trash');

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
        if (evt.target.classList.contains('element_button-like_active')) {
            deleteLike(id)
                .then(data => {
                    elementLikeCount.textContent = data.likes.length;
                    buttonLike.classList.remove('element_button-like_active')
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
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

    buttonTrash.addEventListener('click', (evt) => {
        deleteCard(id)
            .then(() => {
                evt.target.closest('.element__item').remove()
            })
            .catch((err) => {
                console.log(err)
            })
    });

    if (ownerId !== userId) {
        buttonTrash.classList.add('element__button-trash_disabled');
    }

    return elementItem;
}

export {addElement};