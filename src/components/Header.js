import React, {useEffect, useState} from "react";
import {Link, Route} from "react-router-dom";
import logoPath from "../images/header/header__logo.svg";

function Header({loggedIn, email, onLogout}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(loggedIn);
    }, [loggedIn, window.location.pathname])

    return (
        <header className="header">
            <img src={logoPath} alt="Логотип Место" className="header__logo"/>
            {(isLoggedIn) && (<div className="header__log-out">
                <p className="header__span">{email}</p>
                <Link to="/signin" className="header__span" onClick={onLogout}>Выйти</Link>
            </div>)}

                <Route path="/signin">
                    <Link to="/signup" className="header__span">Регистрация</Link>
                </Route>

                <Route path="/signup">
                    <Link to="/signin" className="header__span">Войти</Link>
                </Route>

        </header>
    )
}

export default Header;