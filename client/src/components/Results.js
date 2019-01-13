import React from 'react';
import he from "he";


import sprite from "../img/sprite.svg";

const Results = ({ data, addToFavourites }) => {
  return data.map((item, index) => (
    <div className="result" key={index}>
      <div className="result__title">
        <svg className="result__icon" onClick={() => addToFavourites(item)}>
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

export default Results;
