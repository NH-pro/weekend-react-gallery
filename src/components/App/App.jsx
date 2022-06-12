// Importing stuff.
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
  // This is ONLY used to fetch our data from the server and 'save' it in our 'galleyList' variable.
  // We do this so we can use that data in our App return --> GalleryList component.
  const fetchGalleryList = () => {
    console.log(`---In fetchGalleryList---`);
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log(`/gallery GET request SUCCESS`,response.data);
      // Changes the STATE of 'galleryList' with the array of objects from 'gallery.data.js'.
      // We use '.data' at the end of our response, because axios sends us back an array with a bunch
      //  of other info we don't care about. '.data' is literally the data/response we get back from the server. 
      setGalleryList(response.data);
    })
    .catch((err) => {
      console.log(`/gallery GET request FAILED`, err);
    })
  }

  // PUT request to update "image likes".
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
        {/* - This is when we use all that data we fetched with our 'fetchGalleryList' GET request.
            - We now render our 'GalleryList' component and add our "props" that we want to ship along
                with it.
            - The props we sending here are the current state of the array of data in 'galleryList'
                and our 'addLike' PUT request.
            - So now we head on over to our GalleryList.jsx component (also known as javascript extension)
                and see what we're rendering. */}
        <GalleryList
          galleryList = {galleryList}
          addLike = {addLike}
        />
      </div>
    </div>
  );
}

export default App;
