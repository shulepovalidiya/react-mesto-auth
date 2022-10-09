import React, {useEffect, useState} from "react";
import {AuthForm} from "./AuthForm";


export function Login({ handleLogin }) {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (!password || !email) {
    //         return;
    //     } else {
    //         auth.authorize(password, email)
    //             .then(data => {
    //                 if (data.token) {
    //                     setPassword('');
    //                     setEmail('');
    //                     handleLogin(e);
    //                     history.push('/')
    //                 }
    //             })
    //             .catch(err => console.log(err));
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <AuthForm
            header="Вход"
            name="login"
            onSubmit={handleSubmit}
            buttonText="Войти"
            email={email}
            password={password}
            onPasswordChange={handlePasswordChange}
            onEmailChange={handleEmailChange}
        />
    )
}

