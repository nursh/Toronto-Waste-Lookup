import React from 'react';
import he from "he";


import sprite from "../img/sprite.svg";

const Favourites = ({ favourites, removeFromFavourites }) => {
  if (!favourites) return '';
  return favourites.map((item, index) => (
    <div className="result" key={index}>
      <div className="result__title">
        <svg className="result__icon result__icon--green" onClick={() => removeFromFavourites(item)}>
          <use xlinkHref={`${sprite}#icon-star-full`} />
        </svg>
        <p className="result__text">{item.title}</p>
      </div>
      <div
        className="result__body"
        dangerouslySetInnerHTML={{__html: he.decode(item.body)}}
      >
      </div>
    </div>
  ))
}

export default Favourites;
