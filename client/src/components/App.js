import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import sprite from "../img/sprite.svg";
import Results from "./Results";
import Items from "./Items";

class App extends Component {

  search = React.createRef();

  handleSubmit = evt => {
    evt.preventDefault();
    const search = this.search.current.value;
    this.props.data.refetch({
      search
    });
  };

  render() {
    if (!this.props.data.items) return "Loading...";

    return (
      <div className="app">
        <div className="heading">
          <h1>Toronto Waste Lookup</h1>
        </div>
        <form className="search" onSubmit={this.handleSubmit}>
          <input type="text" className="search__input" ref={this.search} />
          <button className="search__button" type="submit">
            <svg className="search__icon">
              <use xlinkHref={`${sprite}#icon-search`} />
            </svg>
          </button>
        </form>
        <Items data={this.props.data.items} />
        <Items heading="Favourites" />
      </div>
    );
  }
}

const fetchItems = gql`
  query($search: String) {
    items(search: $search) {
      title
      body
    }
  }
`;

export default graphql(fetchItems, {
  options: {
      variables: {
        search: "takeout"
      }
    }
  })(App);
