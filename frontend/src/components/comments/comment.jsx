import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className='commentContainer'>
            <li>{comment}</li>
        </div>
    )
}

export default Comment;