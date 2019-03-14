import React, { Component } from 'react';

import Comment from '../comments/comment';

class SingleMovie extends Component {

    state = {
        rating: '',
        comment: '',
        ratingError: false,
        commentError: false
    }


    componentDidMount () {
        let movieId = parseInt(this.props.match.params.id);
        this.props.fetchMovieAndComments(movieId);
    }

    handleRadioButton = (event) => this.setState({ [event.target.name]: event.target.value });
    
    handleSubmit = () => {
        if (this.state.rating) {
            
        }
    }

    render () {
        const { title, img_url, genre, movie_rating } = this.props.movies.selectedMovie ? this.props.movies.selectedMovie[0] : '';
        const { rating, comment } = this.state;
        const comments = this.props.movies.selectedMovie ?
                        this.props.movies.selectedMovie.map((movieObj,i) => {
                            return (
                                <Comment
                                 key={i}
                                 comment={movieObj.comment}
                                 />
                            )
                        }) : '';

        console.log(this.state)
        return (
            <div className='singleMovieContainer'>
                <div className='movieContent'>
                    <h2>{ title }</h2>
                    <div className='movieImage'>
                        <img src={img_url} alt='movie'/>
                    </div>
                    <p>{ genre }</p>
                    <p>{ `Rating: ${movie_rating}/5` }</p>
                </div>
                <div className='ratingsAndComments'>
                    <form className='ratingsForm'>
                        <p>Rate this movie:</p>                        
                        1 <input className='ratingInput' value='1' name='rating' type='radio' checked={ rating === '1' } onChange={ this.handleRadioButton }/>
                        2 <input className='ratingInput' value='2' name='rating' type='radio' checked={ rating === '2' } onChange={ this.handleRadioButton }/>
                        3 <input className='ratingInput' value='3' name='rating' type='radio' checked={ rating === '3' } onChange={ this.handleRadioButton }/>
                        4 <input className='ratingInput' value='4' name='rating' type='radio' checked={ rating === '4' } onChange={ this.handleRadioButton }/>
                        5 <input className='ratingInput' value='5' name='rating' type='radio' checked={ rating === '5' } onChange={ this.handleRadioButton }/>
                        <div className='ratingSubmitContainer'>
                            <input className='ratingSubmit' type='submit' value='Submit Rating'/>
                        </div>
                    </form>
                </div>
                <div className='commentFeed'>
                    <ul>
                        {comments}
                    </ul>
                </div>
            </div>
        )
    }
}

export default SingleMovie;