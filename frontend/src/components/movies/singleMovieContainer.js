import { fetchMovieAndComments } from '../../actions/movies';
import { connect } from 'react-redux'

import SingleMovie from './singleMovie';

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovieAndComments: movie => dispatch(fetchMovieAndComments(movie))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (SingleMovie);