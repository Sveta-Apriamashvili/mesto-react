import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'

import '../index.css'
import ImagePopup from './ImagePopup';

function App() {
    document.body.style.backgroundColor = "#000";
    return (
        <div className="page__container">
            <Header />
            <Main />
            <Footer />
            <PopupWithForm />
            <ImagePopup />
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
