import {call, put, takeEvery} from 'redux-saga/effects';
import * as movieActions from '../actions/movies-actions';
import {
    getMovie,
    postMovie,
    putMovie,
    deleteMovie,
    searchMovie
} from '../api/movies-api';


function* fetchMovies(action){
    let searchResult = null;
    let error = null;

    try{
        searchResult = yield call(searchMovie, action.searchCriteria);
    
    }catch(e){
        error = e;
    }finally{
        yield put(movieActions.fetchMoviesComplete(searchResult, error));
    }
}

function* getMovieById(action){
    let movie = null;    

    try{
        movie = yield call(getMovie, action.movieId);
    
    }catch(e){
        console.log(e);
    }finally{
        yield put(movieActions.fetchMovieByIdComplete(movie));
    }
}

function* createMovie(action){
    let movie = null;
    let error = null;

    try{
        movie = yield call(postMovie, action.payload.criteria);

        const searchCriteria =  {
            filterByName: "",
            sortBy: 2,
            sortDirection: 1,
            pageNum: 0,
            pageSize: 5
        };
        const searchResult = yield call(searchMovie, searchCriteria);

        yield put(movieActions.fetchMoviesComplete(searchResult, error));
    
    }catch(e){
        error = e;
    }finally{
        yield put(movieActions.postMovieComplete(action.meta, movie, error !== null));
        action.payload.actions.setSubmitting(false);
    }
}

function* updateMovie(action){
    let movie = null;
    let error = null;

    try{
        movie = yield call(putMovie, action.payload.movieId, action.payload.criteria);
    
    }catch(e){
        error = e;
    }finally{
        yield put(movieActions.putMovieComplete(action.meta, movie, error !== null));
    }
}

function* removeMovie(action){    
    let error = null;

    try{
        yield call(deleteMovie, action.payload.movieId);

        const searchCriteria =  {
            filterByName: "",
            sortBy: 2,
            sortDirection: 1,
            pageNum: 0,
            pageSize: 5
        };
        const searchResult = yield call(searchMovie, searchCriteria);

        yield put(movieActions.fetchMoviesComplete(searchResult, error));
    
    }catch(e){
        error = e;
    }finally{
        yield put(movieActions.deleteMovieComplete(action.meta, error !== null));
    }
}

function* searchMovies(action){
    let searchResult = null;

    try{
        searchResult = yield call(searchMovie, action.searchCriteria);
    
    }catch(e){
        console.log(e);
    }finally{
        yield put(movieActions.searchMoviesComplete(searchResult));
        action.actions.setSubmitting(false);
    }
}

function* moviesSaga(){
    yield takeEvery(movieActions.FETCH_MOVIES, fetchMovies);
    yield takeEvery(movieActions.FETCH_MOVIE_BYID, getMovieById);
    yield takeEvery(movieActions.POST_MOVIE, createMovie);
    yield takeEvery(movieActions.PUT_MOVIE, updateMovie);
    yield takeEvery(movieActions.DELETE_MOVIE, removeMovie);
    yield takeEvery(movieActions.SEARCH_MOVIES, searchMovies);
}

export default moviesSaga;