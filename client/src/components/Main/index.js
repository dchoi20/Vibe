import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";
import M from "materialize-css/dist/js/materialize.min.js";
import ImageSearch from "../ImageSearch";
import SideNav from "../SideNav";
import Footer from "../Footer";

export default function Main() {
  const [imagesState, setImagesState] = useState({
    images: [],
  });

  useEffect(() => {
    API.getImages().then((res) => {
      setImagesState({
        ...imagesState,
        images: res.data,
      });
    });
  }, []);

  useEffect(() => {
    if (imagesState.images.length > 0) {
      let elems = document.querySelectorAll(".carousel");

      M.Carousel.init(elems);
    }
  }, [imagesState]);

  return (
    <div className="testingSomething">
      <SideNav />
      <ImageSearch />
      <Footer />
    </div>
  );
}
