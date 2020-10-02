import React, { useEffect, useState } from "react";
import axios from "axios";
import SideNav from "../SideNav";
import Footer from "../Footer";

export default function OtherFavorites() {
  const [userFavorite, setUserFavorite] = useState({
    collection: [],
  });

  const config = {
    headers: {
      Authorization: localStorage.token,
    },
  };
 
  useEffect(() => {
      const id = 
    axios
      .get("/others/", config)
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
        <div class="row collectionStyle">
          {userFavorite.collection.map((image) => {
            return <img src={image.favImageURL} alt={image._id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
