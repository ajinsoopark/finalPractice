import axios from 'axios';

export const fetchAllMovies = () => {
    return axios.get('/movies/all');
}

export const fetchMovieAndComments = (id) => {
    return axios.get(`/movies/${id}`);
}

