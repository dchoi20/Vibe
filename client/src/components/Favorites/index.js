import React, { useEffect, useState } from "react";
import axios from "axios";
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
      {userFavorite.collection.map((image) => {
        return <img src={image.favImageURL} alt={image._id} />;
      })}
    </div>
  );
}
