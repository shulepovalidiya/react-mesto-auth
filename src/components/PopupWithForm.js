import React from "react";

function PopupWithForm(props) {
    return (
        <div className={`popup ${props.isOpen ? '' : 'popup_hidden'} popup_type_${props.name}`}>
            <button
                type="button"
                className={`popup__close-button popup__${props.name}-close-button`}
                onClick={props.onClose}>
            </button>
            <form className={`popup__form popup__form_type_${props.name}`} name={props.name} onSubmit={props.onSubmit}>
                <h2 className="popup__heading">{props.title}</h2>
                {props.children}
                <button type="submit" className={`popup__submit-button popup__${props.name}-submit-button`}>
                    {props.buttonText}
                </button>
            </form>
        </div>
    )
}

export default PopupWithForm;