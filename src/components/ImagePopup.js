import React from "react";

function ImagePopup( { card, onClose }) {
    return (
        <div className={`popup ${card.name ? '' : 'popup_hidden'} popup_picture-view`}>
            <div className="popup__close-button popup__picture-close-button" onClick={onClose}></div>
            <figure className="popup__image-container">
                <img
                    alt={card.name}
                    className="popup__image"
                    src={card.link}
                    />
                <figcaption className="popup__image-caption">{card.name}</figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup