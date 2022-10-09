class Api {
    constructor(options) {
        this._url = options.url;
        this._authorization = options.authorization;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getUserData() {
        return fetch(`${this._url}users/me`, {
            headers: {authorization: this._authorization},
        })
            .then(res => this._getResponseData(res))
    }

    getInitialCards() {
        return fetch(`${this._url}cards`, {
            headers: {
                authorization: this._authorization
            },
        }).then(res => this._getResponseData(res))
    }

    setUserData(username, bio) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username,
                about: bio,
            })
        }).then(res => this._getResponseData(res))
    }

    createNewCard(name, link) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                link,
            })
        }).then(res => this._getResponseData(res))
    }

    deleteCard(cardID) {
        return fetch(`${this._url}cards/${cardID}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json',
            }
        }).then(res => this._getResponseData(res))
    }

    changeLikeCardStatus(cardID, isLiked) {
        if (isLiked) {
            return fetch(`${this._url}cards/likes/${cardID}`, {
                method: 'PUT',
                headers: {
                    authorization: this._authorization,
                    'Content-Type': 'application/json',
                }
            }).then(res => this._getResponseData(res))
        } else {
            return fetch(`${this._url}cards/likes/${cardID}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._authorization,
                    'Content-Type': 'application/json',
                }
            }).then(res => this._getResponseData(res))
        }
    }

    updateAvatar(link) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                avatar: link,
            })
        })
            .then(res => this._getResponseData(res))
    }
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-48/',
    authorization: '77dd9c98-9262-45a7-b639-cc19bb597001',
});

export default api;