import React from 'react';

const Logos = (props) => {
    return (
        <>
            <img src={props.icon} />
            <span>|</span>
            <img src={props.logo} />
        </>
    );
}

export default Logos;