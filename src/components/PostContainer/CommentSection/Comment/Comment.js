import React from 'react';
import './Comment.css';

const Comment = (props) => {
    return (
        <p>{props.username} {props.text}
        </p>
    );
}

export default Comment;