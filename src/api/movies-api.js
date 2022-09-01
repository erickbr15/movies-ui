import axios from 'axios';

export const getMovie = (movieId) => {

    var url = `https://localhost:44353/api/movies/${movieId}`
    return axios.get(url, {
        crossdomain: true
    }).then((response)=>{
        return response?.data;
    });
};

export const postMovie = (criteria) => {
    var url = `https://localhost:44353/api/movies`;

    return axios.post(url, criteria, {crossdomain: true})
    .then((response)=>{
        return response?.data;
    });
};

export const putMovie = (movieId, criteria) => {

    var url = `https://localhost:44353/api/movies/${movieId}`;

    return axios.put(url, criteria, {crossdomain: true})
    .then((response)=>{
        return response?.data;
    });
};

export const deleteMovie = (movieId) => {

    var url = `https://localhost:44353/api/movies/${movieId}`;

    return axios.delete(url, {
        crossdomain: true
    }).then((response)=>{
        return response?.data;
    });
};

export const searchMovie = (criteria) => {

    var url = 'https://localhost:44353/api/movies/search';

    return axios.post(url, criteria, {crossdomain: true})
    .then((response)=>{
        return response?.data;
    });
};