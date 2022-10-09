import React, {useEffect, useState} from "react";
import successIcon from "../images/popup/info-tooltip-success.svg"
import failIcon from "../images/popup/info-tooltip-fail.svg"


export function InfoTooltip({isOpen, onClose, isSuccessful}) {

    const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);

    useEffect(() => {
        setIsRegisterSuccessful(isSuccessful);
    }, [isSuccessful, isOpen])

    return (
        <div className={`popup ${isOpen ? '' : 'popup_hidden'}`}>
            <button
                type="button"
                className={`popup__close-button popup__info-tooltip-close-button`}
                onClick={() => {
                    onClose();
                    if (isRegisterSuccessful) {

                    }
                }}>
            </button>
            <div className="popup__form popup__form_type_infotooltip">
                <img
                    className="popup__icon"
                    src={isRegisterSuccessful ? successIcon : failIcon}
                    alt={isRegisterSuccessful ? "Вы успешно зарегистрировались!" : "Что-то пошло не так"}
                />
                <h2 className="popup__heading popup__heading_type_infotooltip">
                    {isSuccessful ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
                </h2>
            </div>
        </div>
    )
}