import React, { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "../SideNav";
import Footer from "../Footer";

export default function Favorites() {
  const [userFavorite, setUserFavorite] = useState({
    collection: [],
  });

  let key = 0;
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
        <div className="row collectionStyle">
          {userFavorite.collection.map((image) => {
            return <img src={image.favImageURL} alt={image._id} key={key++} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
