import React from 'react';
// import avatar from '../images/avatar.jpg';
import { api } from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {

    const [isMouseOverAvatar, setIsMouseOverAvatar] = React.useState(false)
    const [cards, setCards] = React.useState([])
    const currentUser = React.useContext(CurrentUserContext);


    function handleMouseEnter() {
        setIsMouseOverAvatar(true);
    }

    function handleMouseLeave() {
        setIsMouseOverAvatar(false);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
        .then((newCard) => setCards((cards) => cards.filter((c) => {
            if (c._id !== card._id) return newCard
        })))
        .catch((error) => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        api.getInitialCards()
            .then(res => {
                setCards(res)
            }).catch(console.log('error'))
    }, []

    )

    return (
        <main className="content">
            <section className="profile">
                <div className="profile-info">
                    <img className="profile-info__avatar" src={currentUser.avatar} alt="аватарка" onMouseEnter={handleMouseEnter} />
                    <button className={`profile-info__edit-avatar ${isMouseOverAvatar ? 'profile-info__edit-avatar_active' : ''}`} type="button" aria-label="редактировать" onClick={props.onEditAvatar} onMouseLeave={handleMouseLeave}></button>
                    <div className="profile-info__info">
                        <h1 className="profile-info__name">{currentUser.name}</h1>
                        <p className="profile-info__about">{currentUser.about}</p>
                    </div>
                    <button className="profile-info__edit-button" type="button" aria-label="редактировать" onClick={props.onEditProfile}></button>
                </div>
                <button className="profile__add-button" type="button" aria-label="добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo-grid">
                <ul className="photo-grid__list">
                    {
                        cards.map((item) => {
                            return (

                                <Card key={item._id} card={item} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                            )

                        })
                    }
                </ul>
            </section>
        </main>
    )

}

export default Main