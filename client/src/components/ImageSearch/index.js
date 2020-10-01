import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import M from "materialize-css/dist/js/materialize.min.js";
import "./style.css";

export default function ImageSearch() {
  const [searchImagesState, setSearchImagesState] = useState({
    searchImages: [],
    likeImage: false,
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
    <div className="container">
      <div className="searchStyle">
        <form onSubmit={onSubmit}>
          <input
            className="col m6"
            type="search"
            name="search"
            placeholder="Search for More Images"
          />
          <input className="btn blue" type="submit" value="Submit"></input>
        </form>
      </div>

      <div className="row">
        {searchImagesState.searchImages.map((image) => (
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img
                  className="materialboxed"
                  src={image.cover_photo.urls.regular}
                />

                <a
                  className={
                    searchImagesState.likeImage
                      ? "btn-floating halfway-fab waves-effect waves-light red"
                      : "btn-floating halfway-fab waves-effect waves-light black"
                  }
                  onClick={() =>
                    setSearchImagesState({
                      ...searchImagesState,
                      likeImage: true,
                    })
                  }
                >
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <p>{image.cover_photo.alt_description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
