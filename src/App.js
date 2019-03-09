import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

// component imports
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts dummyData={dummyData}/>
      </div>
    );
  }
}

export default App;
