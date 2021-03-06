import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideNav from "../SideNav";
import Footer from "../Footer";

export default function OtherFavorites() {
  const [otherFav, setOtherFav] = useState({
    collection: [],
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("/api/others/" + id)

      .then((res) => {
        setOtherFav({
          ...otherFav,
          collection: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <SideNav />
      <div className="container">
        <h2 className="center-align">Image Collection</h2>
        <div className="row">
          <div className="col m2"></div>

          <div className="col m8">
            {otherFav.collection.map((image) => {
              return (
                <div className="card favoritesCard" key={image._id}>
                  <div className="card-image">
                    <img src={image.favImageURL} alt={image._id} />
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
