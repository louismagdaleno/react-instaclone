import React from 'react';
import './PostContainer.css';
import CommentSection from './CommentSection/CommentSection';
import heart from './heart.png';

const PostContainer = (props) => {
    return (
        <>
            <header>
                <img src={props.data.thumbnailUrl} />
                <h3>{props.data.username} </h3>
            </header>
            <img src={props.data.imageUrl} />
            <div className="actions">
                <img src={heart} />
                <img src={heart} />
            </div>
            <div className="likes">
                <p>{props.data.likes} likes </p>
            </div>
            <CommentSection comments={props.data.comments} />
            <input type="text" name="addComment" placeholder="Add a comment..." />
        </>
    );
}

export default PostContainer;