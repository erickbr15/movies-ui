import React from 'react';
import { Formik } from 'formik';
import AddMovieForm from './add-movie-form';

const validation = values => {
  let errors = {};

  if (!values.identifier) {
    errors.identifier = "Movie idenifier is required!";
  } 

  if (!values.name) {
    errors.name = "Movie name is required!";
  }

  if (!values.releaseDate) {
    errors.team = "Movie release date is required!";
  } 

  return errors;
};

const AddMovie = ({
    movie,
    genreOptions,
    handleSubmit
}) => (
  <Formik
    initialValues={{
        identifier: movie.identifier,
        name: movie.name,
        releaseDate: movie.releaseDate,
        genre: movie.genre
    }}
    onSubmit={(values, actions) => {
        handleSubmit(values, actions);            
    }}
    validate={validation}
  >
    {props => <AddMovieForm {...props} genreOptions={genreOptions} />}
  </Formik>
);

export default AddMovie;