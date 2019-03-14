import React, { Component } from 'react';

class MovieFeed extends Component {
    constructor () {
        super ()
        this.state = {
            searchedValue: ''
        }
    }

    componentDidMount () {
        this.props.fetchAllMovies();
    }

    render () {
        const movie = this.props.movies.allMovies ?
                      this.props.movies.allMovies.map(movieObj => {
                          return (
                              <MoviePost
                               key={movieObj.id}
                               id={movieObj.id}
                               title={movieObj.title}
                               img_url={movieObj.img_url}
                               genre={movieObj.genre}
                               movie_rating={movieObj.movie_rating}
                               />
                          ) 
                      }) : '';

        return (
            <div className='movieFeedContainer'> 
                <div className='formContainer'>
                    <form >
                        <label htmlFor='searchMovies'>Search By Title</label>
                        <input className='searchInput' 
                               id='searchMovies'
                               type='text'
                               placeholder='Movie Name...'
                               value={ this.state.searchedValue }/>
                        <input className='searchSubmit' type='submit' value='Search'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default MovieFeed;