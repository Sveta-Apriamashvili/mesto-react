
import React from 'react';
import avatar from '../images/avatar.jpg';

// const popup = document.querySelector('.pop-up__admin')
// // const openEditPopupButton = document.querySelector('.profile-info__edit-button');


// function handleEditProfileClick () {
//     popup.classList.add('pop-up_opened');
// }




function Main() {
    
    return (
        <main className="content">
            <section className="profile">
                <div className="profile-info">
                    <img className="profile-info__avatar" src={avatar} alt="аватарка" />
                    <button className="profile-info__edit-avatar" type="button" aria-label="редактировать"></button>
                    <div className="profile-info__info">
                        <h1 className="profile-info__name">Жак-Ив Кусто</h1>
                        <p className="profile-info__about">Исследователь океана</p>
                    </div>
                    <button className="profile-info__edit-button" type="button" aria-label="редактировать" ></button>
                </div>
                <button className="profile__add-button" type="button" aria-label="добавить"></button>
            </section>
            <section className="photo-grid">
                <ul className="photo-grid__list"></ul>
            </section>
        </main>
    )
    
}

  

export default Main