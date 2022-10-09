import React, {createRef, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";

export function AddPlacePopup( {isOpen, onClose, onAddPlace} ) {

    const name = createRef();
    const link = createRef();

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace(name.current.value, link.current.value);
    }

    useEffect(() => {
        name.current.value = '';
        link.current.value = '';
    }, [isOpen]);

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            buttonText="Создать"
            onSubmit={handleSubmit}>
            <div className="popup__field-container">
                <input
                    type="text"
                    id="place-name-field"
                    className="popup__field popup__add-card-field"
                    placeholder="Название"
                    name="name"
                    minLength="2"
                    maxLength="30"
                    ref={name}
                    required/>
                <span className="place-name-field-error"></span>
            </div>
            <div className="popup__field-container">
                <input
                    type="url"
                    id="picture-link-field"
                    className="popup__field popup__add-card-field"
                    placeholder="Ссылка на картинку"
                    name="link"
                    ref={link}
                    required/>
                <span className="picture-link-field-error"></span>
            </div>
        </PopupWithForm>
    )
}