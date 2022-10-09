import React from "react";
import { useContext } from 'react';
import editAvatarIcon from '../images/profile/profile__edit-icon.svg';
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";


function Main(props) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <img src={currentUser.avatar}  alt="Аватар" className="profile__avatar" />
                <div className="profile__overlay" onClick={props.onEditAvatar}>
                    <img src={editAvatarIcon}
                         alt="Иконка редактирования"
                         className="profile__edit-icon" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__username">{currentUser.name}</h1>
                    <button
                        type="button"
                        className="profile__edit-button"
                        onClick={props.onEditProfile}>
                    </button>
                    <p className="profile__bio">{currentUser.about}</p>
                </div>
                <button
                    type="button"
                    className="profile__add-button"
                    onClick={props.onAddPlace}>
                </button>
            </section>

            <section className="places">
                <ul className="places__cards">
                    {props.cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={props.onCardClick}
                            onCardLike={props.onCardLike}
                            onCardDislike={props.onCardDelete}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;