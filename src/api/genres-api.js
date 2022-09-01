import axios from 'axios';

export const getGenres = () => {

    const url = 'https://localhost:44353/api/genres';

    return axios.get(url, {
        crossdomain: true
    }).then((response)=>{
        return response?.data;
    });
};