import React from 'react';

const Posts = (props) => {
    return (
        <div className="posts">
            {props.dummyData.map(dummy => <PostContainer dummyData={dummy} />)}
        </div>
    );
}

export default Posts;