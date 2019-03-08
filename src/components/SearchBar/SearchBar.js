import React from 'react';

// import components
import Logos from '..Logos/Logos';
import SearchBox from '../SearchBox';
import UserIcons from '../UserIcons';

const SearchBar = (props) => {
    return (
        <header>
            <Logos />
            <SearchBox />
            <UserIcons />
        </header>
    );
}

export default SearchBar;