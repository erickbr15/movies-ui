import {
    FETCH_GENRES, 
    FETCH_GENRES_COMPLETE, 
    CLEAR_STATE} from '../actions/movies-actions';

export const initialState = [];

export default function genresReducer(state = initialState, action) {
    switch (action.type) {
      
      case CLEAR_STATE: {
        return initialState;
      }
      case FETCH_GENRES:{
        return initialState;
      }
      case FETCH_GENRES_COMPLETE:{
        return action.genres;
      }
      default:
        return state
    }
  }