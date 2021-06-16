import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (

        <li className="element">
            <button className="element__bin" type="button" aria-label="удалить"></button>
            <img className="element__image" src={props.card.link} alt="" onClick={handleClick} />
            <div className="element__text-container">
                <h3 className="element__title">{props.card.name}</h3>
                <button className="element__like" type="button" aria-label="нравится">{props.card.likes.length}</button>
            </div>
        </li>
    )
}

export default Card