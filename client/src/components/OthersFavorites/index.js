import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

import FavoritesRender from "../FavoriteRender";
// import Favorite from "../../../../models/Favorite";

export default function OtherFavorites() {
  const [ otherFav , setOtherFav] = useState ({
    collection : [],
  })
  const config = {
    headers: {
      Authorization: localStorage.token,
    },
  };


  const {id} = useParams()

      useEffect (() => {
        console.log(id)
        axios.get("/others/" + id)
        
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      }, [id])
        
  return (
    <div>
      <h1></h1>
      <FavoritesRender userFavorite={otherFav}/>
     
    </div>
  );
}
