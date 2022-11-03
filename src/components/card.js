import {fullScreenImage, fullScreenCaption, cardTemplate, popupFullScreen,} from "./constants.js"
import {openPopup} from "./modal.js";
import {putLike, deleteLike, deleteCard} from "./api";


function createCard(name, link, id, likes,userId, ownerId) {
    const cardItem = cardTemplate.querySelector('.element__item').cloneNode(true);
    const cardImage = cardItem.querySelector('.element__image');
    const cardTitle = cardItem.querySelector('.element__name');
    const cardLikeCount = cardItem.querySelector('.element__button-like-count');
    const buttonLike = cardItem.querySelector('.element__button-like');
    const buttonTrash = cardItem.querySelector('.element__button-trash');

   cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    cardLikeCount.textContent = likes.length;

    cardImage.addEventListener('click', function () {
        fullScreenCaption.textContent = name;
        fullScreenImage.alt = name;
        fullScreenImage.src = link;
        openPopup(popupFullScreen);
    });

    function likeCard(data) {
        cardLikeCount.textContent = data.likes.length;
    }

    buttonLike.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('element_button-like_active')) {
            deleteLike(id)
                .then(data => {
                    likeCard(data)
                    buttonLike.classList.remove('element_button-like_active')
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            putLike(id)
                .then(data => {
                    likeCard(data)
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

    return cardItem;
}

export {createCard};