import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import M from "materialize-css/dist/js/materialize.min.js";
import ImageSearch from "../ImageSearch";
import SideNav from "../SideNav";
import Footer from "../Footer";

import { Form, Button } from "react-bootstrap";

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

      M.Carousel.init(elems);
    }
  }, [imagesState]);

  return (
    <div className="testingSomething">
      <SideNav />
      {/* <div className="row">
        <div className="col m2"></div>
        <div className="col m8">
          <div className="col m2"></div>

          <div className="carousel center">
            <h5 className="center-align">Daily Featured Images</h5>
            {imagesState.images.map((image) => (
              <img
                className="carousel-item"
                src={image.urls.regular}
                alt={image.id}
                key={image.id}
              />
            ))}
          </div>
        </div>
      </div> */}
      <ImageSearch />

      <Footer />
    </div>
  );
}
