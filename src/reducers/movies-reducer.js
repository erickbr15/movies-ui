import {
    FETCH_MOVIES, 
    FETCH_MOVIES_COMPLETE, 
    CLEAR_STATE,
    SEARCH_MOVIES_COMPLETE
  } from '../actions/movies-actions';

export const initialState = {
  total: 0,
  items: []
};

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {      
      case CLEAR_STATE: {
        return initialState;
      }
      case FETCH_MOVIES:{
        return initialState;
      }
      case FETCH_MOVIES_COMPLETE:{
        return {
          ...state,
          total: action.searchResult.totalItems,
          items: [...action.searchResult.results]
        }
      }
      case SEARCH_MOVIES_COMPLETE:{
        return {
          ...state,
          total: action.searchResults.totalItems,
          items: [...action.searchResults.results]
        }
      }
      default:
        return state
    }
  }