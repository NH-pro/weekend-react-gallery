import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';



function App() {

// useState manages the 'galleryList' change in state.
const [ galleryList, setGalleryList] = useState([]);

// On App load, 'fetchGalleryList()' is executed.
useEffect(() => {
  fetchGalleryList();
});

  const fetchGalleryList = () => {
    console.log(`---In fetchGalleryList---`);

    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log(`/gallery GET request SUCCESS`,response);
      setGalleryList(response.data);
    })
    .catch((err) => {
      console.log(`/gallery GET request FAILED`, err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>

        {/* GalleryList component */}
        <GalleryList
          galleryList = {galleryList}

        />
      </div>
    );
}

export default App;
