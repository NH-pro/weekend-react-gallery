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
  }, []);

  const fetchGalleryList = () => {
    console.log(`---In fetchGalleryList---`);

    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log(`/gallery GET request SUCCESS`,response.data);
      setGalleryList(response.data);
    })
    .catch((err) => {
      console.log(`/gallery GET request FAILED`, err);
    })
  }

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
      <p>Gallery goes here</p>

      {/* Render GalleryList component */}
      <div className="gallery_box">
        <GalleryList
          galleryList = {galleryList}
          addLike = {addLike}
        />
      </div>
    </div>
  );
}

export default App;
