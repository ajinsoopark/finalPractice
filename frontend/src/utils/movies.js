import axios from 'axios';

export const fetchAllMovies = () => {
    return axios.get('/movies/all')
}

