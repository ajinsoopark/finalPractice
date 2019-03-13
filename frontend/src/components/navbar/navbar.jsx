import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <div className='navBarContainer'>
            <Link className='homeLink' to={ '/' }>
                Home
            </Link>
            <Link className='genreLink' to={ '/movies/byGenre' }>
                By Genre
            </Link>
            <Link className='allMoviesLink' to={ '/movies' }>
                All Movies
            </Link>
        </div>
    )
}

export default NavBar;