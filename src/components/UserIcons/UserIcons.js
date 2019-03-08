import React from ',.react';
import UserIcon from '../UserIcon/UserIcon';

const UserIcons = (props) => {
    return (
        {props.icons.map(e => <UserIcon src={e.src} />)}
    );
}

export default UserIcons;