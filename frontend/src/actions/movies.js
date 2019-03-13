import * as MoviesAPIUtils from '../utils/movies';

export const ALL_MOVIES = 'ALL_MOVIES';

export const allMovies = payload => ({ type: ALL_MOVIES, payload });

export const fetchAllMovies = () => dispatch => {
    return MoviesAPIUtils.fetchAllMovies()
    .then(movies => dispatch(allMovies(movies.data)))
}