import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

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
    let elems = document.querySelectorAll(".carousel");
    let instances = M.Carousel.init(elems, options);
  });

  return (
    <div>
      <div className="carousel">
        {imagesState.images.map((image) => (
          <a className="carousel-item" href="">
            <img src={image.urls.thumb} alt={image.id} />
          </a>
        ))}
      </div>
    </div>
  );
}
