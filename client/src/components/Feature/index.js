import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import M from "materialize-css/dist/js/materialize.min.js";
import SideNav from "../SideNav";

export default function Feature() {
  const [featureImage, setFeatureImage] = useState({
    feature: [],
  });

  useEffect(() => {
    API.getImages().then((res) => {
      console.log(res.data);
      setFeatureImage({
        ...featureImage,
        feature: res.data,
      });
    });
  }, []);

  useEffect(() => {
    let elems = document.querySelectorAll(".materialboxed");
    M.Materialbox.init(elems);
  });

  return (
    <div>
      <SideNav />
      <h1>Featured Images</h1>
      {featureImage.feature.map((image) => {
        return (
          <img
            className="materialboxed"
            src={image.urls.regular}
            alt={image.alt_description}
            key={image.id}
          />
        );
      })}
    </div>
  );
}
