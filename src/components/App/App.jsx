// Import stuff
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  // useState manages the 'galleryList' change in state.
  const [ galleryList, setGalleryList] = useState([]);

  // On App load, 'fetchGalleryList()' is executed.
  useEffect(() => {
    fetchGalleryList();
  }, []);

  // GET request
  const fetchGalleryList = () => {
    console.log(`---In fetchGalleryList---`);
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log(`/gallery GET request SUCCESS`,response.data);
      // changes the STATE of 'galleryList' with the 
      setGalleryList(response.data);
    })
    .catch((err) => {
      console.log(`/gallery GET request FAILED`, err);
    })
  }

  // PUT request
  const addLike = (frogID) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${frogID}`
    })
    .then((response) => {
        console.log(`PUT /gallery/like/${frogID} request SUCCESS!`);
        fetchGalleryList();
    })
    .catch((err) => {
        console.log(`PUT /gallery/like/${frogID} request FAILED!`, err);
    })
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1 className="App-title">Gallery of Frogs</h1>
      </header>

      <div className="gallery_box">
        {/* Render GalleryList component */}
        <GalleryList
          galleryList = {galleryList}
          addLike = {addLike}
        />
      </div>
    </div>
  );
}

export default App;
