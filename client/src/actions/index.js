import { ADD_FAVOURITES, REMOVE_FAVOURITES } from './types';


export const addToFavourites = (item) => ({
  type: ADD_FAVOURITES,
  payload: item
});

export const removeFromFavourites = (item) => ({
  type: REMOVE_FAVOURITES,
  payload: item
});
