import { ALL_MOVIES, CURRENT_MOVIE } from '../actions/movies';

const initialState = {
    allMovies: [],
    selectedMovie: null
}

const moviesReducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case ALL_MOVIES: {
            newState.allMovies = action.payload.movies
            return newState
        }
        case CURRENT_MOVIE: {
            newState.selectedMovie = action.payload.data.movie
            return newState
        }
        default: {
            return newState;
        }
    }
}

export default moviesReducer;