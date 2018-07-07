import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';
import PodcastContainer from './components/podcast_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PodcastContainer />
      </div>
    );
  }
}

export default App;
