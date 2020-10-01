import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import M from "materialize-css/dist/js/materialize.min.js";
import "./style.css";
import axios from "axios";

export default function ImageSearch() {
  const [searchImagesState, setSearchImagesState] = useState({
    searchImages: [],
  });
  const config = {
    headers: {
      Authorization: localStorage.token,
    },
  };

  function onSubmit(e) {
    e.preventDefault();

    let query = e.target.search.value;

    API.searchImages(query).then((res) => {
      // console.log(res.data);
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
    const favorite = image.cover_photo.urls.regular;
    console.log(favorite);
    console.log(image.cover_photo.urls.regular);

    axios
      .post("/users/favorite/", { favImageURL: favorite }, config)
      .then((res) => {
        console.log(favorite);
        setSearchImagesState({
          ...searchImagesState,
          searchImages: searchImagesState.searchImages.map((image, j) => {
            if (i === j) return { ...image, isLiked: !image.isLiked };
            return image;
          }),
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div id="searchStyle">
        <div className="row searchForm">
          <div className="col m2"></div>
          <form className="col m8" onSubmit={onSubmit}>
            <input
              className="col m10 s12"
              type="search"
              name="search"
              placeholder="Search for More Images"
            />

            <input
              className="btn blue col m2 s4"
              type="submit"
              value="Search"
            ></input>
          </form>
          <div className="col m2"></div>
        </div>
        <div className="row">
          {searchImagesState.searchImages.map((image, i) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
