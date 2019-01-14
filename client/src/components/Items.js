import React, { Component } from 'react';
import he from "he";
import { connect } from 'react-redux';


import { addToFavourites, removeFromFavourites } from '../actions';
import sprite from "../img/sprite.svg";


class Items extends Component {

  handleStatusChange = (item, greenStar) => {
    if (!!greenStar) {
      this.props.removeFromFavourites(item);
    } else {
      this.props.addToFavourites(item);
    }
  }

  render() {
    const items = this.props.data || this.props.favourites;
    const greenBgrd = !this.props.data ? ' results--green' : '';

    return (
      <div className={`results ${greenBgrd}`}>
        {
          this.props.heading && <h2 className="section__heading">{this.props.heading}</h2>
        }
        {
          items.map((item, index) => {
            const itemFound = this.props.favourites.find(fav => fav.title === item.title);
            const greenStar = itemFound ? "result__icon--green" : '';

            return (
              <div className="result" key={index}>
                <div className="result__title">
                  <svg className={`result__icon ${greenStar}`}
                    onClick={() => this.handleStatusChange(item, greenStar)}
                  >
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
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = ({ favourites }) => ({ favourites });
const mapDispatchToProps = { addToFavourites, removeFromFavourites };

export default connect(mapStateToProps, mapDispatchToProps)(Items);