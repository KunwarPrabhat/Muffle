import React from 'react'
import './App.css'
import SearchBox from './MyComponents/SearchBox'
import Music_player from './MyComponents/Player';
import LeftComponents from './MyComponents/left_component';

function App() {
  return (
    <>
      <div>
        <SearchBox/>
        <Music_player/>
        <LeftComponents/>
      </div>
    </>
  );
};

export default App;

//add song progress bar.
// add sections like - library , playlists, settings.
// make it dynamically slide when clicked on different options.
//include playlist scroll function in the middle