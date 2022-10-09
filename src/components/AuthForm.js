import React, {useEffect, useState} from "react";

export function AuthForm({header, name, onSubmit, onEmailChange, onPasswordChange, buttonText, password, email}) {

    const [formHeader, setFormHeader] = useState('');
    const [submitButtonText, setSubmitButtonTextButtonText] = useState('')

    useEffect(() => {
        setFormHeader(header);
        setSubmitButtonTextButtonText(buttonText);
    }, [])

    return (
        <form className="auth-form" name={name} onSubmit={onSubmit}>
            <h2 className="auth-form__header">{formHeader}</h2>
            <div className="auth-form__field-container">
                <input type="email"
                       id="email-field"
                       name="email"
                       className="auth-form__field"
                       placeholder="Email"
                       required
                       onChange={onEmailChange}
                       value={email}/>
                <span className="name-field-error"></span>
            </div>
            <div className="popup__field-container">
                <input type="password"
                       id="password-field"
                       name="password"
                       className="auth-form__field"
                       placeholder="Пароль"
                       minLength="8"
                       maxLength="200"
                       required
                       onChange={onPasswordChange}
                       value={password}
                />
                <span className="bio-field-error"></span>
            </div>
            <button type="submit" className="auth-form__submit-button">
                {submitButtonText}
            </button>
        </form>
    )
}