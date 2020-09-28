import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import M from "materialize-css/dist/js/materialize.min.js";

import NavBar from "../Navbar/Navbar";
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
      console.log(elems);
      M.Carousel.init(elems);
    }
  }, [imagesState]);

  return (
    <div>
      <div className="carousel">
        {imagesState.images.map((image) => (
          <a className="carousel-item" href="">
            <img src={image.urls.regular} alt={image.id} />
          </a>
        ))}
      </div>
      <Form.Control type="text" placeholder="Search Here ..." />
      <Button variant="primary" size="lg" block>
        Search Image
      </Button>
      <br />
    </div>
  );
}
