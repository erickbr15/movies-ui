import React from 'react';
import InputField from '../components/common/input-field';

const AddMovieForm = ({
  handleChange,
  handleSubmit,
  isSubmitting,
  resetForm,
  values,
  errors,
  touched,
  genreOptions
}) => (
  <form onSubmit={handleSubmit}>
    <div className="colums">
      <div className="column is-full">
        <div className="field">
          <label className="label">Movie identifier</label>
          <div className="control">
            <input name="identifier" className="input" onChange={handleChange} value={values.identifier} />
          </div>
          {touched.identifier && errors.identifier && (<p className="help is-danger">{errors.identifier}</p>)}
        </div>
      </div>
      <div className="column is-full">
        <InputField name="name" type="text" label="Movie name" />
      </div>
      <div className="column is-full">
        <label className="label">Release date</label>
          <div className="control">
            <input type="date" name="releaseDate" className="input" onChange={handleChange} value={values.releaseDate} min="1950-01-01" max="2024-01-01" />
          </div>
          {touched.releaseDate && errors.releaseDate && (<p className="help is-danger">{errors.releaseDate}</p>)}
      </div>      
      <div className="column is-full">
        <div className="field">
          <label className="label">Movie Genre</label>
          <div className="control">
            <div className="select is-rounded">
              <select
                id="genre"
                name="genre"                
                onChange={handleChange}
                value={values.genre}>
                    {
                        genreOptions.map(genreOption=>{
                            return (
                                <option key={genreOption.id} value={genreOption.id} label={genreOption.name} />
                            );
                        })
                    }                
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="is-full">
        <div className="field is-grouped is-grouped-centered">
          <p className="control">
            <button className="button is-rounded is-primary" disabled={isSubmitting} type="submit">
                Save
            </button>
          </p>
          <p className="control">
            <button className="button is-rounded is-danger" type="button" onClick={resetForm}>
              Reset
            </button>
          </p>
        </div>
      </div>
    </div>
  </form>
);

export default AddMovieForm;