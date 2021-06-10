import React from 'react';

function ImagePopup() {
return (
    <div className="pop-up pop-up_type_image">
    <div className="pop-up__container pop-up__container_type_image">
        <button className="pop-up__close-button" type="button" aria-label="закрыть"></button>
        <figure className="pop-up__figure">
            <img src="#" alt="#" className="pop-up__image" />
            <figcaption className="pop-up__image-caption"></figcaption>
        </figure>
    </div>
</div>
)
}

export default ImagePopup