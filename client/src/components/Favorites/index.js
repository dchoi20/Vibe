import React, { useEffect, useState } from "react";
import axios from "axios";

import FavoriteRender from "../FavoriteRender/index"

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
        // console.log(res.data);
        setUserFavorite({
          ...userFavorite,
          collection: res.data,
        });
      })
     
      .catch((err) => console.log(err));
  }, []);

  return (
      < FavoriteRender userFavorite={userFavorite} />
  );
}
