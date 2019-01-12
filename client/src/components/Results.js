import React, { Component } from 'react';
import he from "he";


import sprite from "../img/sprite.svg";

const Results = ({ data }) => {

  return data.map(({ title, body }, index) => (
    <div className="result" key={index}>
      <div className="result__title">
        <svg className="result__icon">
          <use xlinkHref={`${sprite}#icon-star-full`} />
        </svg>
        <p className="result__text">{title}</p>
      </div>
      <div
        className="result__body"
        dangerouslySetInnerHTML={{__html: he.decode(body)}}
      >
      </div>
    </div>
  ))
}

export default Results;
