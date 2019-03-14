import React from 'react';
import { Link } from 'react-router-dom';

const MoviePost = ({...props}) => {
    console.log(props)
    return (
        <div className='moviePostContainer'>
            <div className='movieH3'>
                <h3>{props.title}</h3>
            </div>
            <div className='movieIMGContainer'>
                <Link className='imageLink' to={ `/movies/${props.id}` }>
                    <img className='movieIMG' src={props.img_url} alt=''/>
                </Link>
            </div>
            <div className='movieRating'>
                <p>{props.movie_rating}</p>
            </div>
        </div>
    )
}

export default MoviePost;