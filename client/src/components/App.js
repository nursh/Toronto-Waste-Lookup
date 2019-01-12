import React, { Component } from "react";


import sprite from "../img/sprite.svg";
import Results from './Results';

class App extends Component {
  mockData = [
    {
      title: "Blue Bin (plastic takeout food and produce containers)",
      body:
        "&lt;ul&gt; &lt;li&gt;Empty and rinse (if necessary and possible) this item before placing it in the&amp;nbsp;&lt;strong&gt;Blue Bin&lt;/strong&gt;.&lt;/li&gt; &lt;li&gt;Any type of black or compostable plastic is not accepted and should be placed in the &lt;strong&gt;Garbage Bin&lt;/strong&gt;.&lt;/li&gt; &lt;/ul&gt;"
    },
    {
      title: "Green Bin (packaging)",
      body:
        "&lt;ul&gt; &lt;li&gt;Place this item in your&amp;nbsp;&lt;b&gt;Green Bin.&lt;/b&gt;&lt;/li&gt; &lt;li&gt;Line either your indoor container or outdoor Green Bin with a plastic bag or kraft paper bag. Do not line both.&lt;/li&gt; &lt;/ul&gt;"
    },
    {
      title: "Garbage (takeout coffee cup)",
      body:
        "&lt;ul&gt; &lt;li&gt;Place item in the &lt;strong&gt;Garbage Bin.&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;If applicable, remove plastic lid and place in &lt;strong&gt;Blue Bin&lt;/strong&gt;. Place black and compostable plastic lids and any straw in the &lt;strong&gt;Garbage Bin&lt;/strong&gt;.&lt;/li&gt; &lt;/ul&gt;"
    }
  ];

  handleSubmit = evt => {
    evt.preventDefault();

    alert("Hagabadla");
  };

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
        <div className="results">
          <Results data={this.mockData} />
        </div>
      </div>
    );
  }
}

export default App;
