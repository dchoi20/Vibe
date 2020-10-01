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
  }

  useEffect(() => {
    let elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems);
  });

  function likeImage(e, image, i) {
    // Save to database
    console.log(image.cover_photo.urls.regular);
    setSearchImagesState({
      ...searchImagesState,
      searchImages: searchImagesState.searchImages.map((image, j) => {
        if (i === j) return { ...image, isLiked: !image.isLiked };
        return image;
      }),
    });
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

      {searchImagesState.searchImages.map((image, i) => (
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img
                  className="materialboxed"
                  src={image.cover_photo.urls.regular}
                />

                <a
                  className={
                    image.isLiked
                      ? "btn-floating halfway-fab waves-effect waves-light red"
                      : "btn-floating halfway-fab waves-effect waves-light black"
                  }
                  onClick={(e) => likeImage(e, image, i)}
                >
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <p>{image.cover_photo.alt_description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
