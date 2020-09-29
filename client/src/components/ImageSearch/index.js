import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import M from "materialize-css/dist/js/materialize.min.js";
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



        {searchImagesState.searchImages.map((image) => (
          <div className="row">
      <div className="card col s6">
          <div className="card-image waves-effect waves-block waves-light" key={image.id}>
            <img className="activator" src={image.cover_photo.urls.regular} alt={image.id} />
          </div>
          <div class="card-content">
        <div class="card-title activator grey-text text-darken-4">{image.cover_photo.alt_description}</div>
      <p><a href="#">Add to Favorite</a></p>
    </div>
    
  
      </div>
    </div>
        ))}
    </div>

  );
}
