import React, { useState, useEffect } from "react";
import { AuthForm } from "./AuthForm";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/Auth";
import { InfoTooltip } from "./InfoTooltip";

export function Register(props) {

    const history = useHistory();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

    const onClose = () => {
        setIsInfoTooltipOpen(false);
        if (isSuccessful) {
            history.push('/signin')
        }
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (password) {
            auth.register(password, email)
                .then((res) => {
                    if (res) {
                        setIsSuccessful(true)
                        setIsInfoTooltipOpen(true);
                        setEmail('');
                        setPassword('');
                    } else {
                        setIsSuccessful(false);
                        setIsInfoTooltipOpen(true);
                    }
                    })
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <AuthForm
                header="Регистрация"
                name="register"
                onSubmit={handleSubmit}
                buttonText="Зарегистрироваться"
                email={email}
                password={password}
                onEmailChange={handleEmailChange}
                onPasswordChange={handlePasswordChange}
            />
            <Link to='/signin' className="auth-form__link">Уже зарегистрированы? Войти</Link>
            <InfoTooltip
                isOpen={isInfoTooltipOpen}
                onClose={onClose}
                isSuccessful={isSuccessful}
            />
        </>
    )
}

