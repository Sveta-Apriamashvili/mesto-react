import React from 'react';
import avatar from '../images/avatar.jpg';


function Main() {

function handleEditProfileClick () {
    const popupEditProfile = document.querySelector('.pop-up_type_edit')
    popupEditProfile.classList.add('pop-up_opened');
    
}

function handleAddPlaceClick () {
    const popupAddCard = document.querySelector('.pop-up_type_add-element')
    popupAddCard.classList.add('pop-up_opened');
    
}

function onMouseOverAvatar () {
    const avatarEditButton = document.querySelector('.profile-info__edit-avatar')
    avatarEditButton.classList.add('profile-info__edit-avatar_active')
}

function handleEditAvatarClick () {
    const popupEditAvatar = document.querySelector('.pop-up_type_edit-avatar')
    popupEditAvatar.classList.add('pop-up_opened')
}

    return (
        <main className="content">
            <section className="profile">
                <div className="profile-info">
                    <img className="profile-info__avatar" src={avatar} alt="аватарка" onMouseEnter={onMouseOverAvatar}/>
                    <button className="profile-info__edit-avatar" type="button" aria-label="редактировать" onClick={handleEditAvatarClick}></button>
                    <div className="profile-info__info">
                        <h1 className="profile-info__name">Жак-Ив Кусто</h1>
                        <p className="profile-info__about">Исследователь океана</p>
                    </div>
                    <button className="profile-info__edit-button" type="button" aria-label="редактировать" onClick={handleEditProfileClick}></button>
                </div>
                <button className="profile__add-button" type="button" aria-label="добавить" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="photo-grid">
                <ul className="photo-grid__list"></ul>
            </section>
        </main>
    )
    
}
  
export default Main