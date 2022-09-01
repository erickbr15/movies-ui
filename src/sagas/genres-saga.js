import {call, put, takeEvery } from 'redux-saga/effects';
import * as movieActions from '../actions/movies-actions';
import { getGenres } from '../api/genres-api';

function* fetchGenres(action){

    let genres = null;
    let error = null;

    try{
        genres = yield call(getGenres);
    }catch(e){
        error = e;
    }finally{
        yield put(movieActions.fetchGenresComplete(genres, error));
    }
}

function* genresSaga(){
    yield takeEvery(movieActions.FETCH_GENRES, fetchGenres);
}

export default genresSaga;