import { ALL_MOVIES } from '../actions/movies';

const initialState = {
    allMovies: [],
    selectedMovie: null
}

const moviesReducer = (state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case ALL_MOVIES: {
            newState.allMovies = action.payload
            return newState
        }
        default: {
            return newState;
        }
    }
}

export default moviesReducer;