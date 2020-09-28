import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import M from "materialize-css/dist/js/materialize.min.js";

import NavBar from "../Navbar/Navbar";

export default function Main() {
  const [imagesState, setImagesState] = useState({
    images: [],
  });

  useEffect(() => {
    API.getImages().then((res) => {
      console.log(res.data);
      setImagesState({
        ...imagesState,
        images: res.data,
      });
    });
  }, []);

  useEffect(() => {
    console.log("I was called!");
    if (imagesState.images.length > 0) {
      let elems = document.querySelectorAll(".carousel");
      console.log(elems);
      M.Carousel.init(elems);
    }
  }, [imagesState]);

  return (
    <div>
      <div className="carousel">
        {/* <a class="carousel-item" href="#one!">
          <img src="https://lorempixel.com/250/250/nature/1" />
        </a>
        <a class="carousel-item" href="#two!">
          <img src="https://lorempixel.com/250/250/nature/2" />
        </a>
        <a class="carousel-item" href="#three!">
          <img src="https://lorempixel.com/250/250/nature/3" />
        </a>
        <a class="carousel-item" href="#four!">
          <img src="https://lorempixel.com/250/250/nature/4" />
        </a>
        <a class="carousel-item" href="#five!">
          <img src="https://lorempixel.com/250/250/nature/5" />
        </a> */}
        {imagesState.images.map((image) => (
          <a className="carousel-item" href="">
            <img src={image.urls.regular} alt={image.id} />
          </a>
        ))}
      </div>
    </div>
  );
}
