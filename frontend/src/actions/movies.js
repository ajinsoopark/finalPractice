import * as MoviesAPIUtils from '../utils/movies';

export const ALL_MOVIES = 'ALL_MOVIES';
export const CURRENT_MOVIE = 'CURRENT_MOVIE';

export const allMovies = payload => ({ type: ALL_MOVIES, payload });
export const currentMovie = payload => ({ type: CURRENT_MOVIE, payload })

export const fetchAllMovies = () => dispatch => {
    return MoviesAPIUtils.fetchAllMovies()
    .then(movies => dispatch(allMovies(movies.data)))
}

export const fetchMovieAndComments = (id) => dispatch => {
    return MoviesAPIUtils.fetchMovieAndComments(id)
    .then(movie => dispatch(currentMovie(movie)))
}