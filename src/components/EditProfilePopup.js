import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

export function EditProfilePopup( {onClose, isOpen, onUpdateUser} ) {

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [isOpen]);

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        })
    }

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={isOpen}
            onClose={onClose}
            buttonText="Сохранить"
            onSubmit={handleSubmit}>
            <div className="popup__field-container">
                <input type="text"
                       id="name-field"
                       name="username"
                       className="popup__field popup__edit-field"
                       placeholder="Ваше имя"
                       minLength="2"
                       maxLength="40"
                       required
                       onChange={handleNameChange}
                       value={name || ''}/>
                <span className="name-field-error"></span>
            </div>
            <div className="popup__field-container">
                <input type="text"
                       id="bio-field"
                       name="bio"
                       className="popup__field popup__edit-field"
                       placeholder="Чем вы занимаетесь?"
                       minLength="2"
                       maxLength="200"
                       required
                       onChange={handleDescriptionChange}
                       value={description || ''}
                />
                <span className="bio-field-error"></span>
            </div>
        </PopupWithForm>
    )
}