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
        searchImages: res.data.results,
      });
    });
    console.log(...searchImagesState.searchImages);
  }

  useEffect(() => {
    let elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems);
  });

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
        <div class="row">
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img
                  className="materialboxed"
                  src={image.cover_photo.urls.regular}
                />

                <a class="btn-floating halfway-fab waves-effect waves-light red">
                  <i class="material-icons">favorite</i>
                </a>
              </div>
              <div class="card-content">
                <p>{image.cover_photo.alt_description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
