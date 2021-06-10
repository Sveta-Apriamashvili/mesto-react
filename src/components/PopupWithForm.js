import { render } from '@testing-library/react';
import React from 'react';

function PopupWithForm(props) {

    return (
        
            <div className={`pop-up pop-up_type_${props.name}`} >
                <div className="pop-up__container">
                    <button className="pop-up__close-button" type="button" aria-label="закрыть"></button>
                    <h3 className="pop-up__title">{props.title}</h3>
                    <form className="pop-up__admin" name={props.name} noValidate>
                        {props.children}
                        <button type="submit" className="pop-up__submit-button">Сохранить</button>
                    </form>
                </div>
            </div>
            
        
    )
}

render(
    <>
        <PopupWithForm title="Редактировать профиль" name="edit">
            <div className="pop-up__input-container">
                <input type="text" className="pop-up__item" id="name" name="name" placeholder="Имя" minLength="2"
                    maxLength="40" required />
                <span className="pop-up__error" id="name-error"></span>
                <input type="text" className="pop-up__item" id="about" name="about" placeholder="О себе"
                    minLength="2" maxLength="200" required />
                <span className="pop-up__error" id="about-error"></span>
            </div>
        </PopupWithForm>
        <PopupWithForm title="Обновить аватар" name="edit-avatar">
            <div className="pop-up__input-container">
                <input type="url" className="pop-up__item" id="avatar-image" name="about" placeholder="Ссылка на картинку"
                    required />
                <span className="pop-up__error" id="avatar-image-error"></span>
            </div> </PopupWithForm>
        <PopupWithForm title="Новое место" name="add-element">
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
    </>
)

export default PopupWithForm