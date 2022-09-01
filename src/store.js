import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import moviesReducer from './reducers/movies-reducer';
import genresReducer from './reducers/genres-reducer';
import genresSaga from './sagas/genres-saga';
import moviesSaga from './sagas/movies-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(genresSaga);
sagaMiddleware.run(moviesSaga);

export default store;