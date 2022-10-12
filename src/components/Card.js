import React from "react";
import { useContext } from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card( { onCardClick, card, onCardLike, onCardDislike } ) {

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDislikeClick() {
        onCardDislike(card);
    }

    const currentUser = useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    return (
        <li className="places__card">
            <button type="button" onClick={() => handleDislikeClick()} className={`places__delete-button ${isOwn ? '' : 'popup_hidden'}`}></button>
            <img
                alt={card.name}
                className="places__image"
                src={card.link}
                onClick={handleClick}/>
            <div className="places__caption">
                <h2 className="places__name">{card.name}</h2>
                <div className="places__like-section">
                    <button
                        type="button"
                        onClick={() => handleLikeClick()}
                        className={`places__like-button ${isLiked ? 'places__like-button_active' : ''}`}></button>
                    <div className="places__like-counter">{card.likes.length}</div>
                </div>
            </div>
        </li>
    )
}

export default Card;