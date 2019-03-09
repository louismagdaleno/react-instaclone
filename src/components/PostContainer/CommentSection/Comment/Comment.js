import React from 'react';
import './Comment.css';

const Comment = (props) => {
    return (
        <p className="comment"><span>{props.username}</span> {props.text}
        </p>
    );
}

export default Comment;