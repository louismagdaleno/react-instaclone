import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import './Posts.css';

const Posts = (props) => {
    return (
        <div className="posts">
            {props.dummyData.map(dummy => <PostContainer data={dummy} />)}
        </div>
    );
}

export default Posts;