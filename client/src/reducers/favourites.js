import { ADD_FAVOURITES, REMOVE_FAVOURITES } from '../actions/types';


export default (favourites = [], action ) => {
  switch(action.type) {
    case ADD_FAVOURITES: 
      return [...favourites, action.payload];
    case REMOVE_FAVOURITES:
      return favourites.filter(item => item.title !== action.payload.title);
    default:
      return favourites;
  }
}