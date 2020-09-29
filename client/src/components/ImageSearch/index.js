import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import M  from "materialize-css/dist/js/materialize.min.js";
import "./style.css";

export default function ImageSearch() {
  const [searchImagesState, setSearchImagesState] = useState({
    searchImages: [],
  });

  function onSubmit(e) {
    e.preventDefault();
    let query = e.target.search.value;
 
    API.searchImages(query).then((res) => {
      console.log(res.data);
      setSearchImagesState({
        ...searchImagesState,
        searchImages: res.data.results
      });
    });
    console.log(...searchImagesState.searchImages)
  }
 
   
 

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search for More Images"
        />
        <input type="submit" value="Submit"></input>
      </form>

        
      
      <div className="card">
        {searchImagesState.searchImages.map((image) => (
        <div className="card-image waves-effect waves-block waves-light" key={image.id}>
         
            <img src={image.cover_photo.urls.regular} alt={image.id} />
        </div>
  
        ))}
      </div>
      </div>
   
  );
}
