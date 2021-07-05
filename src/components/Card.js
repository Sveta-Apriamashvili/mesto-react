import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    const currentUser = React.useContext(CurrentUserContext);

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `element__bin ${isOwn ? 'element__bin_active' : ''}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (`element__like ${isLiked ? 'element__like_active' : ''}`);

    return (

        <li className="element">
            <button className={cardDeleteButtonClassName} type="button" aria-label="удалить"></button>
            <img className="element__image" src={props.card.link} alt="" onClick={handleClick} />
            <div className="element__text-container">
                <h3 className="element__title">{props.card.name}</h3>
                <button className={cardLikeButtonClassName} type="button" aria-label="нравится" onClick={handleLikeClick} >{props.card.likes.length}</button>
            </div>
        </li>
    )
}

export default Card