import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/api';

import '../index.css'
import ImagePopup from './ImagePopup';

import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState();
    const [currentUser, setCurrentUser] = React.useState('');

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard()
    }

    function handleCardClick (card) {
       console.log('click')
        setSelectedCard(card)
    }

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setCurrentUser(res)
                // setUserDescription(res.about)
                // setUserAvatar(res.avatar)
            }).catch(console.log('error'))
        }, [])

    return (
        <div className="page__container">
            <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />
            <Footer />
            <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <div className="pop-up__input-container">
                    <input type="text" className="pop-up__item" id="name" name="name" placeholder="Имя" minLength="2"
                        maxLength="40" required />
                    <span className="pop-up__error" id="name-error"></span>
                    <input type="text" className="pop-up__item" id="about" name="about" placeholder="О себе"
                        minLength="2" maxLength="200" required />
                    <span className="pop-up__error" id="about-error"></span>
                </div>
            </PopupWithForm>
            <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <div className="pop-up__input-container">
                    <input type="url" className="pop-up__item" id="avatar-image" name="about" placeholder="Ссылка на картинку"
                        required />
                    <span className="pop-up__error" id="avatar-image-error"></span>
                </div> </PopupWithForm>
            <PopupWithForm title="Новое место" name="add-element" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <div className="pop-up__input-container">
                    <input type="text" className="pop-up__item" id="cardname" name="name" placeholder="Название"
                        minLength="2" maxLength="200" required />
                    <span className="pop-up__error" id="cardname-error"></span>
                    <input type="url" className="pop-up__item" id="image" name="about" placeholder="Ссылка на картинку"
                        required />
                    <span className="pop-up__error" id="image-error"></span>
                </div></PopupWithForm>
            <PopupWithForm title="Вы уверены?" name="remove-card">
                <div className="pop-up__container">
                    <button className="pop-up__close-button" type="button" aria-label="закрыть"></button>
                    <h3 className=" pop-up__title">Вы уверены?</h3>
                    <button type="button" className="pop-up__submit-button">Да</button>
                </div></PopupWithForm>
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </CurrentUserContext.Provider>
        </div>

    );
}



export default App;
