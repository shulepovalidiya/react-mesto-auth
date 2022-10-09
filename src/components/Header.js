import React, {useEffect, useState} from "react";
import {Link, useHistory, useRouteMatch} from "react-router-dom";
import logoPath from "../images/header/header__logo.svg";

function Header({loggedIn, email, onLogout}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(loggedIn);

    }, [loggedIn])


    return (
        <header className="header">
            <img src={logoPath} alt="Логотип Место" className="header__logo" />
            {isLoggedIn ?
                (<div className="header__log-out">
                    <p className="header__span">{email}</p>
                    <Link to="/signin" className="header__span" onClick={onLogout}>Выйти</Link>
                </div>)
                :
                (<Link
                    to={window.location.pathname === '/signin' ? '/signup' : "/signin"}
                    className="header__span">{window.location.pathname === '/signin' ? "Регистрация" : "Войти"}
                </Link>)
            }
        </header>
    )
}

export default Header;