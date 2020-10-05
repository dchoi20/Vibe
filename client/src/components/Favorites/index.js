import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import FavoriteRender from "../FavoriteRender/index";

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
        setUserFavorite({
          ...userFavorite,
          collection: res.data,
        });
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <FavoriteRender userFavorite={userFavorite} />
    </div>
  );
}
