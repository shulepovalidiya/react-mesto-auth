import React, { createRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export function EditAvatarPopup( {isOpen, onClose, onUpdateAvatar} ) {

    const avatar = createRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatar.current.value);
    }

    useEffect(() => {
        avatar.current.value = ''
    }, [isOpen]);

    return (
        <PopupWithForm
            name="update-avatar"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}
            buttonText="Сохранить"
            onSubmit={handleSubmit}
        >
            <div className="popup__field-container">
                <input
                    type="url"
                    id="avatar-link-field"
                    className="popup__field popup__update-avatar-field"
                    placeholder="Ссылка на фотографию"
                    name="avatar-link"
                    ref={avatar}
                    required/>
                <span className="avatar-link-field-error"></span>
            </div>
        </PopupWithForm>
    )
}