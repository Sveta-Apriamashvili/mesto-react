import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'

import '../index.css'

function App() {
  document.body.style.backgroundColor="#000";
  return ( 
    <div className="page__container">
        <Header />
        <Main />
        <Footer />
        <div className="pop-up pop-up_type_edit">
            <div className="pop-up__container">
                <button className="pop-up__close-button" type="button" aria-label="закрыть"></button>
                <h3 className=" pop-up__title">Редактировать профиль</h3>
                <form className="pop-up__admin" name="edit-profile" noValidate>
                    <div className="pop-up__input-container">
                        <input type="text" className="pop-up__item" id="name" name="name" placeholder="Имя" minLength="2"
                            maxLength="40" required />
                        <span className="pop-up__error" id="name-error"></span>
                        <input type="text" className="pop-up__item" id="about" name="about" placeholder="О себе"
                            minLength="2" maxLength="200" required />
                        <span className="pop-up__error" id="about-error"></span>
                    </div>
                    <button type="submit" className="pop-up__submit-button">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="pop-up pop-up_type_edit-avatar">
            <div className="pop-up__container">
                <button className="pop-up__close-button" type="button" aria-label="закрыть"></button>
                <h3 className=" pop-up__title">Обновить аватар</h3>
                <form className="pop-up__admin" name="edit-avatar" noValidate>
                    <div className="pop-up__input-container">
                        <input type="url" className="pop-up__item" id="avatar-image" name="about" placeholder="Ссылка на картинку"
                            required />
                        <span className="pop-up__error" id="avatar-image-error"></span>
                    </div>
                    <button disabled type="submit" className="pop-up__submit-button">Сохранить</button>
                </form>
            </div>
        </div>
        <div className="pop-up pop-up_type_add-element">
            <div className="pop-up__container">
                <button className="pop-up__close-button" type="button" aria-label="закрыть"></button>
                <h3 className=" pop-up__title">Новое место</h3>
                <form className="pop-up__admin" name="add-image" noValidate>
                    <div className="pop-up__input-container">
                        <input type="text" className="pop-up__item" id="cardname" name="name" placeholder="Название"
                            minLength="2" maxLength="200" required />
                        <span className="pop-up__error" id="cardname-error"></span>
                        <input type="url" className="pop-up__item" id="image" name="about" placeholder="Ссылка на картинку"
                            required />
                        <span className="pop-up__error" id="image-error"></span>
                    </div>
                    <button disabled type="submit" className="pop-up__submit-button">Создать</button>
                </form>
            </div>
        </div>
        <div className="pop-up pop-up_type_remove-card">
            <div className="pop-up__container">
                <button className="pop-up__close-button" type="button" aria-label="закрыть"></button>
                <h3 className=" pop-up__title">Вы уверены?</h3>
                <button type="button" className="pop-up__submit-button">Да</button>
            </div>
        </div>
        <div className="pop-up pop-up_type_image">
            <div className="pop-up__container pop-up__container_type_image">
                <button className="pop-up__close-button" type="button" aria-label="закрыть"></button>
                <figure className="pop-up__figure">
                    <img src="#" alt="#" className="pop-up__image" />
                    <figcaption className="pop-up__image-caption"></figcaption>
                </figure>
            </div>
        </div>
        <template className="element-template">
            <li className="element">
                <button className="element__bin" type="button" aria-label="удалить"></button>
                <img className="element__image" src="#" alt="" />
                <div className="element__text-container">
                    <h3 className="element__title"></h3>
                    <button className="element__like" type="button" aria-label="нравится">0</button>
                </div>

            </li>
        </template>
    </div>
    
  );
}

export default App;
