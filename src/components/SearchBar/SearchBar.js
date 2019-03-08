import React from 'react';
import './SearchBar.css';

import logo from './logo.png';
import instagram from './instagram.png';

import heart from './heart.png';
import user from './user.png';
import post from './post.png';

// TODO - Refactor into subcomponents

const SearchBar = (props) => {
    return (
        <header className="searchBar">
            <img src={logo} className="headerImg" />
            <img src={instagram} className="logo"/>
            <input type="text" name="search" placeholder="🔎 Search" />
            <a href="#"><img src={post} className="headerImg"/></a>
            <a href="#"><img src={heart} className="headerImg"/></a>
            <a href="#"><img src={user} className="headerImg"/></a>
        </header>
    );
}

export default SearchBar;