import React, { Component } from 'react';
import Table from './table';

class MoviesTable extends Component {

    state = {
        columns: [
            { title: 'Movie identifier', required: true, width: 100 },
            { title: 'Name', required: true, width: 250 },
            { title: 'Release date', width: 100 },
            { title: 'Genres', width: 200 }
        ]
    };    

    /** 
     * Handles the remove click button event
     * @param {Object} movie The movie to remove
     * @returns {void}
    */
    handleRemoveClick = (movie) => { 
        return ()=> {
            this.props.removeMovie(movie.id);
        };       
    }

    /**
     * Handles the edit click button event
     * @param {Object} movie The movie to edit
     * @returns {void}
     */
    handleEditClick = (movie) => {
        return () => {
            this.props.editMovie(movie);
        };
    }    

    /**
    * Renders the No Records message
    * @returns {JSX.Element} a JSX element
    */
    renderNoRecordsMessage = () => {
        if(Array.isArray(this.props.movies) && this.props.movies.length > 0){
            return null;
        }
        return (
            <tr>
                <td colSpan='6' className="no-records-label">
                    <label>No movies available.</label>
                </td>
            </tr>
        );
    }

    /**
     * Render the component whenever a state or property change occurs.
     * @returns {JSX.Element} a react element.
     */
    render() {
        return (
            <Table columns={this.state.columns}>
            {
                this.props.movies.map((movie, index) => {
                    return (
                        <tr key={index.toString()} >
                            <td>
                                <label>{movie.id}</label>
                            </td>
                            <td>
                                <label>{movie.name}</label>
                            </td>
                            <td>
                                <label>{movie.releaseDate}</label>
                            </td>
                            <td>
                                <label>{movie.genres.map(g=>g.name).join()}</label>                                            
                            </td>
                            <td>
                                <button type="button" onClick={this.handleEditClick(movie)}>Edit</button>
                            </td>
                            <td>
                                <button type="button" onClick={this.handleRemoveClick(movie)}>Remove</button>
                            </td>
                        </tr>
                    );
                })
            }
            {this.renderNoRecordsMessage()}
            </Table>
        );
    }
}

export default MoviesTable;
