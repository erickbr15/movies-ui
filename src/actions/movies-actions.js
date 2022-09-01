export const FETCH_MOVIES = '@movies/FETCH_MOVIES';
export const FETCH_MOVIES_COMPLETE = '@movies/FETCH_MOVIES_COMPLETE';
export const FETCH_MOVIE_BYID = '@movies/FETCH_MOVIE_BYID';
export const FETCH_MOVIE_BYID_COMPLETE = '@movies/FETCH_MOVIE_BYID_COMPLETE';
export const POST_MOVIE = '@movies/POST_MOVIE';
export const POST_MOVIE_COMPLETE = '@movies/POST_MOVIE_COMPLETE';
export const PUT_MOVIE = '@movies/PUT_MOVIE';
export const PUT_MOVIE_COMPLETE = '@movies/PUT_MOVIE_COMPLETE';
export const DELETE_MOVIE = '@movies/DELETE_MOVIE';
export const DELETE_MOVIE_COMPLETE = '@movies/DELETE_MOVIE_COMPLETE';
export const SEARCH_MOVIES = '@movies/SEARCH_MOVIES';
export const SEARCH_MOVIES_COMPLETE = '@movies/SEARCH_MOVIES_COMPLETE';
export const FETCH_GENRES = '@movies/FETCH_GENRES';
export const FETCH_GENRES_COMPLETE = '@movies/FETCH_GENRES_COMPLETE';
export const CLEAR_STATE = '@movies/CLEAR_STATE';

/**
 * Create an action to fetch the movies
 * @returns {Object} An action
 */
 export function fetchMovies() {
    return {
        type: FETCH_MOVIES,
        searchCriteria: {
            filterByName: "",
            sortBy: 2,
            sortDirection: 1,
            pageNum: 0,
            pageSize: 100
        }
    };
}

/**
 * Creates an action to indicate that the fetch movies operation is finished
 * @param {Object} searchResult The search movies result
 * @param {Object} errorInfo An object that represents the error if any
 * @returns {Object} An action
 */
export function fetchMoviesComplete(searchResult, errorInfo){
    return {
        type: FETCH_MOVIES_COMPLETE,
        searchResult,
        errorInfo
    };
}

/**
 * Creates an action to fetch the movie genres
 * @returns {Object} An action
 */
export function fetchGenres() {
    return {
        type: FETCH_GENRES        
    };
}

/**
 * Creates an action to indicate that the fetch genres operation is finished
 * @param {Array} movies An array of objects which represents the genres
 * @param {Object} errorInfo An object that represents the error if any
 * @returns {Object} An action
 */
 export function fetchGenresComplete(genres, errorInfo){
    return {
        type: FETCH_GENRES_COMPLETE,
        genres,
        errorInfo
    };
}

/**
 * Creates an action
 * @returns 
 */
export function clearState(){
    return {
        type: CLEAR_STATE        
    };
}

export function fetchMovieById(movieId){
    return {
        type: FETCH_MOVIE_BYID,
        movieId
    };
}

export function fetchMovieByIdComplete(movie){
    return {
        type: FETCH_MOVIE_BYID_COMPLETE,
        movie
    };
}

export function postMovie(criteria, actions){
    return {
        type: POST_MOVIE,
        meta: {thunk: true},
        payload: {
            criteria,
            actions
        }
    };
}

export function postMovieComplete(meta, newMovie, error){
    return {
        type: POST_MOVIE_COMPLETE,
        meta,
        payload: newMovie,
        error
    };
}

export function putMovie(movieId, criteria){
    return {
        type: PUT_MOVIE,
        meta: {thunk: true},
        payload: {
            movieId,
            criteria
        }
    };
}

export function putMovieComplete(meta, movie, error){
    return {
        type: PUT_MOVIE_COMPLETE,
        meta,
        payload: movie,
        error
    };
}

export function deleteMovie(movieId){
    return {
        type: DELETE_MOVIE,
        meta: {thunk: true},
        payload: {
            movieId
        }
    };
}

export function deleteMovieComplete(meta, error){
    return {
        type: DELETE_MOVIE_COMPLETE,
        meta,
        payload: {},
        error
    };
}

export function searchMovies(searchCriteria, actions){
    return {
        type: SEARCH_MOVIES,
        searchCriteria,
        actions
    };
}

export function searchMoviesComplete(searchResults){
    return {
        type: SEARCH_MOVIES_COMPLETE,
        searchResults
    };
}