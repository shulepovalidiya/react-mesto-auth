import React from "react";

export const BASE_URL = 'https://auth.nomoreparties.co/'

export const register = (password, email) => {
    return fetch(`${BASE_URL}signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password, email})
    })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if (res.token) {
                localStorage.setItem('token', res.token)
                return res;
            }
        })
        .catch((err) => console.log(err))
}

export const getEmail = (token) => {
    return fetch(`${BASE_URL}users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
        .catch(err => console.log(err))
}

