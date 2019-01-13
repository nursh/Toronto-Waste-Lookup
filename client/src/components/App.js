import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { addToFavourites, removeFromFavourites } from "../actions";
import sprite from "../img/sprite.svg";
import Results from "./Results";
import Favourites from "./Favourites";

class App extends Component {
  state = {
    favourites: this.props.favourites
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.favourites !== nextProps.favourites)
      this.setState({ favourites: nextProps.favourites });
  }

  search = React.createRef();

  handleSubmit = evt => {
    evt.preventDefault();
    const search = this.search.current.value;
    this.props.data.refetch({
      search
    });
  };

  render() {
    console.log(this.props);
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
        <div className="results">
          <Results
            data={this.props.data.items}
            addToFavourites={this.props.addToFavourites}
            removeFromFavourites={this.props.removeFromFavourites}
          />
        </div>
        <div className="results results--green">
          <h2 className="section__heading">Favourites</h2>
          <Favourites
            favourites={this.state.favourites}
            removeFromFavourites={this.props.removeFromFavourites}
          />
        </div>
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

const mapStateToProps = ({ favourites }) => ({ favourites });

export default connect(
  mapStateToProps,
  { addToFavourites, removeFromFavourites }
)(
  graphql(fetchItems, {
    options: {
      variables: {
        search: "takeout"
      }
    }
  })(App)
);
