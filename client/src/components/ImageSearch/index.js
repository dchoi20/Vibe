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
  let key = 0;

  function onSubmit(e) {
    e.preventDefault();

    let query = e.target.search.value;

    API.searchImages(query).then((res) => {
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

    axios
      .post("/users/favorite/", { favImageURL: favorite }, config)
      .then((res) => {
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
        <div className="row">
          <div className="card col m12">
            <h2 className="center-align">Start Exploring</h2>
            <div className="card-content">
              <div className="row">
                <blockquote className="col m6 s12 center">
                  "Photography is the story I fail to put into words..."
                  <br /> <cite className="center-align">Destin Sparks</cite>
                </blockquote>
                <form className="col m6 s12" onSubmit={onSubmit}>
                  <input
                    className="input-field col m12 s12"
                    type="search"
                    name="search"
                    placeholder="Search for More Images"
                  />

                  <input
                    className=" input-field btn black col m3 s4 btnStyle"
                    type="submit"
                    value="Search"
                  ></input>
                </form>

                <div className="col m1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {searchImagesState.searchImages.map((image, i) => (
            <div className="col s12 m6" key={key++}>
              <div className="card">
                <div className="card-image">
                  <img
                    className="materialboxed"
                    src={image.cover_photo.urls.regular}
                  />

                  <a
                    className={
                      image.isLiked
                        ? "btn-floating halfway-fab waves-effect waves-light blue"
                        : "btn-floating halfway-fab waves-effect waves-light black"
                    }
                    onClick={(e) => likeImage(e, image, i)}
                  >
                    <i className="material-icons">favorite</i>
                  </a>
                </div>
                <div className="card-content center">
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
