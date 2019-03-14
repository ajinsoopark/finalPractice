import MovieFeed from './movieFeed';
import { fetchAllMovies } from '../../actions/movies';

import { connect } from 'react-redux';

const mapStateToProps = state =>  {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllMovies: movies => dispatch(fetchAllMovies(movies))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieFeed);