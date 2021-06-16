import React from 'react';
// import avatar from '../images/avatar.jpg';
import { api } from '../utils/api';
import Card from './Card'


function Main(props) {

    const [isMouseOverAvatar, setIsMouseOverAvatar] = React.useState(false)
    const [userName, setUserName] = React.useState()
    const [userDescription, setUserDescription] = React.useState()
    const [userAvatar, setUserAvatar] = React.useState()
    const [cards, setCards] = React.useState([])


    function handleMouseEnter() {
        setIsMouseOverAvatar(true);
    }

    function handleMouseLeave() {
        setIsMouseOverAvatar(false);
    }

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })

        api.getInitialCards()
            .then(res => {
                setCards(res)
            })
    }, []

    )

    return (
        <main className="content">
            <section className="profile">
                <div className="profile-info">
                    <img className="profile-info__avatar" src={userAvatar} alt="аватарка" onMouseEnter={handleMouseEnter} />
                    <button className={`profile-info__edit-avatar ${isMouseOverAvatar ? 'profile-info__edit-avatar_active' : ''}`} type="button" aria-label="редактировать" onClick={props.onEditAvatar} onMouseLeave={handleMouseLeave}></button>
                    <div className="profile-info__info">
                        <h1 className="profile-info__name">{userName}</h1>
                        <p className="profile-info__about">{userDescription}</p>
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
                    
                    <Card key={item._id} card={item} onCardClick={props.onCardClick}/>
                )
                
               })
               }
                </ul>
            </section>
        </main>
    )

}

export default Main