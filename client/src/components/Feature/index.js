import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";
import SideNav from "../SideNav";
import Footer from "../Footer";
import "./style.css";
export default function Feature() {
  const [featureImage, setFeatureImage] = useState({
    feature: [],
  });

  const config = {
    headers: {
      Authorization: localStorage.token,
    },
  };

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

  function likeImage(e, image, i) {
    // Save to database
    const favorite = image.urls.regular;
    console.log(favorite);

    axios
      .post("/users/favorite/", { favImageURL: favorite }, config)
      .then((res) => {
        console.log(res);
        console.log(favorite);
        setFeatureImage({
          ...featureImage,
          feature: featureImage.feature.map((image, j) => {
            if (i === j) return { ...image, isLiked: !image.isLiked };
            return image;
          }),
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <SideNav />
      <div className="container">
        <h2 className="center-align">Daily Featured Images</h2>
        <div className="row">
          <div className="col m2"></div>
          <div className="col m8">
            {featureImage.feature.map((image, i) => {
              return (
                <div className="col s12 m12" key={image.id}>
                  <div className="card">
                    <div className="card-image">
                      <img className="materialboxed" src={image.urls.regular} />

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
                      <p>{image.alt_description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col m2"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
