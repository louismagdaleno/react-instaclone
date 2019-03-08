import React from 'react';
import './SearchBar.css';

import logo from './logo.png';
import instagram from './instagram.png';

import heart from './heart.png';
import user from './user.png';
import post from './post.png';



const SearchBar = (props) => {
    return (
        <header className="searchBar">
            <img src={logo} className="headerImg" />
            <span>|</span>
            <img src={instagram} className="logo"/>
            <input type="text" name="search" placeholder="🔎 Search" />
            <img src={post} className="headerImg"/>
            <img src={heart} className="headerImg"/>
            <img src={user} className="headerImg"/>
        </header>
    );
}

export default SearchBar;