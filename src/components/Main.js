import React from 'react';
import avatar from '../images/avatar.jpg';


function Main(props) {

    const[isMouseOverAvatar, setIsMouseOverAvatar]=React.useState(false)
    
    function handleMouseEnter() {
        setIsMouseOverAvatar(true);
    }

    function handleMouseLeave() {
        setIsMouseOverAvatar(false);
    }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile-info">
                    <img className="profile-info__avatar" src={avatar} alt="аватарка" onMouseEnter={handleMouseEnter}/>
                    <button className={`profile-info__edit-avatar ${isMouseOverAvatar ? 'profile-info__edit-avatar_active' : ''}`} type="button" aria-label="редактировать" onClick={props.onEditAvatar} onMouseLeave={handleMouseLeave}></button>
                    <div className="profile-info__info">
                        <h1 className="profile-info__name">Жак-Ив Кусто</h1>
                        <p className="profile-info__about">Исследователь океана</p>
                    </div>
                    <button className="profile-info__edit-button" type="button" aria-label="редактировать" onClick={props.onEditProfile}></button>
                </div>
                <button className="profile__add-button" type="button" aria-label="добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo-grid">
                <ul className="photo-grid__list"></ul>
            </section>
        </main>
    )
    
}
  
export default Main