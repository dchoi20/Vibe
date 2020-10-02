import React, { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "../SideNav";
import Footer from "../Footer";

export default function Favorites() {
  const [userFavorite, setUserFavorite] = useState({
    collection: [],
  });

  const config = {
    headers: {
      Authorization: localStorage.token,
    },
  };

  useEffect(() => {
    axios
      .get("/users/favorite/", config)
      .then((res) => {
        console.log(res.data);
        setUserFavorite({
          ...userFavorite,
          collection: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <SideNav />
      <div className="container">
        <div class="row">
          <div className="col m1"></div>
          <div className="card">
            <div className="card-image">
              {userFavorite.collection.map((image) => {
                return <img src={image.favImageURL} alt={image._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
