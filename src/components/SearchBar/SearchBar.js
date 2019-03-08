import React from 'react';
import './SearchBar.css';

import logo from './logo.png';
import instagram from './instagram.png';



const SearchBar = (props) => {
    return (
        <header className="searchBar">
            <img src={logo} className="headerImg" />
            <span>|</span>
            <img src={instagram} className="headerImg"/>
            <input type="text" name="search" placeholder="Search" />
            <img src={props.postSrc} className="headerImg"/>
            <img src={props.heartSrc} className="headerImg"/>
            <img src={props.profileSrc} className="headerImg"/>
        </header>
    );
}

export default SearchBar;