import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as movieActions from '../actions/movies-actions';
import AddMovie from './add-movie';
import MoviesTable  from './movies-table';
import ConfigSearch from './config-search';
import './movies.less';

class Movies extends React.Component {

    state = {
        movie: {
            identifier: "",
            name: "",
            releaseDate: "2022-09-01",
            genre: "2"
        }
    }
    
    static mapStateToProps = state => {
        return {
            movies: state.movies.items,
            genres: state.genres
        };
    }

    /**
     * Called by redux to map dispatch functions to props on this component.
     * @param {any} dispatch the dispatch function on the redux store.
     * @returns {any} the name-value hash for component properties.
     */
    static mapDispatchToProps = dispatch => {
        return {            
            fetchMovies: () => dispatch(movieActions.fetchMovies()),
            fetchGenres: () => dispatch(movieActions.fetchGenres()),
            clearState: () => dispatch(movieActions.clearState()),
            createMovie: (criteria, actions) => dispatch(movieActions.postMovie(criteria, actions)),
            deleteMovie: (movieId) => dispatch(movieActions.deleteMovie(movieId)),
            searchMovies: (searchCriteria, actions) => dispatch(movieActions.searchMovies(searchCriteria, actions))
        };
    }

    /**
    * React life cycle method (component has been mounted to real DOM).
    * @returns {undefined}
    */
    componentDidMount() {
        this.props.fetchMovies();
        this.props.fetchGenres();
    }

    /**
    * React life cycle method (component is going to be unmounted from real DOM).
    * @returns {undefined}
    */
    componentWillUnmount = () => {
        this.props.clearState();
    }

    handleAddMovieFormSubmit = (values, actions) => {
        const criteria = {
            id: values.identifier,
            name: values.name,
            releaseDate: moment(values.releaseDate, "DD-MM-YYYY").format(),
            genres: [parseInt(values.genre, 10)]
        };

        this.props.createMovie(criteria, actions);

        this.setState({
            movie: {
                identifier: "",
                name: "",
                releaseDate: "2022-09-01",
                genre: "2"
            }
        });
    }

    handleConfigSearchFormSubmit = (values, actions) => {
        const searchCriteria = {
            filterByName: values.filterByName,
            sortBy: parseInt(values.orderBy, 10),
            sortDirection: parseInt(values.orderDirection, 10),
            pageNum: parseInt(values.pageNumber, 10),
            pageSize: parseInt(values.pageSize, 10)
        };

        this.props.searchMovies(searchCriteria, actions);        
    }

    editMovie = (movie) => { 
        this.setState({
            movie: {
                identifier: movie.identifier,
                name: movie.name,
                releaseDate: movie.releaseDate,
                genre: movie.genre
            }
        });
    }

    removeMovie = (movieId) => {
        this.props.deleteMovie(movieId);
    }

    /**
     * Renders the movie container
     * @returns {JSX} A react JSX element
     */
    render() {    
        return (
            <div>                
                <div className='uggly-border'>
                <label>------------------------------------------------------------------------------</label>
                    <AddMovie movie={this.state.movie} genreOptions={this.props.genres} handleSubmit={this.handleAddMovieFormSubmit} />
                    <label>------------------------------------------------------------------------------</label>
                </div>
                <div className='uggly-border'>
                    <ConfigSearch handleSubmit={this.handleConfigSearchFormSubmit} />
                    <label>------------------------------------------------------------------------------</label>
                </div>                
                <div className='uggly-border'>
                    <MoviesTable 
                        movies={this.props.movies || []} 
                        genres={this.props.genres || []} 
                        removeMovie={this.removeMovie}
                        editMovie={this.editMovie}
                        />
                </div>
            </div>            
        );
    }
}

export default connect(
    Movies.mapStateToProps,
    Movies.mapDispatchToProps
)(Movies);
