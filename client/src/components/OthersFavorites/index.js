import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideNav from "../SideNav";

// import FavoritesRender from "../FavoriteRender";
// import Favorite from "../../../../models/Favorite";

export default function OtherFavorites() {
  const [otherFav, setOtherFav] = useState({
    collection: [],
  });
  const config = {
    headers: {
      Authorization: localStorage.token,
    },
  };

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios
      .get("/others/" + id)

      .then((res) => {
        console.log(res.data);
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

      {otherFav.collection.map((image) => {
        return (
          <img
            src={image.favImageURL}
            alt={image.favImageURL}
            key={image._id}
          />
        );
      })}
      {/* <FavoritesRender userFavorite={otherFav}/> */}
    </div>
  );
}
