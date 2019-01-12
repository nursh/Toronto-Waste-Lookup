import React, { Component } from "react";


import sprite from '../img/sprite.svg';

class App extends Component {


  handleSubmit = (evt) => {
    evt.preventDefault();

    alert("Hagabadla");
  }

  render() {
    return (
      <div className="app">
        <div className="heading">
          <h1>Toronto Waste Lookup</h1>
        </div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input type="text" className="search__input" />
          <button className="search__button" type="submit">
            <svg className="search__icon">
              <use xlinkHref={`${sprite}#icon-search`} />
            </svg>
          </button>
        </form>
        
      </div>
    );
  }
}

export default App;
